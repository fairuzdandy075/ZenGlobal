import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-zen.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Program", id: "programs" },
    { label: "Tentang Kami", id: "about" },
    { label: "Metode", id: "method" },
    { label: "Bidang Kerja", id: "jobs" },
    { label: "Kontak", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={logo} alt="Zen Global" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">ZEN GLOBAL</span>
              <span className="text-xs text-muted-foreground">Language Institute</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")}>
              Konsultasi Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded-md"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4">
              <Button variant="hero" size="lg" className="w-full" onClick={() => scrollToSection("contact")}>
                Konsultasi Sekarang
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
