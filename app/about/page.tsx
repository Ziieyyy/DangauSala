"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/aboutbcg.jpg"
          alt="About Background"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-dark/60 z-10" />

        <div className="container relative z-20 px-8 text-center mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white tracking-tighter"
          >
            Our <span className="italic text-highlight">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 mt-6 max-w-2xl mx-auto font-light text-lg md:text-xl"
          >
            Discover the legacy, the passion, and the village heritage that defines Dangau Sala Resort.
          </motion.p>
        </div>
      </div>
      <About />
      <Footer />
    </main>
  );
}

