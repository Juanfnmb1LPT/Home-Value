const processImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDVmeTXNsgdLaHzRy41eF2Bj_MuxV-rnFfA7YJZMDocimgS-4JHBDcehZmgRanVKb8RoyhZjEd4fW2D10YrEnfI5QKm-bRlOzHcG7lAx5l52J-wI8cK8ARiDF0Hk4CuFFSii2MJOTWpqlaJXo9pBTjBRm4dAG3NdQ8x5Yv5QY8dCI_pVPRZDcTYOaAwynGSkZFgeYDudkQLPhjOPYoXmofQbtFokzaxgiOAPeYCR7NQidyYVH6fgNSTRYiy8rKayETQOGmWfqWTX0Qe";

const steps = [
  {
    number: 1,
    title: "Enter details",
    description:
      "Simply provide your address and a few key features of your home to begin the analysis.",
  },
  {
    number: 2,
    title: "Get estimate",
    description:
      "We process thousands of local data points to give you a curated valuation range.",
  },
  {
    number: 3,
    title: "Explore steps",
    description:
      "Receive a roadmap of options, from renovations that add value to connecting with local experts.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 sm:gap-20">
        <div className="md:w-1/2 order-2 md:order-1">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
            <img
              alt="Process Visualization"
              className="relative rounded-xl w-full h-full object-cover shadow-2xl"
              src={processImage}
            />
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 space-y-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter">
            Your Journey in <span className="text-primary">Three</span> Simple
            Steps
          </h2>
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center font-bold text-primary">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-on-surface-variant">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
