import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ExternalLink, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    name: "Gamata Sanniwedana Project",
    category: "Site Development",
    location: "Island-wide",
    year: "2024-2026",
    status: "Ongoing",
    image: "/assets/projectcard/36k1.jpg.webp",
  },
  {
    id: 2,
    name: "Dialog 5G Rollout",
    category: "Site Acquisition",
    location: "Colombo District",
    year: "2023",
    status: "Completed",
    image: "/assets/projectcard/15-dialog_completes_sri_lankas_first_live_5g_vonr_trial.jpg",
  },
  {
    id: 3,
    name: "Hutch Network Expansion",
    category: "Power Acquisition",
    location: "Kandy District",
    year: "2024",
    status: "Ongoing",
    image: "/assets/projectcard/PHOTO-2024-10-23-12-44-16-1-1-e1730954184608.jpg",
  },
  {
    id: 4,
    name: "Airtel Tower Rectification",
    category: "Tower Erection",
    location: "Galle District",
    year: "2023",
    status: "Completed",
    image: "/assets/projectcard/591884640_1301318435361245_5206179723918839912_n.jpg",
  },
];

const categories = ["All", "Site Acquisition", "Site Development", "Power Acquisition", "Tower Erection"];

const ProjectCard = ({ project }: { project: (typeof projects)[0]; key?: React.Key }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-3xl bg-navy aspect-[16/10]"
    >
      <motion.img
        src={project.image}
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-navy via-transparent to-transparent pointer-events-none">
        <div className="flex justify-between items-end pointer-events-auto">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge className={`${project.status === 'Ongoing' ? 'bg-electric' : 'bg-signal'} text-white border-none`}>
                {project.status}
              </Badge>
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{project.category}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.name}</h3>
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-1">
                <MapPin size={14} className="text-electric" />
                {project.location}
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div>{project.year}</div>
            </div>
          </div>
          
          <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-electric hover:scale-110 transition-all">
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl text-navy">
              Delivering Excellence Nationwide
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? "bg-electric text-white shadow-lg shadow-electric/20" 
                    : "bg-light-grey text-navy/60 hover:bg-navy/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-light-grey border border-navy/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center text-white shrink-0">
              <CheckCircle size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-navy">Gamata Sanniwedana Project</h4>
              <p className="text-navy/60">A flagship initiative connecting rural communities across Sri Lanka.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy/90 transition-colors">
            View Case Study
          </button>
        </div>
      </div>
    </section>
  );
};
