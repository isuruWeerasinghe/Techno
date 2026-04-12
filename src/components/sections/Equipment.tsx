import { motion } from "motion/react";
import { Truck, Drill, Ruler, HardHat, Camera, Laptop } from "lucide-react";

const equipment = [
  { category: "Vehicles", items: ["4WD Cabs", "Crew Cabs", "Lorries", "Excavators", "Boom Trucks"], icon: Truck },
  { category: "Tools", items: ["GPS Units", "Megger Testers", "Binoculars", "EHS Kits", "Safety Harnesses"], icon: Drill },
  { category: "Technology", items: ["High-end Laptops", "Printers", "Biometric Devices", "GPS Tracking Solutions"], icon: Laptop },
];

export const Equipment = () => {
  return (
    <section id="equipment" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">
              Readiness & Capability
            </span>
            <h2 className="text-4xl font-display font-bold text-navy mb-6">
              Equipped for Large-Scale Rollouts
            </h2>
            <p className="text-navy/60 mb-8 leading-relaxed">
              We maintain a comprehensive fleet of vehicles and specialized tools to ensure our teams are ready for any challenge, anywhere in the country.
            </p>
            <div className="p-6 bg-signal/10 rounded-2xl border border-signal/20">
              <div className="flex items-center gap-3 text-signal font-bold mb-2">
                <HardHat size={20} />
                <span>Safety First</span>
              </div>
              <p className="text-sm text-navy/70">
                All equipment is regularly inspected and certified to meet international EHS standards.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {equipment.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-light-grey border border-navy/5 hover:border-electric/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-6 group-hover:bg-electric transition-colors">
                  <group.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-6">{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-navy/60 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-navy/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
