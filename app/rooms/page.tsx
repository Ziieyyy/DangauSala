import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Rooms from "@/components/Rooms";

export default function RoomsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-primary-dark">
        <div className="container px-8 py-20 text-center mx-auto">
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter">
            Stay <span className="italic text-highlight">Experiences</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-light">
            Choose your perfect sanctuary among our curated collection of container suites and traditional rooms.
          </p>
        </div>
      </div>
      <Rooms />
      <Footer />
    </main>
  );
}
