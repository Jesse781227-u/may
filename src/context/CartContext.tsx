import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { CartItem, OrderType } from '../types';
import { menuItems } from '../data/menu';

type CartContextValue = {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  orderType: OrderType;
  setOrderType: (value: OrderType) => void;
  addItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (itemId: string) => number;
  itemCount: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'mays-chills-cart';
const DELIVERY_FEE = 500;

function readStoredCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readStoredCart());
  const [orderType, setOrderType] = useState<OrderType>('delivery');

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const deliveryFee = useMemo(() => (orderType === 'delivery' ? DELIVERY_FEE : 0), [orderType]);
  const total = useMemo(() => subtotal + deliveryFee, [subtotal, deliveryFee]);

  const addItem = (itemId: string) => {
    const menuItem = menuItems.find((item) => item.id === itemId);
    if (!menuItem) return;
    setItems((current) => {
      const existing = current.find((item) => item.id === itemId);
      if (existing) {
        return current.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...current, { ...menuItem, quantity: 1 }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems((current) => current.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.id !== itemId);
      }
      return current.map((item) => (item.id === itemId ? { ...item, quantity } : item));
    });
  };

  const clearCart = () => setItems([]);
  const getItemQuantity = (itemId: string) => items.find((item) => item.id === itemId)?.quantity ?? 0;

  const value = useMemo(
    () => ({
      items,
      subtotal,
      deliveryFee,
      total,
      orderType,
      setOrderType,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getItemQuantity,
      itemCount,
    }),
    [items, subtotal, deliveryFee, total, orderType, itemCount, getItemQuantity]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
