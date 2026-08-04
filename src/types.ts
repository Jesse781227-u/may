export type OrderType = 'delivery' | 'pickup' | 'in-shop';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  ingredients?: string;
  rating?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderData {
  id: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  orderType: OrderType;
  customerName: string;
  customerEmail: string;
  deliveryPhone: string;
  deliveryArea: string;
  deliveryAddress: string;
  deliverySlot: string;
  paymentReference: string;
  status: 'pending' | 'paid';
  createdAt: string;
}
