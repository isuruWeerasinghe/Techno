import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "Communication Infrastructure",
    description: "Site acquisition, power acquisition, and approvals.",
    href: "#services",
  },
  {
    title: "Electrical & Protection",
    description: "Total electrical solutions and lightning protection.",
    href: "#services",
  },
  {
    title: "Civil & Telecom Works",
    description: "Tower erection, rectification, and site development.",
    href: "#services",
  },
  {
    title: "Logistics & IT",
    description: "Tower transport, office moving, and IT solutions.",
    href: "#services",
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center border border-white/10 shadow-lg">
            <svg viewBox="0 0 100 100" className="w-7 h-7">
              <path d="M50 20 L35 80 L65 80 Z" fill="none" stroke="#00A3FF" strokeWidth="4" />
              <path d="M40 50 L60 50 M43 65 L57 65" stroke="#00A3FF" strokeWidth="3" />
              <circle cx="50" cy="20" r="4" fill="#00A3FF" />
              <path d="M50 10 Q65 10 65 25 M50 5 Q75 5 75 30" fill="none" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white leading-none text-lg tracking-tight">TECHNO</span>
            <span className="text-[9px] text-electric font-bold tracking-[0.25em] uppercase">Solutions & Services</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className="text-sm font-medium text-white/80 hover:text-electric transition-colors px-4 py-2"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/80 hover:text-electric hover:bg-white/5 data-[state=open]:text-electric">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-navy border border-white/10">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink
                          href={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-electric"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/60">
                            {service.description}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#projects"
                  className="text-sm font-medium text-white/80 hover:text-electric transition-colors px-4 py-2"
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#gallery"
                  className="text-sm font-medium text-white/80 hover:text-electric transition-colors px-4 py-2"
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="text-sm font-medium text-white/80 hover:text-electric transition-colors px-4 py-2"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="h-6 w-px bg-white/20" />

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-electric hover:bg-white/5">
              EN
            </Button>
            <Button className="bg-electric hover:bg-electric/90 text-white font-semibold px-6">
              Request Proposal
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Home</a>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold text-electric uppercase tracking-widest">Services</span>
                {services.map((s) => (
                  <a key={s.title} href={s.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-electric pl-4 border-l border-white/10">
                    {s.title}
                  </a>
                ))}
              </div>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Projects</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Gallery</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">About Us</a>
              <a href="#equipment" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white">Equipment</a>
              <hr className="border-white/10" />
              <Button 
                render={<a href="#contact" />}
                nativeButton={false}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-electric w-full py-6 text-lg"
              >
                Request Proposal
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
