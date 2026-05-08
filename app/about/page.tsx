import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      {/* Shortened Hero for subpages */}
      <div className="pt-24 bg-primary-dark">
        <div className="container px-8 py-20 text-center mx-auto">
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter">
            Our <span className="italic text-highlight">Story</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-light">
            Discover the legacy, the passion, and the village heritage that defines Dangau Sala Resort.
          </p>
        </div>
      </div>
      <About />
      <Footer />
    </main>
  );
}
