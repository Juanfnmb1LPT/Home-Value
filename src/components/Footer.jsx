const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Homeowner Resources", href: "#", highlight: true },
];

const socialIcons = ["share", "public"];

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-8 gap-6">
        <div className="space-y-2">
          <div className="text-lg font-bold text-blue-900">HomeValue</div>
          <p className="font-body text-xs font-medium text-slate-500">
            &copy; 2026 HomeValue. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-body text-xs font-medium">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className={`transition-colors opacity-80 hover:opacity-100 ${
                link.highlight
                  ? "text-blue-700 underline hover:text-blue-600"
                  : "text-slate-500 hover:text-blue-600"
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          {socialIcons.map((icon) => (
            <a
              key={icon}
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
