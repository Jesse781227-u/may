import { describe, expect, it, vi } from 'vitest';
import { submitWebhookOrder } from './webhook';

describe('submitWebhookOrder', () => {
  it('posts the payload to the webhook endpoint and returns the response body', async () => {
    const responseBody = { ok: true, received: true };
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => responseBody,
    });

    vi.stubGlobal('fetch', fetchMock);

    const result = await submitWebhookOrder({ orderId: 'abc123', status: 'pending' });

    expect(fetchMock).toHaveBeenCalledWith(import.meta.env.VITE_WEBHOOK_URL || '/api/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-paystack-signature': 'test-signature',
      },
      body: JSON.stringify({ orderId: 'abc123', status: 'pending' }),
    });
    expect(result).toEqual(responseBody);
  });
});
