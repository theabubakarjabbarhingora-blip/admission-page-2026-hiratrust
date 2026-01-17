import { useState } from "react";
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#programs" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="bg-primary border-b border-white/10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm text-white/80">
          <div className="flex items-center gap-6">
            <a href="tel:5023094472" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">502 309 4472</span>
            </a>
            <a href="mailto:info@hirainstitute.org" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@hirainstitute.org</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us:</span>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/hirainstitute/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="HIRA Institute on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/hirainstitute/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="HIRA Institute on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCB0NDNIqVxzyN7RrXdy6zkw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="HIRA Institute on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl font-serif">H</span>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold font-serif tracking-wide">HIRA INSTITUTE</h1>
              <p className="text-xs text-white/70">Excellence in Education</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-secondary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white"
              asChild
            >
              <a
                href="https://www.hirainstitute.org/tuition-and-fees"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-secondary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white w-fit"
                asChild
              >
                <a
                  href="https://www.hirainstitute.org/tuition-and-fees"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
