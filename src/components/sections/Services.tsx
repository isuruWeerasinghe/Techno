import { motion } from "motion/react";
import { 
  TowerControl as Tower, 
  Zap, 
  HardHat, 
  Truck, 
  ArrowUpRight,
  ShieldCheck,
  Map,
  Construction
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicePillars = [
  {
    title: "Communication Infrastructure",
    icon: Tower,
    color: "bg-electric",
    items: [
      "Site Acquisition (SAQ)",
      "Power Acquisition (PAQ)",
      "EPL/COC/LA Approvals",
      "LPS Reports & Land Surveys",
      "Structural Stability Analysis"
    ]
  },
  {
    title: "Electrical & Protection",
    icon: Zap,
    color: "bg-signal",
    items: [
      "Total Electrical Solutions",
      "Cable Laying & Termination",
      "Earthing & Lightning Protection",
      "Earthing Improvement Works"
    ]
  },
  {
    title: "Civil & Telecom Works",
    icon: Construction,
    color: "bg-navy",
    items: [
      "Tower Erection & Rectification",
      "Retaining Walls & Fencing",
      "Site Dismantling",
      "RT/GBT Sharing Solutions"
    ]
  },
  {
    title: "Logistics & IT Solutions",
    icon: Truck,
    color: "bg-electric",
    items: [
      "Tower & Equipment Transport",
      "Office Moving & Clearance",
      "IT Infrastructure (Laptops/GPS)",
      "Biometrics & Security Systems"
    ]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-light-grey">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Core Expertise
            </span>
            <h2 className="text-4xl md:text-5xl text-navy">
              End-to-End Solutions for a Connected World
            </h2>
          </div>
          <p className="text-navy/60 max-w-sm text-right hidden md:block">
            We provide comprehensive infrastructure services, ensuring efficiency and reliability at every stage of the project lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white">
                <div className={`h-2 w-full ${pillar.color}`} />
                <CardHeader className="pt-8">
                  <div className={`w-14 h-14 rounded-xl ${pillar.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <pillar.icon size={28} />
                  </div>
                  <CardTitle className="text-xl text-navy group-hover:text-electric transition-colors">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pillar.items.map((item) => (
                      <li key={item} className="text-sm text-navy/70 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 flex items-center gap-2 text-sm font-bold text-navy hover:text-electric transition-colors group/btn">
                    Learn More
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
