"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Connect With Us</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-dark mb-8 tracking-tighter">
              Start Your <span className="italic">Nature Story</span>
            </h2>
            <p className="text-lg text-primary-dark/60 mb-12 leading-relaxed font-light">
              Whether you're planning a family getaway, a school program, or a peaceful solo retreat, our team is here to help you plan the perfect experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="glass p-8 rounded-2xl border-primary-dark/5 flex items-start gap-6 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-bg-main flex items-center justify-center text-primary-dark group-hover:bg-highlight transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Call Us</h4>
                  <p className="text-base font-bold text-primary-dark">+60 16-379 9466 (En. Hadi)</p>
                  <p className="text-base font-bold text-primary-dark">+60 12-553 6562 (Pn. Ana)</p>
                </div>
              </div>
              
              <a 
                href="https://wa.me/60163799466" 
                target="_blank" 
                className="glass p-8 rounded-2xl border-primary-dark/5 flex items-start gap-6 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-bg-main flex items-center justify-center text-primary-dark group-hover:bg-highlight transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">WhatsApp</h4>
                  <p className="text-lg font-bold text-primary-dark">Chat Now</p>
                </div>
              </a>

              <div className="glass p-8 rounded-2xl border-primary-dark/5 flex items-start gap-6 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-bg-main flex items-center justify-center text-primary-dark group-hover:bg-highlight transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Email</h4>
                  <p className="text-lg font-bold text-primary-dark">info@dangausala.com</p>
                </div>
              </div>

              <div className="glass p-8 rounded-2xl border-primary-dark/5 flex items-start gap-6 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-bg-main flex items-center justify-center text-primary-dark group-hover:bg-highlight transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Stay Policy</h4>
                  <p className="text-lg font-bold text-primary-dark">Check-in: 3:00 PM</p>
                  <p className="text-lg font-bold text-primary-dark">Check-out: 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-primary-dark text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-serif font-bold mb-4">Visit Our Location</h4>
                <div className="flex items-start gap-4 text-white/70 mb-6">
                  <MapPin size={24} className="text-highlight shrink-0" />
                  <p className="leading-relaxed">Jalan Jemerlang-Kampung Seberang Jaya, Jalan Jemerlang Kuala Sala, 06800 Yan, Kedah, Malaysia</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/FMh4LdhakEDyKVdt7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-highlight font-bold hover:gap-4 transition-all w-fit"
                >
                  Open in Google Maps <Globe size={18} />
                </a>
              </div>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-highlight/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31649.88876412497!2d100.37059882200388!3d5.79585640161476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304b285ddcd4b6bb%3A0x89e0fb9fa20ec952!2sYan%2C%20Kedah!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-6 left-6 glass px-6 py-4 rounded-2xl flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
              <span className="text-primary-dark font-bold text-sm tracking-tight">Open for Bookings</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
