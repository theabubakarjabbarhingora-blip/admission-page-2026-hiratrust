import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Take the first step towards a successful career. Apply now for the upcoming semester and join thousands of successful HIRA alumni.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white"
                asChild
              >
                <a
                  href="https://www.hirainstitute.org/tuition-and-fees"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a
                  href="mailto:info@hirainstitute.org?subject=Campus%20Visit%20Inquiry"
                  rel="noopener noreferrer"
                >
                  Schedule a Visit
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <a href="tel:5023094472" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5" />
                502 309 4472
              </a>
              <a href="mailto:info@hirainstitute.org" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5" />
                info@hirainstitute.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
