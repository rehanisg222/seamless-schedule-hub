
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  // Get the logo path from the window object
  const logoPath = (window as any).appLogo;

  return (
    <footer className="bg-blue-950 pt-16 pb-10 border-t border-blue-900">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              {logoPath && (
                <img 
                  src={logoPath} 
                  alt="Growthstermedia Logo" 
                  className="h-8 mr-2" 
                />
              )}
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
            <h3 className="text-base font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Instagram Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Facebook Advertising
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-blue-300 hover:text-white transition-colors">
                  Social Media Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-blue-300 shrink-0 mt-0.5" />
                <span className="text-sm text-blue-300">
                  123 Social Ave, Suite 100, San Francisco, CA 94107
                </span>
              </li>
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

        <div className="mt-12 pt-6 border-t border-blue-900">
          <p className="text-center text-sm text-blue-300">
            © {currentYear} Growthstermedia. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
