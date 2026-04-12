import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl text-navy mb-8">
              Trusted Business Support Vendor in Telecommunication
            </h2>
            <p className="text-lg text-navy/70 mb-8 leading-relaxed">
              As a trusted business support vendor in the telecommunication network industry, we deliver high-quality solutions across site acquisition, power acquisition, tower erection, electrical, civil, logistics, and IT.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                "Nationwide Coverage",
                "150+ Skilled Professionals",
                "EPL/COC/LA Approvals",
                "Established Since 2016",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-signal" size={20} />
                  <span className="font-medium text-navy/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-navy/10 pt-10">
              <div>
                <div className="text-3xl font-display font-bold text-navy">
                  <Counter value={9} />+
                </div>
                <div className="text-xs text-navy/50 uppercase font-bold tracking-tighter">Years</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-navy">
                  <Counter value={1000} />+
                </div>
                <div className="text-xs text-navy/50 uppercase font-bold tracking-tighter">Sites</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-navy">
                  <Counter value={150} />+
                </div>
                <div className="text-xs text-navy/50 uppercase font-bold tracking-tighter">Team</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-navy">
                  100%
                </div>
                <div className="text-xs text-navy/50 uppercase font-bold tracking-tighter">Success</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/projectcard/Step-2-Install-the-Cabinet-Body-for-outdoor-server-cabinet.webp"
                alt="Team working on site"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-electric/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-signal/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-24 h-48 border-r-4 border-electric/20 rounded-r-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
