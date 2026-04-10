import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 max-w-5xl mx-auto">
      <div className="signature-gradient rounded-xl p-8 sm:p-16 text-center text-on-primary shadow-2xl shadow-primary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Curious what your home may be worth?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Start with a simple home value estimate. No commitments, just clear
            data delivered instantly.
          </p>
          <Link to="/get-started" className="inline-block bg-white text-primary px-8 py-4 sm:px-12 sm:py-5 rounded-full font-black text-lg sm:text-xl hover:bg-surface-container-high transition-all active:scale-95">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
