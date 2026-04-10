import { useState } from "react";
import { Link } from "react-router-dom";

const conditionOptions = ["Excellent", "Good", "Needs work"];
const timelineOptions = ["ASAP", "1-3 months", "3-6 months", "Exploring"];
const interestOptions = [
  { label: "Cash offer", icon: "bolt" },
  { label: "Agent Advice", icon: "support_agent" },
  { label: "Value Only", icon: "visibility" },
];
const trustBadges = [
  { icon: "verified_user", label: "Bank-Level Security" },
  { icon: "privacy_tip", label: "Privacy First Policy" },
  { icon: "query_stats", label: "Real-Time MLS Data" },
];

const initialForm = {
  address: "",
  city: "",
  state: "",
  type: "House",
  bedrooms: "",
  bathrooms: "",
  sqft: "",
  condition: "",
  updated: "",
  timeline: "",
  interest: "",
  name: "",
  email: "",
  phone: "",
};

export default function FormPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="bg-surface font-body text-on-surface min-h-screen">
        <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl h-20">
          <div className="flex justify-between items-center max-w-5xl mx-auto px-8 h-full">
            <Link
              to="/"
              className="group flex items-center gap-2 font-headline font-semibold text-primary transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              <span className="text-sm tracking-tight">Back to Home</span>
            </Link>
            <div className="font-headline font-black text-2xl text-primary tracking-tighter">
              HomeValue
            </div>
          </div>
        </nav>
        <main className="pt-32 pb-24 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <span
                className="material-symbols-outlined text-green-600 text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
            <h1 className="font-headline text-5xl font-extrabold tracking-tight">
              Thank You, {form.name || "Homeowner"}!
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg mx-auto">
              We've received your submission. One of our specialists will be in
              touch shortly with an estimated value for your property.
            </p>
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_60px_rgba(30,46,81,0.06)] p-8 inline-block">
              <p className="text-sm font-semibold text-on-surface-variant mb-2">
                Property submitted
              </p>
              <p className="text-2xl font-bold text-on-surface">
                {[form.address, form.city, form.state].filter(Boolean).join(", ") ||
                  "Your property"}
              </p>
            </div>
            <div>
              <Link
                to="/"
                className="inline-block signature-gradient text-white font-headline font-bold text-lg px-12 py-5 rounded-full hover:shadow-[0_20px_40px_rgba(0,92,170,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl h-20">
        <div className="flex justify-between items-center max-w-5xl mx-auto px-8 h-full">
          <Link
            to="/"
            className="group flex items-center gap-2 font-headline font-semibold text-primary transition-all duration-300"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
            <span className="text-sm tracking-tight">Back to Home</span>
          </Link>
          <div className="font-headline font-black text-2xl text-primary tracking-tighter">
            HomeValue
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-4">
              Get Your Home Value
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mx-auto">
              Tell us a little about your property to get started. We'll
              generate your custom appraisal.
            </p>
          </header>

          {/* Form */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_60px_rgba(30,46,81,0.06)] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-16">
              {/* Property Information */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">home_pin</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold">
                    Property Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      Property Address
                    </label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => update("address", e.target.value)}
                      className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface"
                      placeholder="123 Architect Lane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => update("city", e.target.value)}
                      className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface"
                      placeholder="Modern City"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                        State
                      </label>
                      <input
                        type="text"
                        value={form.state}
                        onChange={(e) => update("state", e.target.value)}
                        className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface"
                        placeholder="CA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                        Type
                      </label>
                      <select
                        value={form.type}
                        onChange={(e) => update("type", e.target.value)}
                        className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface appearance-none"
                      >
                        <option>House</option>
                        <option>Condo</option>
                        <option>Townhome</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Property Details */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold">
                    Property Details
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      value={form.bedrooms}
                      onChange={(e) => update("bedrooms", e.target.value)}
                      className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface"
                      placeholder="3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      value={form.bathrooms}
                      onChange={(e) => update("bathrooms", e.target.value)}
                      className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface"
                      placeholder="2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      Sq Footage (Opt)
                    </label>
                    <input
                      type="text"
                      value={form.sqft}
                      onChange={(e) => update("sqft", e.target.value)}
                      className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface"
                      placeholder="2,400"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      Condition
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {conditionOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => update("condition", opt)}
                          className={`py-3 px-2 rounded-xl font-medium transition-colors border-2 ${
                            form.condition === opt
                              ? "border-primary bg-white"
                              : "border-transparent bg-surface-container-high hover:bg-surface-variant"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      Updated recently?
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => update("updated", opt)}
                          className={`flex-1 text-center py-3 rounded-xl font-medium transition-all ${
                            form.updated === opt
                              ? "bg-primary text-white"
                              : "bg-surface-container-high"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Selling Intent */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">sell</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold">
                    Selling Intent
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-3 ml-1">
                      When are you thinking about selling?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {timelineOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => update("timeline", opt)}
                          className={`py-3 px-2 rounded-xl text-xs md:text-sm font-medium border-2 transition-all ${
                            form.timeline === opt
                              ? "border-primary bg-white"
                              : "border-transparent bg-surface-container-high"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-3 ml-1">
                      What are you interested in?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {interestOptions.map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => update("interest", opt.label)}
                          className={`py-4 px-4 text-left rounded-xl font-medium border-2 transition-all flex items-center justify-between ${
                            form.interest === opt.label
                              ? "border-primary bg-white"
                              : "border-transparent bg-surface-container-high"
                          }`}
                        >
                          {opt.label}
                          <span className="material-symbols-outlined text-primary text-sm">
                            {opt.icon}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold">
                    Contact Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full bg-surface-container-highest/50 border-0 rounded-xl px-5 py-4 focus:ring-4 focus:ring-primary/20 transition-all text-on-surface"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
              </section>

              {/* Submit */}
              <div className="pt-8 text-center space-y-4">
                <button
                  type="submit"
                  className="signature-gradient text-white font-headline font-bold text-lg px-12 py-5 rounded-full hover:shadow-[0_20px_40px_rgba(0,92,170,0.2)] hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
                >
                  Get My Estimate
                </button>
                <p className="text-xs text-on-surface-variant/70 font-medium">
                  We'll use this information to provide an estimate and next
                  steps.
                </p>
              </div>
            </form>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 justify-center"
              >
                <span className="material-symbols-outlined text-3xl">
                  {badge.icon}
                </span>
                <span className="text-sm font-semibold">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-50 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-8 gap-6">
          <div className="text-lg font-bold text-on-surface font-headline">
            HomeValue
          </div>
          <div className="flex gap-8 text-xs font-medium text-slate-500">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Accessibility
            </a>
          </div>
          <div className="text-xs font-medium text-slate-400">
            &copy; 2026 HomeValue. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
