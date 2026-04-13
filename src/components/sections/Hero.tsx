import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SignalPulse } from "@/components/ui/SignalPulse";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const heroImages = [
  "/assets/pichero/hero_1.png",
  "/assets/pichero/hero_2.png",
  "/assets/pichero/hero_3.png",
  "/assets/pichero/hero_4.jpg",
  "/assets/pichero/gallery/gallery_27.webp"
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy via-zinc-950 to-zinc-900" />

      {/* Animated Network Lines (Subtle SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <SignalPulse />
            <span className="text-white/60 font-bold tracking-[0.3em] uppercase text-sm">
              Established 2016
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1]">
            Building Sri Lanka's <br />
            <span>
              Connected Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed">
            End-to-End Telecom Infrastructure Solutions - From Site Acquisition to Tower Commissioning. Empowering connectivity across the nation.
          </p>
        </motion.div>

        {/* Floating Stats / Trust Bar */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-6 md:right-12 z-20 w-auto"
        >
          <div className="glass p-4 md:p-6 flex flex-col gap-6 items-start rounded-2xl">
            <div className="flex gap-8 items-center">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-display font-bold text-white">
                  {inView && <CountUp end={9} duration={2.5} suffix="+" />}
                </span>
                <span className="text-[8px] text-white/50 uppercase tracking-widest">Years Excellence</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-display font-bold text-white">
                  {inView && <CountUp end={1000} duration={2.5} suffix="+" separator="," />}
                </span>
                <span className="text-[8px] text-white/50 uppercase tracking-widest">Sites Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-display font-bold text-white">
                  {inView && <CountUp end={150} duration={2.5} suffix="+" />}
                </span>
                <span className="text-[8px] text-white/50 uppercase tracking-widest">Skilled Team</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-white/10" />
            
            <div className="flex gap-4 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-white font-bold text-[8px] uppercase tracking-widest">TRUSTED BY</span>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-white/20 rounded" />
                <div className="w-6 h-6 bg-white/20 rounded" />
                <div className="w-6 h-6 bg-white/20 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
