import { Building2, Users, Globe2, Award, Sparkles, Target, HeartHandshake, Rocket, Eye, Flag, Languages, GraduationCap, Lightbulb, Star, ChevronDown, Play, Pause, Quote, TargetIcon, Globe, Zap, Users2, Brain, ArrowRight, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { useEffect, useState, useRef } from "react";

// Import gambar dari assets
import kegiatan1 from "@/assets/kegiatan1.jpg";
import kegiatan2 from "@/assets/kegiatan2.jpg";

export const About = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const { ref: visiMisiRef, isVisible: visiMisiVisible } = useScrollAnimation(0.1);
  const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation(0.1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeMisi, setActiveMisi] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeVisionPart, setActiveVisionPart] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const animationRef = useRef<number | null>(null);
  const visionRef = useRef<number | null>(null);
  
  const count16k = useCountUp(statsVisible ? 16000 : 0, 2000);
  const count5 = useCountUp(statsVisible ? 5 : 0, 1500);
  const count30 = useCountUp(statsVisible ? 30 : 0, 1500);
  
  const stats = [
    { 
      icon: Building2, 
      value: "Bersertifikasi", 
      label: "Tepecaya", 
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

  // Data foto - menggunakan gambar dari assets
  const photos = [
    {
      src: kegiatan1,
      alt: "Kegiatan belajar di Zen Global",
      // title: "Proses Belajar Mengajar",
      // description: "Suasana interaktif dalam kelas bahasa Jepang dan Korea"
    },
    {
      src: kegiatan2,
      alt: "Fasilitas Zen Global", 
      // title: "Fasilitas Modern",
      // description: "Ruang kelas yang nyaman dan lengkap untuk pembelajaran optimal"
    }
  ];

  const misiItems = [
    {
      icon: Languages,
      title: "Program Berkualitas",
      description: "Menyediakan program kursus bahasa Jepang dan Korea yang berkualitas, relevan, dan menyenangkan bagi semua kalangan"
    },
    {
      icon: GraduationCap,
      title: "Pemahaman Lintas Budaya",
      description: "Membangun pemahaman lintas budaya melalui pendekatan belajar yang komunikatif dan kontekstual"
    },
    {
      icon: Users,
      title: "Pengajar Profesional",
      description: "Menghadirkan pengajar profesional, berpengalaman, dan fasih dalam budaya serta bahasa yang diajarkan"
    },
    {
      icon: Lightbulb,
      title: "Metode Modern & Ekspansi Global",
      description: "Mengembangkan metode pengajaran modern yang didukung teknologi, praktik nyata dan terbuka untuk ekspansi bahasa asing lain sesuai kebutuhan global masa depan"
    },
    {
      icon: Award,
      title: "Standar Internasional",
      description: "Menyediakan jalur pembelajaran berstandar internasional, termasuk persiapan ujian seperti JLPT dan TOPIK"
    },
    {
      icon: Globe2,
      title: "Jembatan Internasional",
      description: "Menjadi jembatan bagi peserta didik untuk meraih peluang studi, kerja, atau kolaborasi internasional, khususnya di Jepang dan Korea"
    },
  ];

  // Enhanced Vision Data with Interactive Parts
  const visionParts = [
    {
      text: "Menjadi pusat kursus bahasa asing yang unggul",
      highlight: "unggul",
      icon: TargetIcon,
      color: "from-blue-500 to-cyan-500",
      description: "Keunggulan dalam metode pengajaran dan hasil pembelajaran"
    },
    {
      text: "dan berwawasan global",
      highlight: "berwawasan global", 
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      description: "Perspektif internasional dalam setiap aspek pendidikan"
    },
    {
      text: "dengan spesialisasi budaya dan bahasa Asia Timur",
      highlight: "spesialisasi budaya dan bahasa Asia Timur",
      icon: Users2,
      color: "from-orange-500 to-red-500",
      description: "Fokus pada keahlian khusus wilayah Asia Timur"
    },
    {
      text: "untuk membentuk generasi yang siap bersaing",
      highlight: "siap bersaing",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      description: "Mempersiapkan kompetensi global yang kompetitif"
    },
    {
      text: "dan terhubung di dunia internasional",
      highlight: "terhubung di dunia internasional",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      description: "Membangun jaringan dan koneksi global"
    }
  ];

  const visionStats = [
    { number: "100%", label: "Commitment to Excellence", icon: Award },
    { number: "5000+", label: "Global Opportunities", icon: Globe },
    { number: "∞", label: "Future Possibilities", icon: Rocket }
  ];

  const handleDaftarSekarang = () => {
    window.open('https://api.whatsapp.com/send/?phone=6282299047778&text&type=phone_number&app_absent=0', '_blank');
  };

  // Auto-rotate misi items
  useEffect(() => {
    if (isPlaying) {
      animationRef.current = window.setInterval(() => {
        setActiveMisi(prev => (prev + 1) % misiItems.length);
      }, 3000);
    }
    
    return () => {
      if (animationRef.current) {
        window.clearInterval(animationRef.current);
      }
    };
  }, [isPlaying, misiItems.length]);

  // Auto-rotate vision parts
  useEffect(() => {
    visionRef.current = window.setInterval(() => {
      setActiveVisionPart(prev => (prev + 1) % visionParts.length);
    }, 4000);
    
    return () => {
      if (visionRef.current) {
        window.clearInterval(visionRef.current);
      }
    };
  },);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleAnimation = () => setIsPlaying(!isPlaying);

  const handleVisionPartClick = (index: number) => {
    setActiveVisionPart(index);
    if (visionRef.current) {
      window.clearInterval(visionRef.current);
      visionRef.current = window.setInterval(() => {
        setActiveVisionPart(prev => (prev + 1) % visionParts.length);
      }, 4000);
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
        
        {/* Animated Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Interactive Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
        
        <div className="absolute w-80 h-80 bg-gradient-to-r from-green-200 to-cyan-200 rounded-full blur-3xl opacity-20 right-10 top-10" />
        <div className="absolute w-72 h-72 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-20 left-20 bottom-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Enhanced Animated Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-7 h-7 text-yellow-500" />
            <span className="text-xl font-semibold text-yellow-600 bg-yellow-100 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Tentang Kami
            </span>
            <Sparkles className="w-7 h-7 text-yellow-500" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground relative">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Zen Global
            </span>
          </h2>
          
          <div className="w-40 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full" />
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
            Lembaga Pelatihan Kerja (LPK) terpercaya untuk pendidikan bahasa{' '}
            <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg transition-transform duration-300 hover:scale-105">Jepang</span> dan{' '}
            <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded-lg transition-transform duration-300 hover:scale-105">Korea</span> 
            {' '}dengan penyaluran kerja terjamin ke berbagai negara
          </p>

          {/* Scroll Indicator */}
          <div className="mt-12">
            <ChevronDown className="w-8 h-8 text-blue-500 mx-auto" />
          </div>
        </div>

        {/* Enhanced Interactive Stats Grid */}
        <div 
          ref={statsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transform transition-all duration-700 ${
                statsVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-20 scale-95"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Hover Effect Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
              
              <Card 
                className={`border-2 border-white/50 bg-white/70 backdrop-blur-xl group-hover:bg-white/90 group-hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden shadow-lg`}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-all duration-700`} />
                
                {/* Floating Elements */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Star className="w-4 h-4 text-yellow-500" />
                </div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-800 mb-3 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  <div className="text-lg font-semibold text-blue-600 mb-3 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Content Grid with Staggered Animation */}
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 items-start mb-24 transition-all duration-1000 ${
            contentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left Column */}
          <div className={`space-y-8 transition-all duration-700 ${
            contentVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}>
            <Card className="border-2 border-blue-200 bg-white/80 backdrop-blur-sm hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-6 left-6">
                <Target className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 pt-16">
                <h3 className="text-3xl font-bold mb-6 text-blue-600 flex items-center gap-3">
                  Profil Lembaga
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg bg-white/50 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                  Lembaga Pelatihan Kerja (LPK) <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Zen Global Language Institute</span> didirikan dengan tujuan 
                  menyediakan layanan pendidikan bahasa Jepang dan Korea secara non-formal bagi masyarakat umum, 
                  dengan pendekatan bertahap dari dasar hingga mahir.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg bg-white/50 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                  Kami mendukung kebutuhan studi, pekerjaan, dan pengembangan minat pribadi tenaga kerja 
                  Indonesia yang kompeten dan berdaya saing global.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className={`space-y-8 transition-all duration-700 delay-300 ${
            contentVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}>
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50 hover:border-green-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-6 left-6">
                <HeartHandshake className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 pt-16">
                <h3 className="text-3xl font-bold mb-6 text-blue-600 flex items-center gap-3">
                  Mitra Strategis
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg bg-white/50 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                  LPK Zen Global resmi berdiri dan telah bermitra dengan{" "}
                  <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg hover:scale-105 transition-transform duration-300 inline-block">PT. INTERSOLUSI INDONESIA</span>, 
                  perusahaan dengan pengalaman luas sejak tahun 1995 dalam bidang rekrutmen dan 
                  penempatan tenaga kerja ke luar negeri.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg bg-white/50 p-4 rounded-xl hover:bg-white transition-colors duration-300">
                  Sejak berdiri, PT. INTERSOLUSI INDONESIA telah menempatkan lebih dari 16.000 tenaga 
                  kerja Indonesia ke berbagai negara seperti Jepang, Korea Selatan, Taiwan, Malaysia, 
                  dan Singapura.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ===== PHOTO GALLERY SECTION ===== */}
        <div 
          ref={photoRef}
          className={`mb-24 transition-all duration-1000 ${
            photoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Image className="w-7 h-7 text-purple-500" />
              <span className="text-xl font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full shadow-lg">
                Galeri Kami
              </span>
              <Image className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Lihat <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Aktivitas</span> Kami
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dokumentasi langsung kegiatan belajar mengajar dan fasilitas pendukung di Zen Global
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 cursor-pointer ${
                  photoVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedImage(photo.src)}
              >
                <Card className="border-2 border-white/50 bg-white/70 backdrop-blur-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 -z-10" />
                  
                  <CardContent className="p-0 relative">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                        <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <h4 className="text-xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            {photo.title}
                          </h4>
                          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                            {photo.description}
                          </p>
                        </div>
                      </div>

                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
                        <Image className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Klik pada gambar untuk melihat dalam ukuran penuh
            </p>
          </div>
        </div>

        {/* Enhanced Visi & Misi Section */}
        <div 
          ref={visiMisiRef}
          className={`mb-24 transition-all duration-1000 ${
            visiMisiVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Enhanced Visi Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <Eye className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600 bg-blue-100 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Visi Kami
              </span>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            
            {/* Enhanced Vision Container */}
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 rounded-3xl p-8 max-w-6xl mx-auto border-2 border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>
              
              {/* Floating Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-24 h-24 text-blue-600" />
              </div>
              
              {/* Main Vision Content */}
              <div className="relative z-10">
                {/* Vision Header */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <TargetIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    
                  </h3>
                </div>

                {/* Interactive Vision Text */}
                <div className="mb-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
                    <div className="space-y-6">
                      {visionParts.map((part, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-500 ${
                            index === activeVisionPart 
                              ? 'bg-gradient-to-r from-blue-50 to-purple-50 scale-105 shadow-lg border border-blue-200' 
                              : 'opacity-70 hover:opacity-100 hover:bg-white/50'
                          }`}
                          onClick={() => handleVisionPartClick(index)}
                        >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${part.color} flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                            index === activeVisionPart ? 'scale-110 rotate-12' : ''
                          }`}>
                            <part.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                              {part.text.split(part.highlight).map((segment, i, array) => 
                                i === array.length - 1 ? segment : (
                                  <span key={i}>
                                    {segment}
                                    <span className={`font-bold bg-gradient-to-r ${part.color} bg-clip-text text-transparent`}>
                                      {part.highlight}
                                    </span>
                                  </span>
                                )
                              )}
                            </p>
                            {index === activeVisionPart && (
                              <p className="text-sm text-blue-600 mt-2 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
                                {part.description}
                              </p>
                            )}
                          </div>
                          {index === activeVisionPart && (
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Vision Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                      {visionParts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleVisionPartClick(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeVisionPart 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                              : 'bg-blue-200 hover:bg-blue-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vision Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {visionStats.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-500 group cursor-pointer"
                    >
                      <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Vision Call to Action */}
                
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            </div>
          </div>

          {/* Enhanced Misi Section with Carousel */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-12">
              <Flag className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600 bg-green-100 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Misi Kami
              </span>
              <Flag className="w-8 h-8 text-green-600" />
            </div>

            {/* Misi Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={toggleAnimation}
                className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <div className="flex gap-2">
                {misiItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMisi(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeMisi ? 'bg-green-500 scale-125' : 'bg-green-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Misi Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {misiItems.map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 cursor-pointer ${
                  visiMisiVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-10 scale-95"
                } ${
                  index === activeMisi ? 'ring-4 ring-green-400 scale-105 z-10' : 'opacity-70 hover:opacity-100'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setActiveMisi(index)}
              >
                <Card className="border-2 border-green-100 bg-white/80 backdrop-blur-sm hover:border-green-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full group">
                  <CardContent className="p-8 text-center relative">
                    {/* Active Indicator */}
                    {index === activeMisi && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                    
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Enhanced Value Proposition */}
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6 relative z-10">Komitmen Kami</h3>
            <p className="text-xl mb-8 opacity-95 max-w-4xl mx-auto relative z-10 leading-relaxed">
              Dengan visi yang jelas dan misi yang terstruktur, Zen Global Language Institute berkomitmen 
              untuk terus memberikan pendidikan bahasa terbaik yang membuka peluang karir global bagi 
              generasi Indonesia.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 relative z-10">
              {[
                { value: "100%", label: "Komitmen Kualitas", icon: Award },
                { value: "24/7", label: "Dukungan Pembelajaran", icon: Users },
                { value: "∞", label: "Peluang Tak Terbatas", icon: Globe2 }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 group"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.value}
                  </div>
                  <p className="opacity-90 font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Animated Call to Action */}
        <div className={`text-center mt-24 transition-all duration-1000 delay-700 ${
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}>
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Star className="w-8 h-8 text-yellow-300" />
            </div>
            
            <h3 className="text-3xl font-bold mb-6 relative z-10">
              Siap Memulai Perjalanan Bahasa Anda?
            </h3>
            <p className="text-xl mb-8 relative z-10 text-blue-100">
              Bergabunglah dengan ribuan alumni sukses kami dan buka pintu menuju karir internasional
            </p>
            <button 
              onClick={handleDaftarSekarang}
              className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-105 relative z-10 flex items-center gap-3 mx-auto group/btn shadow-lg"
            >
              <Rocket className="w-6 h-6" />
              <span>Daftar Sekarang</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover/btn:opacity-20" />
            </button>
            
            {/* Stats Preview */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 relative z-10">
              <div className="text-center">
                <div className="text-2xl font-bold">16K+</div>
                <div className="text-sm opacity-90">Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm opacity-90">Negara</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm opacity-90">Tahun</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-lg font-bold">×</span>
              </div>
            </button>
            
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};