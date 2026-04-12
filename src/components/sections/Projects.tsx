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
    image: "/assets/projectcard/project_2.webp",
  },
  {
    id: 2,
    name: "Dialog 5G Rollout",
    category: "Site Acquisition",
    location: "Colombo District",
    year: "2023",
    status: "Completed",
    image: "/assets/projectcard/project_1.jpg",
  },
  {
    id: 3,
    name: "Hutch Network Expansion",
    category: "Power Acquisition",
    location: "Kandy District",
    year: "2024",
    status: "Ongoing",
    image: "/assets/projectcard/project_5.jpg",
  },
  {
    id: 4,
    name: "Airtel Tower Rectification",
    category: "Tower Erection",
    location: "Galle District",
    year: "2023",
    status: "Completed",
    image: "/assets/projectcard/project_4.jpg",
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
    <section id="projects" className="py-24 bg-light-grey">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl text-navy mb-6">
              Delivering Excellence Across the Nation
            </h2>
            <p className="text-navy/60">
              Explore our diverse range of projects, from island-wide network rollouts to specialized technical rectifications for Sri Lanka's leading telecom operators.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? "bg-navy text-white shadow-lg" 
                    : "bg-white text-navy/40 hover:bg-navy/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
