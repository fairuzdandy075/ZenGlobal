import { Building2, Users, Globe2, Award, Sparkles, Target, HeartHandshake, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { useEffect, useState } from "react";

export const About = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const count16k = useCountUp(statsVisible ? 16000 : 0, 2000);
  const count5 = useCountUp(statsVisible ? 5 : 0, 1500);
  const count30 = useCountUp(statsVisible ? 30 : 0, 1500);
  
  const stats = [
    { 
      icon: Building2, 
      value: "Oktober 2025", 
      label: "Berdiri Sejak", 
      animated: false,
      color: "from-blue-500 to-cyan-500",
      description: "Memulai perjalanan pendidikan bahasa berkualitas"
    },
    { 
      icon: Users, 
      value: `${count16k.toLocaleString()}+`, 
      label: "Tenaga Kerja Tersalurkan", 
      animated: true,
      color: "from-green-500 to-emerald-500",
      description: "Ribuan success stories ke luar negeri"
    },
    { 
      icon: Globe2, 
      value: `${count5}+ Negara`, 
      label: "Negara Tujuan", 
      animated: true,
      color: "from-orange-500 to-red-500",
      description: "Jaringan internasional yang luas"
    },
    { 
      icon: Award, 
      value: `${count30} Tahun`, 
      label: "Pengalaman Mitra", 
      animated: true,
      color: "from-purple-500 to-pink-500",
      description: "Pengalaman puluhan tahun di industri"
    },
  ];

  // Fungsi untuk redirect ke WhatsApp
  const handleDaftarSekarang = () => {
    window.open('https://api.whatsapp.com/send/?phone=6282299047778&text&type=phone_number&app_absent=0', '_blank');
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        <div className="absolute w-80 h-80 bg-gradient-to-r from-green-200 to-cyan-200 rounded-full blur-3xl opacity-20 animate-bounce right-10 top-10" />
        <div className="absolute w-72 h-72 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-20 animate-ping left-20 bottom-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 animate-bounce">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
              
            </span>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground relative">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Tentang Zen Global
            </span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full animate-pulse" />
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lembaga Kursus & Pelatihan (LKP) terpercaya untuk pendidikan bahasa{' '}
            <span className="font-semibold text-blue-600">Jepang</span> dan{' '}
            <span className="font-semibold text-red-600">Korea </span> 
            dengan penyaluran kerja terjamin
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div 
          ref={statsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group cursor-pointer transform transition-all duration-700 ${
                statsVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-20 scale-95"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <Card 
                className={`border-2 border-transparent bg-white/80 backdrop-blur-sm group-hover:border-primary/50 group-hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-3 transition-all duration-500 h-full relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  
                  <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Content Grid */}
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-8 items-start transition-all duration-1000 ${
            contentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left Column */}
          <div className={`space-y-6 transition-all duration-700 ${
            contentVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
            <Card className="border-2 border-primary/10 bg-white/80 backdrop-blur-sm hover:border-primary/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <Target className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <CardContent className="p-8 pt-12">
                <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  Profil Lembaga
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  Lembaga Kursus & Pelatihan (LKP) <span className="font-semibold text-primary">Zen Global Language Institute</span> didirikan dengan tujuan 
                  menyediakan layanan pendidikan bahasa Jepang dan Korea secara non-formal bagi masyarakat umum, 
                  dengan pendekatan bertahap dari dasar hingga mahir.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Kami mendukung kebutuhan studi, pekerjaan, dan pengembangan minat pribadi tenaga kerja 
                  Indonesia yang kompeten dan berdaya saing global.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${
            contentVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:border-accent/40 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <HeartHandshake className="w-6 h-6 text-accent animate-pulse" />
              </div>
              <CardContent className="p-8 pt-12">
                <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  Mitra Strategis
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  LKP Zen Global resmi berdiri pada Oktober 2025 dan telah bermitra dengan{" "}
                  <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded">PT. INTERSOLUSI INDONESIA</span>, 
                  perusahaan dengan pengalaman luas sejak tahun 1995 dalam bidang rekrutmen dan 
                  penempatan tenaga kerja ke luar negeri.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Sejak berdiri, PT. INTERSOLUSI INDONESIA telah menempatkan lebih dari 16.000 tenaga 
                  kerja Indonesia ke berbagai negara seperti Jepang, Korea Selatan, Taiwan, Malaysia, 
                  dan Singapura.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 bg-white/80 backdrop-blur-sm hover:border-primary/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <Rocket className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <CardContent className="p-8 pt-12">
                <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  Visi Kami
                </h3>
                <p className="text-muted-foreground leading-relaxed italic text-lg bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-lg border-l-4 border-primary">
                  "Menjadi pusat kursus bahasa asing yang unggul dan berwawasan global, dengan spesialisasi 
                  budaya dan bahasa Asia Timur, untuk membentuk generasi yang siap bersaing dan terhubung 
                  di dunia internasional."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Animated Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 animate-pulse" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Siap Memulai Perjalanan Bahasa Anda?
            </h3>
            <p className="mb-6 relative z-10 text-blue-100">
              Bergabunglah dengan ribuan alumni sukses kami
            </p>
            <button 
              onClick={handleDaftarSekarang}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative z-10 flex items-center gap-2 mx-auto"
            >
              <Rocket className="w-5 h-5" />
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};