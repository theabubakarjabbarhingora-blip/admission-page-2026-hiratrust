import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import mainLogo from "@/assets/final-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "https://www.hirainstitute.org/vision-and-mission" },
    { name: "Programs", href: "https://hirainstitute.org/" },
    { name: "Admissions", href: "https://www.hirainstitute.org/tuition-and-fees" },
    { name: "Gallery", href: "https://www.hirainstitute.org/gallery" },
    { name: "Contact", href: "mailto:info@hirainstitute.org" },
  ];

  const programs = [
    "Full-Time Tahfiz Program",
    "Part-Time Tahfiz Program",
    "'Alimiyyah Program",
    "Pre School & Kindergarten",
    "Elementary & Middle School",
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-md">
                <img
                  src={mainLogo}
                  alt="HIRA Institute logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif tracking-wide">
                  HIRA INSTITUTE
                </h3>
                <p className="text-xs text-white/60">Reviving Prophetic Legacy</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              HIRA Institute is a non-profit Islamic school in Louisville, KY, dedicated to
              nurturing students who excel spiritually, academically, and morally.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/hirainstitute/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="HIRA Institute on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/hirainstitute/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="HIRA Institute on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCB0NDNIqVxzyN7RrXdy6zkw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="HIRA Institute on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/hira-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="HIRA Institute on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-secondary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <a href="#programs" className="text-white/70 hover:text-secondary transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span>3819 Bardstown Rd, Louisville, KY 40218, United States</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:5023094472" className="hover:text-secondary transition-colors">
                  502 309 4472
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@hirainstitute.org" className="hover:text-secondary transition-colors">
                  info@hirainstitute.org
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© 2026 HIRA Institute. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://www.hirainstitute.org/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
