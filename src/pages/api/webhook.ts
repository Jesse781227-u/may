type WebhookRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | undefined>;
};

type WebhookResponse = {
  status: (code: number) => WebhookResponse;
  json: (payload: unknown) => void;
};

type WebhookPayload = {
  event?: string;
  status?: string;
  reference?: string;
  data?: {
    reference?: string;
    amount?: number;
    status?: string;
  };
};

export default function handler(req: WebhookRequest, res: WebhookResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  const signature = req.headers?.['x-paystack-signature'];
  const payload = req.body as WebhookPayload | undefined;

  if (!signature) {
    res.status(401).json({ ok: false, message: 'Missing signature' });
    return;
  }

  if (!payload || typeof payload !== 'object') {
    res.status(400).json({ ok: false, message: 'Invalid payload' });
    return;
  }

  const event = payload.event || payload.data?.status;
  const reference = payload.data?.reference || payload.reference;

  if (event !== 'charge.success' && payload.status !== 'success') {
    res.status(200).json({ ok: true, ignored: true, reference });
    return;
  }

  res.status(200).json({ ok: true, received: true, reference });
}
