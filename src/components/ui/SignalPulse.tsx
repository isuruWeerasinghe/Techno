import { motion } from "motion/react";

export const SignalPulse = ({ className }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        className="absolute w-full h-full rounded-full bg-white/20"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute w-full h-full rounded-full bg-white/30"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
      <div className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
    </div>
  );
};
