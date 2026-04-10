const reasons = [
  {
    icon: "account_balance",
    title: "Understand selling position",
    description:
      "Know exactly how much equity you've built to leverage for your next purchase or investment.",
  },
  {
    icon: "compare_arrows",
    title: "Compare options",
    description:
      "Look at different market scenarios and see how they impact your final walkthrough price.",
  },
  {
    icon: "assignment_turned_in",
    title: "Prepare before listing",
    description:
      "Get a head start on necessary repairs and documentation to ensure a seamless selling process.",
  },
];

export default function WhyItMatters() {
  return (
    <section id="why-it-matters" className="py-16 sm:py-32 px-4 sm:px-8 bg-surface-container">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter max-w-3xl mx-auto">
          Knowing your home value helps you plan ahead
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {reasons.map((reason) => (
            <div key={reason.title} className="space-y-6">
              <span
                className="material-symbols-outlined text-5xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {reason.icon}
              </span>
              <h4 className="text-2xl font-bold">{reason.title}</h4>
              <p className="text-on-surface-variant">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
