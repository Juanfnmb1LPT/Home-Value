import { Link } from "react-router-dom";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA4smJ6tLlfWYOfDETnef2sc3zZ_TWdw45uWKM3eYstSZoz7PobGYbSvP8JDd6uoHmuXym036JH0MyPBoLUfMFXWDg7JhI2qfIw3A7Q90fhFx1hO1fp3iySusdQCyor3boERx8sCY45Itd16jsXOdMcg55wkpILgIvUVdDKBhb8RElevjrVGuARopezrBjtlPZSsH3NE296At4MBwfJ_cSc85FxaPt7QqpMPi4xgfKGoxZ_3TszMr7y0LXWBvp5rzjDalZVEMWrYl_R";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen lg:min-h-[921px] flex items-center px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden py-12 lg:py-0">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="z-10 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full text-primary font-bold text-xs tracking-wider uppercase">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            Trusted by 50k+ Homeowners
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.1]">
            Find Out What Your{" "}
            <span className="text-primary italic">Home</span> May Be Worth
          </h1>
          <p className="text-base sm:text-xl text-on-surface-variant leading-relaxed max-w-xl">
            Get a simple estimate and helpful next steps based on your property.
            No pressure. Just helpful information.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/get-started" className="signature-gradient text-on-primary px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all">
              Get Started
            </Link>
            <button
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-surface-container-high text-on-primary-container px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-surface-container-highest transition-all cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="relative lg:h-[700px] w-full">
          <div className="absolute inset-0 bg-primary/5 rounded-xl -rotate-2 scale-105" />
          <div className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl">
            <img
              alt="Modern Luxury Home"
              className="w-full h-full object-cover"
              src={heroImage}
            />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 bg-white/80 backdrop-blur-xl rounded-lg shadow-lg border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-primary tracking-widest uppercase">
                    Estimated Value
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-on-surface">
                    $1,245,000
                  </p>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  +4.2% Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
