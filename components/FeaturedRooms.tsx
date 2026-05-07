"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Bed } from "lucide-react";

const featuredRooms = [
  {
    id: "jerai",
    title: "Jerai View",
    price: "RM250",
    image: "/pic/rooms/JeraiView.jpeg",
    capacity: "6 Adults",
    beds: "1 Queen, 2 Double Decks",
  },
  {
    id: "pool",
    title: "Pool View",
    price: "RM180",
    image: "/pic/rooms/PoolView1.jpeg",
    capacity: "4 Adults",
    beds: "Multiple Bed Options",
  },
  {
    id: "traditional",
    title: "Traditional Malay House",
    price: "Contact Us",
    image: "/pic/resort/traditionalMalayHouse.jpg",
    capacity: "15 Guests",
    beds: "Heritage Layout",
  },
];

export default function FeaturedRooms() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div>
            <span className="text-secondary font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Handpicked for You</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-dark tracking-tighter">
              Featured <span className="italic">Sanctuaries</span>
            </h2>
          </div>
          <Link href="/rooms" className="text-primary-dark font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-highlight text-sm md:text-base">
            Explore All Rooms <ArrowRight size={20} />
          </Link>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredRooms.map((room) => (
            <motion.div
              key={room.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } }
              }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                   <a 
                    href={`https://wa.me/60163799466?text=I'm interested in booking ${room.title}`}
                    target="_blank"
                    className="bg-highlight text-primary-dark py-3 rounded-xl font-bold text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    WhatsApp Booking
                  </a>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-primary-dark font-bold text-sm shadow-lg">
                  {room.price}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-dark mb-4">{room.title}</h3>
              <div className="flex gap-6 text-primary-dark/60 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Users size={16} /> {room.capacity}
                </div>
                <div className="flex items-center gap-2">
                  <Bed size={16} /> {room.beds}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
