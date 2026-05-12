import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedRooms from "@/components/FeaturedRooms";
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeaturedRooms />
      <Footer />
    </main>
  );
}
