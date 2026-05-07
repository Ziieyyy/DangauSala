import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";

export default function ExperiencePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-primary-dark">
        <div className="container px-8 py-20 text-center mx-auto">
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter">
            Village <span className="italic text-highlight">Adventures</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-light">
            Immerse yourself in the rhythm of kampung life with our handcrafted activities and agrotourism experiences.
          </p>
        </div>
      </div>
      <Experience />
      <Gallery />
      <Footer />
    </main>
  );
}
