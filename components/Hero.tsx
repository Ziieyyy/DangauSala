"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 bg-primary-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-110 motion-safe:animate-[zoom_20s_infinite_alternate]"
          style={{ backgroundImage: "url('/pic/resort/traditionalMalayHouse.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-primary-dark/80" />
        
        {/* Soft Fog Overlay Simulation */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="container relative z-10 px-8 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold uppercase tracking-[0.2em] mb-6 text-highlight">
            Established 2016
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-8">
            Escape Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent italic">Nature's Serenity</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-4"
        >
          A premium agrotourism retreat in Yan, Kedah. Where traditional kampung heritage meets contemporary luxury and modern living.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4"
        >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/experience"
              className="w-full sm:w-auto px-8 py-3 md:py-4 bg-highlight text-primary-dark rounded-full font-bold text-base md:text-lg shadow-[0_10px_30px_rgba(93,248,216,0.3)] hover:shadow-[0_15px_40px_rgba(93,248,216,0.4)] transition-all text-center"
            >
              Explore Experience
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/rooms"
              className="w-full sm:w-auto px-8 py-3 md:py-4 glass text-white rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all text-center"
            >
              Book Your Escape
            </motion.a>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">Discover More</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-highlight" />
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes zoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
