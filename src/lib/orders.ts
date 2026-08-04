import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import type { CartItem, OrderType } from '../types';

export async function createOrderRecord(payload: {
  customerName: string;
  customerEmail: string;
  deliveryPhone: string;
  orderType: OrderType;
  deliveryArea: string;
  deliveryAddress: string;
  deliverySlot: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentReference: string;
  uid?: string | null;
}) {
  const docRef = await addDoc(collection(db, 'orders'), {
    ...payload,
    createdAt: serverTimestamp(),
    status: 'pending',
  });

  return docRef.id;
}
