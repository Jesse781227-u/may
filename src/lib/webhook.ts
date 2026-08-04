const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || '/api/webhook';

export async function submitWebhookOrder(payload: Record<string, unknown>) {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-paystack-signature': 'test-signature',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Webhook submission failed');
  }

  return response.json();
}
