"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyContact() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      if (!isClosed) setShowBanner(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isClosed]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/60163799466?text=Hi, I have a question about Dangau Sala Resort!", "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4">
      <AnimatePresence>
        {showBanner && !isClosed && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="bg-white p-4 rounded-2xl shadow-2xl border border-primary-dark/5 max-w-[200px] relative hidden md:block"
          >
            <button 
              onClick={() => setIsClosed(true)}
              className="absolute -top-2 -right-2 bg-primary-dark text-white rounded-full p-1 shadow-lg hover:bg-highlight hover:text-primary-dark transition-colors"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium text-primary-dark leading-tight">
              Have a question? <br />
              <span className="text-secondary font-bold">Chat with us now!</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-highlight text-primary-dark rounded-full shadow-2xl flex items-center justify-center relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-10 transition-opacity" />
        <MessageCircle size={32} />
        <span className="absolute inset-0 rounded-full border-4 border-highlight animate-ping opacity-20" />
      </motion.button>
    </div>
  );
}
