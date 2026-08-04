import crypto from 'crypto';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || '',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.FIREBASE_APP_ID || '',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function verifyPaystackSignature(rawBody, signature) {
  const secret = process.env.PAYSTACK_SECRET || '';
  if (!secret || !signature) return false;
  const expected = crypto.createHmac('sha512', secret).update(rawBody).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export async function handleWebhook(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ ok: false, message: 'Method not allowed' }));
    return;
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  const rawBody = Buffer.concat(chunks).toString('utf8');
  const signature = req.headers['x-paystack-signature'];

  if (!verifyPaystackSignature(rawBody, signature)) {
    res.statusCode = 401;
    res.end(JSON.stringify({ ok: false, message: 'Invalid signature' }));
    return;
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    res.statusCode = 400;
    res.end(JSON.stringify({ ok: false, message: 'Invalid JSON' }));
    return;
  }

  const event = payload.event || payload.data?.status;
  if (event !== 'charge.success' && payload.status !== 'success') {
    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true, ignored: true }));
    return;
  }

  const reference = payload.data?.reference || payload.reference;
  const paidAmount = (payload.data?.amount || payload.amount || 0) / 100;

  const ordersRef = collection(db, 'orders');
  const q = query(ordersRef, where('paymentReference', '==', reference));
  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    const orderDoc = snapshot.docs[0];
    await updateDoc(doc(db, 'orders', orderDoc.id), {
      status: 'paid',
      paidAt: new Date().toISOString(),
      paidAmount,
      paymentStatus: 'success',
    });
  }

  res.statusCode = 200;
  res.end(JSON.stringify({ ok: true, received: true, reference }));
}
