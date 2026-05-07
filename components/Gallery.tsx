"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

const images = [
  { src: "/pic/resort/resort-4.jpg", category: "Nature", size: "tall" },
  { src: "/pic/resort/resort-5.jpg", category: "Nature", size: "small" },
  { src: "/pic/resort/resort-6.jpg", category: "Rooms", size: "wide" },
  { src: "/pic/resort/resort-7.jpg", category: "Farm Life", size: "small" },
  { src: "/pic/resort/resort-8.jpg", category: "Activities", size: "tall" },
  { src: "/pic/resort/resort-9.jpg", category: "Scenic Views", size: "small" },
  { src: "/pic/resort/resort-10.jpg", category: "Nature", size: "wide" },
  { src: "/pic/resort/resort-11.jpg", category: "Farm Life", size: "small" },
  { src: "/pic/resort/resort-12.jpg", category: "Scenic Views", size: "tall" },
  { src: "/pic/resort/resort-13.jpg", category: "Rooms", size: "small" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-32 bg-bg-main overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold uppercase tracking-widest text-xs md:text-sm mb-4"
          >
            Visual Narrative
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-serif font-bold text-primary-dark mb-8 md:mb-12 tracking-tighter text-center"
          >
            Capturing the <span className="italic">Soul of Yan</span>
          </motion.h2>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]"
        >
          {images.map((img, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={img.src}
              onClick={() => setSelectedImg(img.src)}
              className={`group relative rounded-2xl overflow-hidden shadow-sm cursor-pointer ${
                img.size === "tall" ? "row-span-2" : 
                img.size === "wide" ? "col-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.category}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-highlight text-xs font-bold uppercase tracking-widest block mb-2">{img.category}</span>
                  <div className="flex justify-between items-center">
                    <h4 className="text-white font-serif font-bold text-lg">Yan, Kedah</h4>
                    <Maximize2 size={20} className="text-white/70" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={48} strokeWidth={1} />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              src={selectedImg}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
