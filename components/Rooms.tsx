"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Users, Bed, Tag, ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

const rooms = [
  {
    id: "pool",
    title: "Pool View",
    description: "Contemporary container living just steps away from our refreshing pool. Modern, sleek, and convenient.",
    capacity: "4 Adults, 1 Child",
    beds: "Multiple Bed Options",
    price: "RM180",
    image: "/pic/rooms/PoolView1.jpeg",
  },
  {
    id: "jerai",
    title: "Jerai View",
    description: "Our most spacious suite with stunning vistas of Mount Jerai. Perfect for families who appreciate panoramic beauty.",
    capacity: "6 Adults",
    beds: "1 Queen, 2 Double Decks",
    price: "RM250",
    image: "/pic/rooms/JeraiView.jpeg",
  },
  {
    id: "paddy",
    title: "Paddy View",
    description: "Wake up to the lush green rhythm of Yan's famous paddy fields. A truly soul-soothing experience.",
    capacity: "2 Adults, 1 Child",
    beds: "1 Queen Bed",
    price: "RM150",
    image: "/pic/rooms/Paddyview1.jpeg",
  },
  {
    id: "river",
    title: "River View",
    description: "Nestled by the gentle flow of the stream. Ideal for couples seeking a peaceful, romantic retreat.",
    capacity: "2 Adults",
    beds: "1 Queen Bed",
    price: "RM130",
    image: "/pic/rooms/RiverView.jpeg",
  },
  {
    id: "traditional",
    title: "Traditional Malay House",
    description: "Experience authentic kampung living in our beautifully restored traditional wooden house. Full of heritage and charm.",
    capacity: "15 Guests",
    beds: "Traditional Bedding",
    price: "Contact for Pricing",
    image: "/pic/resort/traditionalMalayHouse.jpg",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-16 md:py-32 bg-primary-dark text-white overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-highlight font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Accommodation</span>
            <h2 className="text-3xl md:text-6xl font-serif font-bold tracking-tighter">
              Sanctuaries of <br /><span className="italic">Village Comfort</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 max-w-md text-lg font-light leading-relaxed mb-4"
          >
            Experience the unique blend of rustic container architecture and traditional warmth. Each room is designed to connect you with nature.
          </motion.p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={2}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="pb-16 !overflow-visible"
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={room.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", damping: 20, stiffness: 80, delay: (index % 3) * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-highlight/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={room.image}
                    alt={room.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-highlight text-primary-dark px-4 py-1 rounded-full font-bold text-sm">
                    {room.price}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-highlight transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed flex-grow">
                    {room.description}
                  </p>
                  
                  <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <Users size={16} className="text-highlight" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <Bed size={16} className="text-highlight" />
                      <span>{room.beds}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={`https://wa.me/60163799466?text=I'm interested in booking ${room.title}`}
                      target="_blank"
                      className="flex-1 bg-highlight text-primary-dark py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
