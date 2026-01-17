import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
      {showBackToTop && (
        <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
          <Button
            type="button"
            onClick={scrollToTop}
            size="icon"
            className="rounded-full bg-secondary text-white shadow-xl hover:bg-secondary/90"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Back to top</span>
          </Button>
          <Button
            type="button"
            size="icon"
            className="hidden rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1ebe5d] md:inline-flex"
            asChild
          >
            <a
              href="https://wa.me/15023094472"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Chat on WhatsApp</span>
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
