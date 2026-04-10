const cards = [
  {
    icon: "analytics",
    title: "Home Value Estimate",
    description:
      "Get a starting point for what your home may be worth based on real-time market trends.",
  },
  {
    icon: "insights",
    title: "Seller Insights",
    description:
      "Understand your options, buyer demand in your area, and seasonal trends before making a move.",
  },
  {
    icon: "map",
    title: "Simple Next Steps",
    description:
      "Get personalized guidance whether you want to sell soon or are just exploring your equity.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Expert Insights at Your Fingertips
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            We provide the data and professional context you need to make
            confident decisions about your largest asset.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-surface-container-lowest p-6 sm:p-10 rounded-lg shadow-[0_12px_40px_rgba(30,46,81,0.04)] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                  {card.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
