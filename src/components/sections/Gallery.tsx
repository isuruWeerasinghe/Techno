import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageIcon, Maximize2, ChevronUp, X } from "lucide-react";

const galleryImages = [
  { id: 1, title: "Tower Infrastructure", category: "Infrastructure", image: "https://lh3.googleusercontent.com/d/1Kfi56pJcz2hIvnUbO2M5eanOOwjpVijy", className: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Site Survey", category: "SAQ", image: "https://lh3.googleusercontent.com/d/1V4TWtrZmMxCA12v3M9qGPxXtal7In06I", className: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Equipment Installation", category: "Technical", image: "https://lh3.googleusercontent.com/d/1TVaQMsNJ0lJHRDdf_nIAKJfyIPpuEqKD", className: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Network Maintenance", category: "Maintenance", image: "https://lh3.googleusercontent.com/d/1V7SGQPoiNVRL1Vfy2pJ8EgOPTnLspRpW", className: "md:col-span-1 md:row-span-2" },
  { id: 5, title: "Field Operations", category: "Operations", image: "https://lh3.googleusercontent.com/d/1bq65vL1apPrKoZFK-Ojv2yPLsWkS3FOW", className: "md:col-span-1 md:row-span-1" },
  { id: 6, title: "Technical Support", category: "Technical", image: "https://lh3.googleusercontent.com/d/1Sqai-odRZHxBMsnZ_AvHliiEcrkQitHg", className: "md:col-span-1 md:row-span-1" },
  { id: 7, title: "Infrastructure Project", category: "Infrastructure", image: "https://lh3.googleusercontent.com/d/1-stqUCwWIrIt8lVv7ic8nxkOXySENnbT", className: "md:col-span-1 md:row-span-1" },
  { id: 8, title: "Site Inspection", category: "Quality Control", image: "https://lh3.googleusercontent.com/d/1hfBORmkyIjAyAfzky4tlVJzHkalKxRbQ", className: "md:col-span-1 md:row-span-1" },
  { id: 9, title: "Telecom Deployment", category: "Telecom", image: "https://lh3.googleusercontent.com/d/1G3ebwOpzUMDFUlmodPV2SJBBq0NwVAoT", className: "md:col-span-2 md:row-span-1" },
  { id: 10, title: "Tower Foundation", category: "Civil", image: "https://lh3.googleusercontent.com/d/1sJi_IO4b-6vRw_PKwYvatoubcPCJOsjE", className: "md:col-span-1 md:row-span-1" },
  { id: 11, title: "Network Expansion", category: "Telecom", image: "https://lh3.googleusercontent.com/d/1whbUm-n-v6x2kIYi5f533dXnnhTCaihu", className: "md:col-span-1 md:row-span-1" },
  { id: 12, title: "Technical Team", category: "Operations", image: "https://lh3.googleusercontent.com/d/1nB0AVkRAYbiGacRv37PmtoK86GmEbV4S", className: "md:col-span-1 md:row-span-1" },
  { id: 13, title: "Site Powering", category: "Electrical", image: "https://lh3.googleusercontent.com/d/16_Y6X3RKt3pQnP2PB8Ugjq70t16V5ngp", className: "md:col-span-1 md:row-span-1" },
  { id: 14, title: "Tower Commissioning", category: "Infrastructure", image: "https://lh3.googleusercontent.com/d/1atG02ppdAFoOHdhuHq45hkQEagtshhbS", className: "md:col-span-1 md:row-span-1" },
  { id: 15, title: "Field Deployment", category: "Operations", image: "https://lh3.googleusercontent.com/d/1TSkog2vdY6LRy1sBYtomwjGZEkCPiLsp", className: "md:col-span-1 md:row-span-1" },
  { id: 16, title: "Technical Maintenance", category: "Maintenance", image: "https://lh3.googleusercontent.com/d/1BWQtuZQ79T5Pk0fkBkPk2FCIHYL8YTpq", className: "md:col-span-1 md:row-span-1" },
  { id: 17, title: "Site Progress", category: "Infrastructure", image: "https://lh3.googleusercontent.com/d/19cCh_49PnbNhlJeYC9R_d6YGgsMuPgGI", className: "md:col-span-1 md:row-span-1" },
  { id: 18, title: "Equipment Setup", category: "Technical", image: "https://lh3.googleusercontent.com/d/1zToH19-XU7_7nScrtWepT7FzdylHWrMA", className: "md:col-span-1 md:row-span-1" },
  { id: 19, title: "Final Handover", category: "Infrastructure", image: "https://lh3.googleusercontent.com/d/13c0AnWb9eWy1AcDZklQrLgR-O73KCsFU", className: "md:col-span-1 md:row-span-1" },
  { id: 20, title: "Project Completion", category: "Infrastructure", image: "https://lh3.googleusercontent.com/d/1asvhhPmKOrHCzAWyo2u7w1IktA92wwMs", className: "md:col-span-1 md:row-span-1" },
];

export const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  return (
    <section id="gallery" className="py-24 bg-navy overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Visual Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-white mb-6"
          >
            Our Work in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            A glimpse into our nationwide operations, technical expertise, and the dedicated teams building Sri Lanka's connected future.
          </motion.p>
        </div>

        {galleryImages.length > 0 ? (
          <>
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
            >
              <AnimatePresence mode="popLayout">
                {displayedImages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: showAll ? 0 : index * 0.1 }}
                    className={`group relative overflow-hidden rounded-2xl bg-white/5 cursor-pointer ${item.className}`}
                    onClick={() => setSelectedImage(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                      <span className="text-electric text-xs font-bold uppercase tracking-widest mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {item.category}
                      </span>
                      <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {item.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-2 text-white/40 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        <Maximize2 size={14} />
                        <span>Click to expand</span>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <button 
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all group"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={20} className="text-electric" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ImageIcon size={20} className="text-electric" />
                    View Full Gallery
                  </>
                )}
                <span className="ml-2 text-white/40 group-hover:text-white transition-colors">
                  {showAll ? "^" : ">"}
                </span>
              </button>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border-2 border-dashed border-white/10 rounded-3xl"
          >
            <ImageIcon className="mx-auto text-white/20 mb-4" size={48} />
            <p className="text-white/40">Gallery is currently being updated with new projects.</p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-navy/95 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-top-10 md:-right-10 text-white/60 hover:text-white transition-colors p-2"
              >
                <X size={32} />
              </button>
              
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[80vh]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-electric text-sm font-bold uppercase tracking-widest mb-2 block">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white font-bold text-2xl">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
