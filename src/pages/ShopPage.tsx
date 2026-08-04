import { useMemo, useState } from 'react';
import { menuItems } from '../data/menu';
import { useCart } from '../context/CartContext';
import type { MenuItem, OrderType } from '../types';

const orderTypeLabels: Record<OrderType, string> = {
  delivery: 'Delivery',
  pickup: 'Pickup',
  'in-shop': 'In-Shop',
};

function formatCurrency(value: number) {
  return `₦${value.toLocaleString()}`;
}

export default function ShopPage() {
  const { items, subtotal, deliveryFee, total, orderType, setOrderType, addItem, removeItem, updateQuantity, itemCount } = useCart();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [deliveryPhone, setDeliveryPhone] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliverySlot, setDeliverySlot] = useState('');
  const [reference, setReference] = useState('');

  const selectedItems = useMemo(() => items, [items]);

  const handleCheckout = () => {
    if (!customerName || !customerEmail || !deliveryPhone) {
      alert('Please provide your name, email, and phone before placing an order.');
      return;
    }

    const newReference = `MCH-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    setReference(newReference);
    alert(`Order placeholder created. Reference: ${newReference}`);
  };

  return (
    <div className="bg-[#f8f9fa] px-8 pb-20 pt-8">
      <section className="mx-auto mb-10 max-w-7xl rounded-[32px] bg-[linear-gradient(rgba(44,85,48,0.9),rgba(44,85,48,0.8)),url('https://i.ibb.co/C3QwGCtD/unnamed.webp')] bg-cover bg-center px-8 py-16 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Shop</h1>
        <p className="mx-auto max-w-2xl text-lg opacity-95">
          Browse our menu and place your order for delivery, pickup, or in-shop dining.
        </p>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
            <div className="mb-6 flex flex-wrap gap-3">
              {(Object.entries(orderTypeLabels) as [OrderType, string][]).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setOrderType(key)}
                  className={`rounded-full px-4 py-2 font-semibold ${orderType === key ? 'bg-[#7ed321] text-white' : 'bg-[#f3f7f1] text-[#333]'}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {menuItems.map((item) => {
                const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity ?? 0;
                return (
                  <div key={item.id} className="overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white">
                    <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
                    <div className="p-5">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <span className="text-sm font-semibold text-[#7ed321]">{formatCurrency(item.price)}</span>
                      </div>
                      <p className="mb-4 text-sm text-[#666]">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <button type="button" onClick={() => setSelectedItem(item)} className="font-semibold text-[#2c5530]">
                          Quick View
                        </button>
                        <div className="flex items-center gap-2">
                          <button type="button" onClick={() => updateQuantity(item.id, Math.max(0, quantity - 1))} className="h-8 w-8 rounded-full bg-[#f3f7f1] font-bold">
                            −
                          </button>
                          <span className="min-w-6 text-center">{quantity}</span>
                          <button type="button" onClick={() => addItem(item.id)} className="h-8 w-8 rounded-full bg-[#7ed321] font-bold text-white">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Your Order</h2>
              <span className="rounded-full bg-[#f3f7f1] px-3 py-1 text-sm font-semibold">{itemCount} items</span>
            </div>

            {selectedItems.length === 0 ? (
              <p className="py-8 text-center text-[#666]">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {selectedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b border-[#f0f0f0] pb-3 last:border-b-0">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-[#666]">Qty {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatCurrency(item.price * item.quantity)}</p>
                      <button type="button" onClick={() => removeItem(item.id)} className="text-sm text-[#7ed321]">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 space-y-2 rounded-[12px] bg-[#f8fff8] p-4">
              <div className="flex justify-between text-sm text-[#555]"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
              <div className="flex justify-between text-sm text-[#555]"><span>Delivery fee</span><span>{orderType === 'delivery' ? formatCurrency(deliveryFee) : formatCurrency(0)}</span></div>
              <div className="flex justify-between border-t border-[#e8f5e8] pt-2 text-lg font-semibold text-[#2c5530]"><span>Total</span><span>{formatCurrency(total)}</span></div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
            <h3 className="mb-4 text-xl font-semibold">Checkout Details</h3>
            <div className="space-y-4">
              <input className="w-full rounded-full border border-[#e8f5e8] px-4 py-3" placeholder="Customer name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
              <input className="w-full rounded-full border border-[#e8f5e8] px-4 py-3" placeholder="Email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
              <input className="w-full rounded-full border border-[#e8f5e8] px-4 py-3" placeholder="Phone" value={deliveryPhone} onChange={(e) => setDeliveryPhone(e.target.value)} />
              {orderType === 'delivery' ? (
                <>
                  <input className="w-full rounded-full border border-[#e8f5e8] px-4 py-3" placeholder="Delivery area" value={deliveryArea} onChange={(e) => setDeliveryArea(e.target.value)} />
                  <textarea className="min-h-24 w-full rounded-2xl border border-[#e8f5e8] px-4 py-3" placeholder="Delivery address" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
                  <input className="w-full rounded-full border border-[#e8f5e8] px-4 py-3" placeholder="Delivery slot" value={deliverySlot} onChange={(e) => setDeliverySlot(e.target.value)} />
                </>
              ) : null}
              <button type="button" onClick={handleCheckout} className="w-full rounded-full bg-[#7ed321] px-4 py-3 font-semibold text-white">
                Place Order
              </button>
              {reference ? <p className="text-sm text-[#2c5530]">Reference: {reference}</p> : null}
            </div>
          </div>
        </div>
      </div>

      {selectedItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-lg rounded-[24px] bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">{selectedItem.name}</h3>
              <button type="button" onClick={() => setSelectedItem(null)} className="text-xl">×</button>
            </div>
            <img src={selectedItem.image} alt={selectedItem.name} className="mb-4 h-56 w-full rounded-2xl object-cover" />
            <p className="mb-4 text-[#666]">{selectedItem.description}</p>
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xl font-semibold text-[#7ed321]">{formatCurrency(selectedItem.price)}</span>
              <button type="button" onClick={() => addItem(selectedItem.id)} className="rounded-full bg-[#7ed321] px-4 py-2 font-semibold text-white">
                Add to cart
              </button>
            </div>
            <button type="button" onClick={() => setSelectedItem(null)} className="w-full rounded-full border border-[#e8f5e8] px-4 py-3 font-semibold text-[#2c5530]">
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
