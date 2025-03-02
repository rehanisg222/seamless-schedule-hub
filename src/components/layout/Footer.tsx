
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#300319" }} className="pt-16 pb-10 border-t border-opacity-20 border-blue-900">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/0c88b053-e276-48f4-98a9-7f5aa7c4c108.png" 
                alt="Growthstermedia Logo" 
                className="h-8 mr-2" 
              />
              <h3 className="text-lg font-semibold text-white">
                Growth<span className="text-blue-300">ster</span>media
              </h3>
            </div>
            <p className="text-sm text-blue-300 max-w-xs">
              Helping businesses achieve exponential growth through strategic social media marketing since 2023. We turn followers into customers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-300 shrink-0" />
                <a href="tel:+11234567890" className="text-sm text-blue-300 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-300 shrink-0" />
                <a href="mailto:hello@growthstermedia.com" className="text-sm text-blue-300 hover:text-white transition-colors">
                  hello@growthstermedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-opacity-20 border-blue-900">
          <p className="text-center text-sm text-blue-300">
            © {currentYear} Growthstermedia. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
