"use client";

import { motion } from "framer-motion";
import { Music, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 md:pt-24 pb-12 overflow-hidden relative">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-serif font-bold text-white tracking-tighter mb-6 block">
              Dangau Sala Resort
            </Link>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed font-light">
              A premium agrotourism retreat in Yan, Kedah. Preserving the essence of traditional Malay village life through modern container living and community-based tourism.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/DangauSala?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight hover:text-primary-dark transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="https://www.tiktok.com/@dangausalaresort?_r=1&_t=ZS-96Bk3vfpceq" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight hover:text-primary-dark transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-highlight mb-8">Explore</h4>
            <ul className="space-y-4 font-light text-white/70">
              <li><Link href="/" className="hover:text-highlight transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-highlight transition-colors">About Story</Link></li>

              <li><Link href="/experience" className="hover:text-highlight transition-colors">Activities</Link></li>
              <li><Link href="/experience#gallery" className="hover:text-highlight transition-colors">Visual Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-highlight mb-8">Reach Us</h4>
            <ul className="space-y-6 font-light text-white/70">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-highlight shrink-0" />
                <span>Jalan Jemerlang-Kampung Seberang Jaya, Jalan Jemerlang Kuala Sala, 06800 Yan, Kedah</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-highlight shrink-0" />
                <span>+60 16-379 9466</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-highlight shrink-0" />
                <span>hello@dangausala.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs tracking-widest uppercase font-medium">
            © 2026 Dangau Sala Resort D’Kontena. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/40 text-xs tracking-widest uppercase font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
