const featuredCards = [
  {
    title: 'Chicken Salad',
    description: 'Grilled Chicken, Egg, Fresh Vegetables',
    price: '6,500NGN',
    image: 'https://i.ibb.co/NntWJ35r/IMG-20251214-172816-208.jpg',
  },
  {
    title: '400ml Parfait',
    description: 'Greek Yoghurt, Granola, Fresh Fruits, Honey',
    price: '6,500NGN',
    image: 'https://i.ibb.co/qM4FtQFq/IMG-20251214-172855-010.jpg',
  },
  {
    title: 'Chicken Wrap',
    description: 'Crispy Chicken, Fresh Vegetables, Sauce',
    price: '6,500NGN',
    image: 'https://i.ibb.co/1f5FK259/IMG-20251219-130436-348.jpg',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.postimg.cc/bYSw-XJ6z/22633.jpg')] bg-cover bg-center px-8 pb-24 pt-40 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] md:text-6xl">
            Fresh meals, delivered fast.
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Order your favorites from May&apos;s Chills with fast pickup, delivery, or in-shop dining.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/shop" className="rounded-full bg-[#7ed321] px-8 py-4 font-bold text-white transition hover:bg-[#6ab91c]">
              Shop Now
            </a>
            <a href="/faq" className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#333]">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-[#333]">Popular Picks</h2>
            <p className="text-[#666]">A few favorites from our menu that customers love.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredCards.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-2xl bg-white p-8 text-center shadow-[0_5px_25px_rgba(0,0,0,0.1)]">
                <img src={card.image} alt={card.title} className="mb-6 h-48 w-full rounded-xl object-cover" />
                <h3 className="mb-2 text-2xl font-semibold">{card.title}</h3>
                <p className="mb-4 text-[#666]">{card.description}</p>
                <div className="mb-6 text-xl font-bold text-[#7ed321]">{card.price}</div>
                <a href="/shop" className="inline-block rounded-full bg-[#7ed321] px-6 py-3 font-semibold text-white">
                  Go To Shop
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
