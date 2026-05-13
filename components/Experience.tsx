"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sunrise, Sun, Sunset, Moon, Ship, Target, Sprout, Fish, PawPrint, Bike, X, ZoomIn } from "lucide-react";
import Image from "next/image";

const activities = [
  {
    time: "Morning",
    icon: Sunrise,
    color: "from-yellow-400 to-orange-400",
    items: [
      { 
        name: "Paddy Planting", 
        icon: Sprout, 
        desc: "Step into the mud and learn traditional rice planting.",
        images: ["/pic/experience/paddyPlanting.jpeg"]
      },
      { 
        name: "Village Exploration", 
        icon: Bike, 
        desc: "A scenic cycle through the peaceful Yan countryside and local life.",
        images: ["/pic/experience/village exploration.jpeg", "/pic/experience/villageExplore2.jpeg"]
      }
    ]
  },
  {
    time: "Afternoon",
    icon: Sun,
    color: "from-orange-400 to-red-400",
    items: [
      { 
        name: "Archery Range", 
        icon: Target, 
        desc: "Test your focus and precision at our custom range.",
        images: ["/pic/experience/achery.jpeg"]
      },
      { 
        name: "Boating", 
        icon: Ship, 
        desc: "Explore the gentle waters surrounding the resort.",
        images: ["/pic/experience/Boating.jpeg"]
      }
    ]
  },
  {
    time: "Evening",
    icon: Sunset,
    color: "from-red-400 to-purple-600",
    items: [
      { 
        name: "Petting Farm", 
        icon: PawPrint, 
        desc: "Meet our friendly residents: goats, rabbits, and ostriches.",
        images: ["/pic/experience/PetingFarm.jpeg", "/pic/experience/PetingFarm2.jpeg"]
      },
      { 
        name: "Fishing", 
        icon: Fish, 
        desc: "Try traditional fishing or squid jigging at the nearby coast.",
        images: ["/pic/experience/Fishing.jpeg", "/pic/experience/Fishing2.jpeg"]
      }
    ]
  },
  {
    time: "Night",
    icon: Moon,
    color: "from-purple-600 to-primary-dark",
    items: [
      { 
        name: "BBQ & Stargazing", 
        icon: Sun, 
        desc: "Gather around the fire for a traditional feast under the stars.",
        images: ["/pic/experience/bbq stargazing.jpeg"]
      }
    ]
  }
];

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="experience" className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block"
          >
            An Immersive Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-serif font-bold text-primary-dark tracking-tighter"
          >
            A Day at <span className="italic">Dangau Sala Resort</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary-dark/10 to-transparent hidden lg:block" />

          <div className="space-y-16 md:space-y-32">
            {activities.map((slot, index) => (
              <div key={slot.time} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24`}>
                {/* Time Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`w-full lg:w-1/5 flex flex-col items-center ${index % 2 === 0 ? "lg:items-end text-center lg:text-right" : "lg:items-start text-center lg:text-left"} justify-center`}
                >
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${slot.color} flex items-center justify-center text-white shadow-xl mb-6`}>
                    <slot.icon size={48} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-2">{slot.time}</h3>
                  <p className="text-secondary font-medium uppercase tracking-[0.2em] text-xs">The Flow of Nature</p>
                </motion.div>

                {/* Content Cards */}
                <div className="w-full lg:w-4/5 flex flex-col gap-8">
                  {slot.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="glass p-6 md:p-10 rounded-[2rem] border-primary-dark/5 hover:border-highlight transition-all group shadow-sm hover:shadow-xl"
                    >
                      <div className="flex flex-col xl:flex-row gap-10 items-center xl:items-start">
                        {/* Image(s) Container */}
                        <div className={`grid ${item.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-4 w-full xl:w-[500px] shrink-0`}>
                          {item.images.map((img, imgIdx) => (
                            <div 
                              key={imgIdx}
                              className={`relative ${item.images.length > 1 ? "aspect-[3/4]" : "aspect-video"} overflow-hidden rounded-3xl bg-bg-main/50 cursor-zoom-in border border-primary-dark/5`}
                              onClick={() => setSelectedImage(img)}
                            >
                              <Image
                                src={img}
                                alt={item.name}
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 600px"
                              />
                              <div className="absolute inset-0 bg-primary-dark/0 hover:bg-primary-dark/10 transition-colors duration-300 flex items-center justify-center">
                                <ZoomIn className="text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100" size={32} />
                              </div>
                            </div>
                          ))}
                        </div>


                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-bg-main flex items-center justify-center text-primary-dark group-hover:bg-highlight group-hover:text-primary-dark transition-colors shrink-0">
                              <item.icon size={20} />
                            </div>
                            <h4 className="text-2xl font-bold text-primary-dark">{item.name}</h4>
                          </div>
                          <p className="text-primary-dark/60 leading-relaxed font-light text-lg">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
      
      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-primary-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-highlight transition-colors z-[110]"
            >
              <X size={40} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
                <Image
                  src={selectedImage}
                  alt="Zoomed experience"
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-highlight/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

