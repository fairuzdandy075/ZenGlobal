import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, Clock, Award, CheckCircle, Sparkles, Users, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

export const Programs = () => {
  const { ref: programsRef, isVisible: programsVisible } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const programs = [
    {
      title: "Bahasa Jepang",
      subtitle: "日本語",
      color: "from-red-500/10 to-white",
      borderColor: "border-red-500/30",
      gradient: "from-red-500 to-pink-500",
      features: [
        "Level N5 hingga N1 (JLPT)",
        "Percakapan Sehari-hari",
        "Persiapan Kerja ke Jepang",
        "Budaya dan Etika Jepang",
      ],
      icon: "🇯🇵",
    },
    {
      title: "Bahasa Korea",
      subtitle: "한국어",
      color: "from-blue-500/10 to-white",
      borderColor: "border-blue-500/30",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Level 1 hingga 6 (TOPIK)",
        "Komunikasi Praktis",
        "Persiapan Kerja ke Korea",
        "Budaya Korea Modern",
      ],
      icon: "🇰🇷",
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Kurikulum Berstandar Internasional",
      description: "Materi pembelajaran mengikuti standar JLPT dan TOPIK",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Pendekatan Komunikatif",
      description: "Fokus pada kemampuan berbicara dan mendengar dalam situasi nyata",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Jadwal Fleksibel",
      description: "Pilihan waktu belajar yang dapat disesuaikan dengan kebutuhan Anda",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      title: "Sertifikat Resmi",
      description: "Sertifikat dari lembaga resmi setelah menyelesaikan program",
      color: "from-yellow-500 to-amber-500"
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleKonsultasiProgram = () => {
    window.open('https://api.whatsapp.com/send/?phone=6282299047778&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Language Characters */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 2 === 0 ? "日本語" : "한국어"}
          </div>
        ))}
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-red-200 to-pink-200 rounded-full blur-3xl opacity-30"
          style={{
            left: `${mousePosition.x / 25}px`,
            top: `${mousePosition.y / 25}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-25 right-10 top-1/4" />
        <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 left-10 bottom-1/4" />
        
        {/* Floating Icons */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 4 === 0 ? "🎌" : i % 4 === 1 ? "🇰🇷" : i % 4 === 2 ? "📚" : "🌏"}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
              Program Unggulan
            </span>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Program <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pendidikan Bahasa</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tersedia program belajar untuk kelas <span className="font-semibold text-green-600">online</span> dan <span className="font-semibold text-blue-600">offline</span> dengan instruktur berpengalaman
          </p>
        </div>

        {/* Programs Grid with Enhanced Animations */}
        <div 
          ref={programsRef}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 ${
                programsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Animated Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              
              <Card 
                className={`border-2 ${program.borderColor} bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 overflow-hidden cursor-pointer relative z-10`}
              >
                {/* Animated Header Gradient */}
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                
                <CardHeader className="text-center pb-4 relative">
                  {/* Floating Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {program.icon}
                  </div>
                  
                  <CardTitle className="text-3xl font-bold text-primary mb-2">
                    {program.title}
                  </CardTitle>
                  
                  <div className="text-4xl font-light text-muted-foreground group-hover:scale-105 transition-transform duration-300">
                    {program.subtitle}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 0.1}s` }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 group hover:scale-105 hover:shadow-lg transition-all duration-300"
                    onClick={handleKonsultasiProgram}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      Konsultasi Program
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Benefits Grid with Enhanced Animations */}
        <div 
          ref={benefitsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 ${
                benefitsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <Card 
                className={`border-2 border-primary/10 bg-white/80 backdrop-blur-sm hover:border-primary/30 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer h-full relative overflow-hidden`}
              >
                {/* Animated Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardContent className="p-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:scale-105 transition-transform duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground group-hover:translate-x-1 transition-transform duration-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full opacity-20" />
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Mulai Perjalanan Bahasa Anda Hari Ini!
            </h3>
            <p className="mb-6 relative z-10 text-blue-100">
              Pilih program yang sesuai dengan tujuan karir internasional Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                onClick={handleKonsultasiProgram}
              >
                <Users className="w-4 h-4 mr-2" />
                Konsultasi Gratis
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Globe className="w-4 h-4 mr-2" />
                Info Lengkap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};