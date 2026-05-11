"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What are the check-in and check-out times?", a: "Check-in is from 2:00 PM, and check-out is by 12:00 PM." },
  { q: "Is there a swimming pool?", a: "Yes, we have a beautiful communal swimming pool for all our guests to enjoy." },
  { q: "Do you provide BBQ facilities?", a: "Yes, BBQ sets and areas are available upon request for a small fee." },
  { q: "Is breakfast included in the stay?", a: "We offer various meal packages. Please contact us via WhatsApp for the latest menu and pricing." },
  { q: "Can we bring pets to the resort?", a: "To maintain the comfort of all guests, please contact us directly to discuss our pet policy." },
  { q: "What activities are available nearby?", a: "You can explore paddy fields, hike Gunung Jerai, go fishing, or try archery right here at the resort." },
  { q: "Is there ample parking available?", a: "Yes, we provide free and secure parking for all our guests." },
  { q: "How do I make a guaranteed booking?", a: "Bookings can be made directly through our WhatsApp or by calling our contact numbers." },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-bg-main overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              Common Questions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-bold text-primary-dark tracking-tighter"
            >
              Frequently Asked <span className="italic">Questions</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-primary-dark/10 pb-6"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex justify-between items-start w-full text-left group gap-4"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors leading-tight ${openFaq === index ? "text-highlight" : "text-primary-dark"}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 mt-1 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}>
                    {openFaq === index ? <Minus size={20} className="text-highlight" /> : <Plus size={20} className="text-primary-dark/40 group-hover:text-primary-dark" />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-primary-dark/60 leading-relaxed text-base md:text-lg">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
