import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Serviços", id: "servicos" },
    { label: "Sobre Nós", id: "sobre" },
    { label: "Contato", id: "contato" },
    { label: "Localização", id: "localizacao" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary shadow-lg"
          : "bg-primary/95"
      }`}
    >
      <nav className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl md:text-2xl font-bold text-primary-foreground hover:opacity-80 transition-opacity"
          >
            BH Caçamba
          </button> */}
           <a href="#" className="flex items-center space-x-3">
            <img src={logo} alt="BH Caçamba" className="w-12 h-12" />
            <span className="text-secondary-foreground font-bold text-xl hidden sm:inline">
              BH Caçamba
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary-foreground hover:text-secondary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection("contato")}
              className="font-semibold"
            >
              <Phone className="mr-2 h-4 w-4" />
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground hover:text-secondary transition-colors font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="secondary"
                onClick={() => scrollToSection("contato")}
                className="font-semibold w-full"
              >
                <Phone className="mr-2 h-4 w-4" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
