import { motion } from "motion/react";
import { Shield, Award, Users, Zap, Target, Globe } from "lucide-react";

const reasons = [
  {
    title: "Technical Expertise",
    description: "Our team consists of certified engineers and technicians with deep domain knowledge in telecom infrastructure.",
    icon: Zap,
  },
  {
    title: "Proven Track Record",
    description: "Over 1000 sites delivered successfully across Sri Lanka since 2016 for major telecom operators.",
    icon: Award,
  },
  {
    title: "Dedicated Teams",
    description: "Specialized units for SAQ, Civil, Electrical, and TI works ensuring focused execution and quality.",
    icon: Users,
  }
];

const teamStats = [
  { label: "Site Dev Officers", count: 14 },
  { label: "SAQ/PAQ Officers", count: 15 },
  { label: "Civil Leaders", count: 12 },
  { label: "Civil Labors", count: 65 },
  { label: "Electrical Techs", count: 16 },
  { label: "TI Technicians", count: 12 },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-navy text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-electric/5 skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">
            The Techno Advantage
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">
            Why Industry Leaders Trust Us
          </h2>
          <p className="text-white/60 text-lg">
            We don't just build infrastructure; we build reliability and efficiency into every connection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-electric/20 flex items-center justify-center text-electric mb-6">
                <reason.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="glass-dark p-10 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">Our Workforce</h3>
              <p className="text-white/60 mb-6">
                A highly organized team structure designed for rapid nationwide rollout and maintenance.
              </p>
              <div className="flex items-center gap-3 text-signal font-bold">
                <Shield size={20} />
                <span>EHS Compliant & Certified</span>
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
              {teamStats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <div className="text-2xl font-display font-bold text-electric">{stat.count}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
