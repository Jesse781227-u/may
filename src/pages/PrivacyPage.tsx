const sections = [
  {
    heading: 'Information We Collect',
    text: 'We collect the information you provide during checkout, account creation, and support requests such as your name, email, phone number, and delivery address.',
  },
  {
    heading: 'How We Use Your Information',
    text: 'Your information is used to process orders, communicate order updates, improve our services, and ensure secure payments and account access.',
  },
  {
    heading: 'Sharing Information',
    text: 'We do not sell your personal information. We may share it with payment providers and delivery partners only where necessary to fulfill your order.',
  },
  {
    heading: 'Your Choices',
    text: 'You can contact us at any time to request access to, correction of, or deletion of your personal information where applicable.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[#f8f9fa] px-8 pb-20 pt-8">
      <section className="mx-auto mb-12 max-w-7xl rounded-[32px] bg-[linear-gradient(rgba(44,85,48,0.9),rgba(44,85,48,0.8)),url('https://i.ibb.co/C3QwGCtD/unnamed.webp')] bg-cover bg-center px-8 py-24 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
        <p className="mx-auto max-w-2xl text-lg opacity-95">
          We are committed to protecting your privacy and handling your information responsibly.
        </p>
      </section>

      <div className="mx-auto max-w-5xl rounded-[24px] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="mb-8 rounded-[12px] border-l-4 border-[#7ed321] bg-[#f8fff8] p-8">
          <h3 className="mb-3 text-xl font-semibold text-[#2c5530]">Summary</h3>
          <p className="text-[#555]">
            This privacy policy explains how May&apos;s Chills collects, uses, stores, and protects the information you share with us.
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
