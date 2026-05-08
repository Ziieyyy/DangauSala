"use client";

import { motion } from "framer-motion";
import { Sunrise, Sun, Sunset, Moon, Ship, Target, Sprout, Fish, PawPrint, Bike } from "lucide-react";

const activities = [
  {
    time: "Morning",
    icon: Sunrise,
    color: "from-yellow-400 to-orange-400",
    items: [
      { name: "Paddy Planting", icon: Sprout, desc: "Step into the mud and learn traditional rice planting." },
      { name: "Village Exploration", icon: Bike, desc: "A scenic cycle through the peaceful Yan countryside." }
    ]
  },
  {
    time: "Afternoon",
    icon: Sun,
    color: "from-orange-400 to-red-400",
    items: [
      { name: "Archery Range", icon: Target, desc: "Test your focus and precision at our custom range." },
      { name: "Boating", icon: Ship, desc: "Explore the gentle waters surrounding the resort." }
    ]
  },
  {
    time: "Evening",
    icon: Sunset,
    color: "from-red-400 to-purple-600",
    items: [
      { name: "Petting Farm", icon: PawPrint, desc: "Meet our friendly residents: goats, rabbits, and ostriches." },
      { name: "Fishing", icon: Fish, desc: "Try traditional fishing or squid jigging at the nearby coast." }
    ]
  },
  {
    time: "Night",
    icon: Moon,
    color: "from-purple-600 to-primary-dark",
    items: [
      { name: "BBQ & Stargazing", icon: Sun, desc: "Gather around the fire for a traditional feast under the stars." }
    ]
  }
];

export default function Experience() {
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

          <div className="space-y-16 md:space-y-24">
            {activities.map((slot, index) => (
              <div key={slot.time} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                {/* Time Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center"
                >
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${slot.color} flex items-center justify-center text-white shadow-xl mb-6`}>
                    <slot.icon size={48} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary-dark mb-2">{slot.time}</h3>
                  <p className="text-secondary font-medium uppercase tracking-[0.2em] text-xs">The Flow of Nature</p>
                </motion.div>

                {/* Content Cards */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  {slot.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="glass p-8 rounded-2xl border-primary-dark/5 hover:border-highlight transition-all group shadow-sm hover:shadow-xl"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-bg-main flex items-center justify-center text-primary-dark group-hover:bg-highlight group-hover:text-primary-dark transition-colors shrink-0">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-primary-dark mb-2">{item.name}</h4>
                          <p className="text-primary-dark/60 leading-relaxed font-light">{item.desc}</p>
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
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-highlight/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
