const sections = [
  {
    heading: 'Acceptance of Terms',
    text: 'By using our website or placing an order, you agree to these terms and conditions.',
  },
  {
    heading: 'Orders and Payments',
    text: 'All orders are subject to availability and confirmation. Payments are processed securely through Paystack.',
  },
  {
    heading: 'Delivery and Pickup',
    text: 'Delivery and pickup options are available depending on location and current operating hours.',
  },
  {
    heading: 'Refunds and Cancellations',
    text: 'Please contact us as soon as possible if you need to cancel or modify an order after checkout.',
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[#f8f9fa] px-8 pb-20 pt-8">
      <section className="mx-auto mb-12 max-w-7xl rounded-[32px] bg-[linear-gradient(rgba(44,85,48,0.9),rgba(44,85,48,0.8)),url('https://i.ibb.co/C3QwGCtD/unnamed.webp')] bg-cover bg-center px-8 py-24 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Terms & Conditions</h1>
        <p className="mx-auto max-w-2xl text-lg opacity-95">
          These terms govern your use of our site and your order experience with May&apos;s Chills.
        </p>
      </section>

      <div className="mx-auto max-w-5xl rounded-[24px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="mb-8 rounded-[15px] border-2 border-[#7ed321] bg-[#f8fff8] p-8 text-center">
          <h3 className="mb-3 text-xl font-semibold text-[#2c5530]">Please Read Carefully</h3>
          <p className="text-[#666]">
            These terms are important and help ensure a smooth ordering experience for everyone.
          </p>
        </div>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading} className="border-b border-[#f0f0f0] pb-8 last:border-b-0 last:pb-0">
              <h2 className="mb-4 text-2xl font-semibold text-[#2c5530]">{section.heading}</h2>
              <p className="text-[#555]">{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
