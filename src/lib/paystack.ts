export function getPaystackPublicKey() {
  return import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '';
}

export function getPaystackAmount(total: number) {
  return Math.round(total * 100);
}

export function getPaystackMetadata(payload: Record<string, unknown>) {
  return {
    custom_fields: [],
    ...payload,
  };
}
