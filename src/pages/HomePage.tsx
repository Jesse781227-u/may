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
      <section className="relative overflow-hidden bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('https://i.postimg.cc/bYSw-XJ6z/22633.jpg')] bg-cover bg-center px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <h1 className="mb-5 text-4xl font-bold leading-tight text-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl">
            Fresh meals, delivered fast.
          </h1>
          <p className="mb-8 max-w-2xl text-base sm:text-lg lg:text-xl">
            Order your favorites from May&apos;s Chills with fast pickup, delivery, or in-shop dining.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="/shop" className="rounded-full bg-[#7ed321] px-7 py-3.5 font-bold text-white transition hover:bg-[#6ab91c] sm:px-8 sm:py-4">
              Shop Now
            </a>
            <a href="/faq" className="rounded-full border-2 border-white px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#333] sm:px-8 sm:py-4">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-semibold text-[#333] sm:text-3xl">Popular Picks</h2>
            <p className="text-sm text-[#666] sm:text-base">A few favorites from our menu that customers love.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {featuredCards.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-2xl bg-white p-6 text-center shadow-[0_5px_20px_rgba(0,0,0,0.08)] sm:p-8">
                <img src={card.image} alt={card.title} className="mb-5 h-44 w-full rounded-xl object-cover sm:h-48" />
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl">{card.title}</h3>
                <p className="mb-4 text-sm text-[#666] sm:text-base">{card.description}</p>
                <div className="mb-6 text-lg font-bold text-[#7ed321] sm:text-xl">{card.price}</div>
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
