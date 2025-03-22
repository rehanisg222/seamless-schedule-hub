import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
export function Footer() {
  const currentYear = new Date().getFullYear();
  // Get the logo path
  const logoPath = "/lovable-uploads/8948be77-10da-46aa-9242-61b1bac9b5d4.png";
  return <footer style={{
    backgroundColor: "#300319"
  }} className="pt-16 pb-10 border-t border-opacity-20 border-blue-900 bg-transparent">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logoPath} alt="Growthstermedia Logo" className="h-12 mr-2" />
              <h3 className="text-lg font-semibold text-white">
                Growth<span className="text-blue-300">ster</span>media
              </h3>
            </div>
            <p className="text-sm text-blue-300 max-w-xs">Helping businesses achieve exponential growth through strategic social media marketing since 2023. We turn followers into customers.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-300 shrink-0" />
                <a href="tel:8240485855" className="text-sm text-blue-300 hover:text-white transition-colors">8240485855</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-300 shrink-0" />
                <a href="mailto:mail@growthstermedia.com" className="text-sm text-blue-300 hover:text-white transition-colors">
                  mail@growthstermedia.com
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
    </footer>;
}