import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-primary-dark">
        <div className="container px-8 py-20 text-center mx-auto">
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter">
            Common <span className="italic text-highlight">Questions</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-light">
            Everything you need to know about your upcoming stay at Dangau Sala Resort.
          </p>
        </div>
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}
