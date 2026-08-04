const faqSections = [
  {
    title: 'Products',
    icon: '🥤',
    items: [
      {
        question: 'What kinds of items do you offer?',
        answer: 'We offer fresh meals, wraps, salads, parfaits, and healthy bowls prepared daily.',
      },
      {
        question: 'Are the ingredients fresh?',
        answer: 'Yes. We use fresh ingredients and prepare everything with care to maintain quality and taste.',
      },
    ],
  },
  {
    title: 'Ordering',
    icon: '📦',
    items: [
      {
        question: 'How do I place an order?',
        answer: 'You can place an order from the shop page, choose your meal, and complete checkout through Paystack.',
      },
      {
        question: 'Can I order for pickup?',
        answer: 'Yes. You can choose pickup or in-shop dining during checkout.',
      },
    ],
  },
  {
    title: 'Delivery',
    icon: '🚚',
    items: [
      {
        question: 'Do you offer delivery?',
        answer: 'Yes, we deliver within the covered areas and charge a delivery fee depending on your location.',
      },
      {
        question: 'What are your delivery windows?',
        answer: 'Delivery slots are shown during checkout so you can pick the option that suits you best.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="bg-[#f8f9fa] px-8 pb-20 pt-8">
      <section className="mx-auto mb-12 max-w-7xl rounded-[32px] bg-[linear-gradient(rgba(126,211,33,0.9),rgba(126,211,33,0.8)),url('https://i.ibb.co/C3QwGCtD/unnamed.webp')] bg-cover bg-center px-8 py-24 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
        <p className="mx-auto max-w-2xl text-lg opacity-95">
          Find quick answers to common questions about our products, ordering process, delivery, and more.
        </p>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {faqSections.map((section) => (
          <div key={section.title} className="rounded-2xl bg-white p-8 shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7ed321] to-[#a8e063] text-2xl text-white">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2c5530]">{section.title}</h3>
            </div>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.question} className="border-b border-[#f0f0f0] pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-semibold text-[#333]">{item.question}</h4>
                  <p className="mt-2 text-sm text-[#555]">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
