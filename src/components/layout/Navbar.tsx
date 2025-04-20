import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed top-4 left-0 right-0 w-[95%] mx-auto z-50 transition-all duration-300 rounded-full",
        isScrolled 
          ? "glass shadow-lg backdrop-blur-md bg-background/50 border border-white/10" 
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-3 px-6">
          <Link to="/" className="flex items-center text-xl md:text-2xl font-semibold tracking-tight transition-colors">
            <img src="/lovable-uploads/e521e155-4098-4fb2-83a2-18133d5d8860.png" alt="Growthstermedia Logo" className="h-10 md:h-12 mr-2" />
            <span className="sr-only">Growthstermedia Logo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map(({path, label}) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  isActive(path) 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                    : "text-foreground"
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Book Consultation
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex md:hidden text-gray-800 focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden bg-background/95 backdrop-blur-lg animate-fade-in">
            <div className="relative w-full flex flex-col pt-24 px-6 space-y-6">
              {navLinks.map(({path, label}) => (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    "text-lg py-2 border-b border-gray-100 transition-colors animate-slide-in",
                    isActive(path) ? "font-medium text-primary" : ""
                  )}
                  style={{
                    animationDelay: `${navLinks.indexOf({path, label}) * 0.1}s`
                  }}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="mt-4 w-full flex items-center justify-center rounded-full bg-primary px-4 py-3 text-md font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 animate-slide-in"
                style={{
                  animationDelay: "0.4s"
                }}
              >
                Book Consultation
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
