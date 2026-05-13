"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Camera, MessageCircle } from "lucide-react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { usePathname } from "next/navigation";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "STAY", href: "/rooms" },
  { name: "EXPERIENCE", href: "/experience" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      // Hide if scrolling down and passed 100px
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-4 md:py-6 px-4 md:px-16",
        scrolled ? "glass shadow-lg bg-primary-dark/90" : "bg-transparent",
        !visible && "-translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-auto flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
            Dangau Sala Resort
          </Link>
          <Link
            href="/rooms"
            className="md:hidden bg-highlight text-primary-dark px-4 py-2 rounded-full font-bold text-xs shadow-lg"
          >
            Book Now
          </Link>
        </div>

        {/* Visible Links - Scrollable on mobile */}
        <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
          <ul className="flex items-center justify-start md:justify-center gap-6 md:gap-8 min-w-max px-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all hover:text-highlight",
                    pathname === link.href ? "text-highlight" : "text-white/80"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/rooms"
            className="bg-highlight text-primary-dark px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
