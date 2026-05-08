"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const stats = [
  { label: "Visitors", value: 12000, suffix: "+" },
  { label: "Rooms", value: 7, suffix: "" },
  { label: "Activities", value: 15, suffix: "+" },
  { label: "Years", value: 8, suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-main overflow-hidden">
      <div className="container px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/pic/resort/resort-2.jpg" 
                alt="Dangau Sala Resort View" 
                className="w-full h-auto object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-10 -right-10 w-2/3 z-20 rounded-2xl overflow-hidden shadow-2xl border-8 border-white hidden md:block"
            >
              <img 
                src="/pic/resort/resort-3.jpg" 
                alt="Dangau Sala Resort Detail" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-highlight/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-secondary mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-8 leading-tight">
              A Legacy of <span className="italic">Kampung Simplicity</span>
            </h2>
            <p className="text-lg text-primary-dark/70 mb-6 leading-relaxed">
              Founded in 2016 by En. Hadi, Dangau Sala Resort D’Kontena was born from a vision to preserve the authentic Malay village experience while offering modern comfort.
            </p>
            <p className="text-lg text-primary-dark/70 mb-10 leading-relaxed">
              Located in the heart of Yan, Kedah, our resort is more than just a stay—it's a journey back to basics, where the rhythm of the paddy fields and the majesty of Mount Jerai create a perfect harmony for the soul.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-primary-dark/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-secondary font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
