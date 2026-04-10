import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", target: "top" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Why It Matters", target: "why-it-matters" },
];

function scrollTo(target) {
  if (target === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.filter((l) => l.target !== "top").map((l) => l.target);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    const onScroll = () => {
      if (window.scrollY < 200) setActive("top");
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function handleNavClick(target) {
    scrollTo(target);
    setMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl shadow-[0_12px_40px_rgba(30,46,81,0.06)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20">
        <div className="text-xl sm:text-2xl font-black text-blue-800 tracking-tighter">
          HomeValue
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 font-headline font-semibold text-sm tracking-tight">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className={
                active === link.target
                  ? "text-blue-700 font-bold border-b-2 border-blue-600 py-1 transition-colors duration-300"
                  : "text-slate-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer py-1 border-b-2 border-transparent"
              }
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/get-started"
            className="signature-gradient text-on-primary px-5 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Get Started
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className={`text-left py-3 px-4 rounded-lg font-headline font-semibold text-sm transition-colors ${
                active === link.target
                  ? "text-blue-700 bg-surface-container-high"
                  : "text-slate-600 hover:bg-surface-container-low"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
