import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-zen.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const openWhatsApp = () => {
    const phoneNumber = "6282299047778";
    const message = "Halo, saya ingin konsultasi tentang program di Zen Global Language Institute";
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const mainLinks = [
    { label: "Tentang Kami", id: "about", icon: "👥" },
    { label: "Metode", id: "method", icon: "🎯" },
    { label: "Kontak", id: "contact", icon: "📞" },
  ];

  const dropdownItems = [
    { 
      label: "Program Kursus", 
      href: "/program",
      description: "Belajar bahasa Jepang & Korea",
      icon: "📚",
      color: "from-blue-500 to-purple-500"
    },
    { 
      label: "Bidang Kerja", 
      href: "/bidang-kerja",
      description: "Peluang karir internasional",
      icon: "💼",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const isActiveLink = (id: string) => {
    if (location.pathname === "/") {
      return window.location.hash === `#${id}`;
    }
    return false;
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-blue-100/20" 
          : "bg-white/80 backdrop-blur-lg"
      }`}
    >
      {/* Animated Background Effect */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-50"
        }`} />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Enhanced Animation */}
          <Link 
            to="/"
            className="flex items-center space-x-3 cursor-pointer group relative"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="Zen Global" 
                className="h-12 w-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 blur transition-all duration-700" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105">
                ZEN GLOBAL
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide transition-all duration-500 group-hover:text-blue-600 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Language Institute
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Enhanced Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className="relative px-6 py-3 transition-all duration-300 font-semibold group"
                  onMouseEnter={() => setActiveDropdown("programs")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="flex items-center gap-2 text-gray-700 group-hover:text-blue-600 transition-colors">
                    Program & Pekerjaan
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === "programs" ? "rotate-180" : ""
                    }`} />
                  </span>
                  
                  {/* Animated underline */}
                  <div className="absolute bottom-2 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  
                  {/* Floating dots */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-80 p-4 rounded-2xl shadow-2xl border border-blue-100/50 bg-white/95 backdrop-blur-xl"
                align="start"
                onMouseEnter={() => setActiveDropdown("programs")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {dropdownItems.map((item, index) => (
                  <DropdownMenuItem key={item.href} asChild className="p-0 mb-2 last:mb-0">
                    <Link 
                      to={item.href}
                      className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-lg hover:scale-105 group"
                    >
                      <div className={`text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {item.label}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </div>
                      </div>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Main Links with Enhanced Effects */}
            {mainLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 transition-all duration-300 font-semibold group ${
                  isActiveLink(item.id) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                <span className="flex items-center gap-2 relative z-10">
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </span>
                
                {/* Active/ Hover underline */}
                <div className={`absolute bottom-2 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  isActiveLink(item.id) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                } origin-center`} />
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
              </button>
            ))}
            
            {/* Enhanced CTA Button */}
            <div className="ml-4 relative group">
              {/* Animated background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <Button 
                onClick={openWhatsApp}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group/btn min-w-[180px]"
              >
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Konsultasi Sekarang
                  </span>
                </div>
                
                {/* Button shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden relative w-12 h-12 flex items-center justify-center transition-all duration-500 group hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            
            <div className="relative w-6 h-6">
              <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                }`}
              >
                <Menu className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors" />
              </div>
              <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                }`}
              >
                <X className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors" />
              </div>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-blue-100/30 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen 
              ? "max-h-[600px] opacity-100 translate-y-0 shadow-2xl" 
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="py-6 space-y-2">
            {/* Dropdown items in mobile */}
            <div className="px-6 mb-4">
              <div className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Program & Pekerjaan
              </div>
              <div className="space-y-2">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 rounded-xl group"
                  >
                    <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Main links in mobile */}
            <div className="border-t border-blue-100/30 pt-4">
              {mainLinks.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full text-left px-6 py-4 transition-all duration-300 font-semibold ${
                    isActiveLink(item.id)
                      ? "text-blue-600 bg-blue-50 border-r-4 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile CTA Button */}
            <div className="px-6 pt-6 border-t border-blue-100/30">
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-500 shadow-lg border-0 relative overflow-hidden group"
              >
                <div className="flex items-center justify-center gap-2 relative z-10">
                  <Phone className="w-4 h-4" />
                  Konsultasi Sekarang
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};