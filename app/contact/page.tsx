import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-primary-dark">
        <div className="container px-8 py-20 text-center mx-auto">
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter">
            Reach <span className="italic text-highlight">Out</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-light">
            Plan your visit, ask a question, or start your nature story with us today.
          </p>
        </div>
      </div>
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
