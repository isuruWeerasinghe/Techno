import { motion } from "motion/react";
import { Quote } from "lucide-react";

const clients = [
  { name: "Dialog Axiata", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Dialog_Axiata_Logo.svg/1200px-Dialog_Axiata_Logo.svg.png" },
  { name: "Hutch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Hutch_Logo.svg/2560px-Hutch_Logo.svg.png" },
  { name: "Airtel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Airtel_logo.svg/2560px-Airtel_logo.svg.png" },
  { name: "Mobitel", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Mobitel_Logo.svg/1200px-Mobitel_Logo.svg.png" },
  { name: "Lanka Bell", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Lanka_Bell_logo.svg/1200px-Lanka_Bell_logo.svg.png" },
];

const testimonials = [
  {
    name: "Shehan Aberathne",
    role: "Project Manager",
    company: "Hutch",
    text: "Techno Solutions has been a reliable partner for our network expansion. Their technical expertise and commitment to timelines are exceptional.",
  },
  {
    name: "Sugath Deepal",
    role: "Operations Head",
    company: "Telecom Partner",
    text: "Professional, confident, and reliable. They handle complex site acquisitions and civil works with ease, making them a preferred vendor.",
  },
];

export const Clients = () => {
  return (
    <section className="py-24 bg-light-grey overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl text-navy">
            Trusted by Industry Giants
          </h2>
        </div>

        {/* Logo Wall */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client) => (
            <div key={client.name} className="h-12 md:h-16 flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-navy/40">{client.name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl relative"
            >
              <Quote className="absolute top-8 right-8 text-electric/10" size={64} />
              <p className="text-lg text-navy/70 mb-8 italic relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center font-bold text-navy">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-navy/50 uppercase tracking-widest font-bold">
                    {t.role} — {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
