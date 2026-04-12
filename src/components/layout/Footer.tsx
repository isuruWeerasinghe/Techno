import { Facebook, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-navy/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center border border-navy/5 shadow-sm">
                <svg viewBox="0 0 100 100" className="w-7 h-7">
                  <path d="M50 20 L35 80 L65 80 Z" fill="none" stroke="#00A3FF" strokeWidth="4" />
                  <path d="M40 50 L60 50 M43 65 L57 65" stroke="#00A3FF" strokeWidth="3" />
                  <circle cx="50" cy="20" r="4" fill="#00A3FF" />
                  <path d="M50 10 Q65 10 65 25 M50 5 Q75 5 75 30" fill="none" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-navy leading-none text-lg">TECHNO</span>
                <span className="text-[9px] text-electric font-bold tracking-[0.25em] uppercase">Solutions & Services</span>
              </div>
            </div>
            <p className="text-navy/60 text-sm leading-relaxed mb-8">
              Empowering Connectivity, Building Solutions, and Enhancing Efficiency for a Connected World. Since 2016.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-light-grey flex items-center justify-center text-navy hover:bg-electric hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Our Projects", href: "#projects" },
                { name: "Gallery", href: "#gallery" },
                { name: "Equipment", href: "#equipment" },
                { name: "Careers", href: "#contact" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-navy/60 hover:text-electric text-sm transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-4">
              {["Site Acquisition", "Power Acquisition", "Tower Erection", "Electrical Solutions", "Civil Works", "Logistics & IT"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-navy/60 hover:text-electric text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6 uppercase text-xs tracking-widest">Compliance</h4>
            <p className="text-navy/60 text-xs leading-relaxed mb-6">
              Fully compliant with TRCSL, EPL, and local government regulations. Certified for nationwide infrastructure rollout.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-light-grey rounded text-[10px] font-bold text-navy/40 uppercase tracking-tighter">EPL Certified</div>
              <div className="px-3 py-1 bg-light-grey rounded text-[10px] font-bold text-navy/40 uppercase tracking-tighter">TRCSL Compliant</div>
            </div>
          </div>
        </div>

        <hr className="border-navy/5 mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-navy/40 text-xs">
            (c) 2026 Techno Solutions & Services Lanka (Pvt) Ltd. All rights reserved.
          </div>
          <div className="flex gap-8 text-navy/40 text-xs">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-electric transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};
