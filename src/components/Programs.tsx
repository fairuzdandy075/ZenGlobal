import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, Clock, Award, CheckCircle, Sparkles, Users, Globe, Home, Star, Video, Download, ArrowRight, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Programs = () => {
  const { ref: programsRef, isVisible: programsVisible } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.1);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.1);
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation(0.1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

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
        "Kanji & Tata Bahasa Lengkap",
        "Simulasi Wawancara Kerja"
      ],
      icon: "🇯🇵",
      images: [
        "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1542053027664-10b5f6d669d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      ],
      duration: "6-12 Bulan",
      level: "Pemula hingga Mahir",
      students: "500+ Siswa"
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
        "Hangul & Kosakata Bisnis",
        "Persiapan Beasiswa Korea"
      ],
      icon: "🇰🇷",
      images: [
        "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      ],
      duration: "5-10 Bulan",
      level: "Dasar hingga Lanjutan",
      students: "400+ Siswa"
    },
  ];

  const additionalPrograms = [
    {
      title: "Bahasa Mandarin",
      subtitle: "中文",
      color: "from-orange-500/10 to-white",
      borderColor: "border-orange-500/30",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Level HSK 1-6",
        "Pinyin & Karakter Mandarin",
        "Bisnis dan Perdagangan",
        "Budaya Tiongkok",
        "Persiapan Kerja di China",
        "Program Intensive 3 Bulan"
      ],
      icon: "🇨🇳",
      images: [
        "https://images.unsplash.com/photo-1547981609-4b6bf67b7d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      ],
      duration: "8-14 Bulan",
      level: "Semua Level",
      students: "300+ Siswa"
    },
    {
      title: "Bahasa Inggris",
      subtitle: "English",
      color: "from-green-500/10 to-white",
      borderColor: "border-green-500/30",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "TOEFL & IELTS Preparation",
        "Business English",
        "Conversation Practice",
        "Academic Writing",
        "Pronunciation Training",
        "Job Interview Preparation"
      ],
      icon: "🇺🇸",
      images: [
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      ],
      duration: "4-9 Bulan",
      level: "Beginner to Advanced",
      students: "600+ Siswa"
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Kurikulum Berstandar Internasional",
      description: "Materi pembelajaran mengikuti standar JLPT, TOPIK, HSK, dan IELTS/TOEFL",
      color: "from-purple-500 to-pink-500",
      details: ["Syllabus terstruktur", "Materi update berkala", "Standar kompetensi global"]
    },
    {
      icon: Target,
      title: "Pendekatan Komunikatif",
      description: "Fokus pada kemampuan berbicara dan mendengar dalam situasi nyata",
      color: "from-green-500 to-emerald-500",
      details: ["Role-play conversation", "Real-life scenarios", "Interactive activities"]
    },
    {
      icon: Clock,
      title: "Jadwal Fleksibel",
      description: "Pilihan waktu belajar yang dapat disesuaikan dengan kebutuhan Anda",
      color: "from-orange-500 to-red-500",
      details: ["Kelas pagi/siang/malam", "Weekend classes", "Private customization"]
    },
    {
      icon: Award,
      title: "Sertifikat Resmi",
      description: "Sertifikat dari lembaga resmi setelah menyelesaikan program",
      color: "from-yellow-500 to-amber-500",
      details: ["Diakui perusahaan", "Berkala setiap level", "Digital certificate"]
    },
    {
      icon: Users,
      title: "Komunitas Belajar",
      description: "Bergabung dengan komunitas pelajar bahasa dari berbagai latar belakang",
      color: "from-blue-500 to-cyan-500",
      details: ["Study groups", "Language exchange", "Cultural events"]
    },
    {
      icon: Globe,
      title: "Native Speaker",
      description: "Kesempatan belajar langsung dengan instruktur native speaker",
      color: "from-indigo-500 to-purple-500",
      details: ["Regular sessions", "Cultural insights", "Accent training"]
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "Kelas Intensive",
      description: "Sesi belajar kelompok dengan instruktur"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "Diskusi Kelompok",
      description: "Active learning dalam kelompok kecil"
    },
    {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "Presentasi Siswa",
      description: "Mempresentasikan hasil belajar bahasa"
    },
    {
      url: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "Laboratorium Bahasa",
      description: "Fasilitas audio-visual modern"
    },
    {
      url: "https://images.unsplash.com/photo-1519070994522-88c6b756330e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "Aktivitas Budaya",
      description: "Memperkenalkan budaya negara tujuan"
    },
    {
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "Wisuda & Penghargaan",
      description: "Kelulusan siswa berprestasi"
    }
  ];

  const testimonials = [
    {
      name: "Rina Santoso",
      program: "Bahasa Jepang N2",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      text: "Berhasil lolos JLPT N2 dalam 8 bulan. Metode pengajarannya sangat mudah dipahami!",
      rating: 5
    },
    {
      name: "Ahmad Fauzi",
      program: "Bahasa Korea TOPIK 4",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      text: "Sekarang bisa bekerja di perusahaan Korea dengan percaya diri. Terima kasih!",
      rating: 5
    },
    {
      name: "Maria Wijaya",
      program: "Bahasa Mandarin HSK 5",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      text: "Dari nol sampai bisa negosiasi bisnis dalam 1 tahun. Amazing!",
      rating: 5
    }
  ];

  const classTypes = [
    {
      type: "Kelas Regular",
      icon: Users,
      description: "Kelas kelompok dengan 8-12 siswa",
      features: ["2x pertemuan/minggu", "Durasi 90 menit", "Group discussion", "Biaya terjangkau"],
      price: "Rp 1.2jt/bulan"
    },
    {
      type: "Kelas Private",
      icon: Star,
      description: "One-on-one dengan instruktur",
      features: ["Jadwal fleksibel", "Kurikulum customized", "Progress cepat", "Full attention"],
      price: "Rp 2.5jt/bulan"
    },
    {
      type: "Kelas Intensive",
      icon: Clock,
      description: "Program percepatan belajar",
      features: ["5x pertemuan/minggu", "Durasi 120 menit", "Fast track", "Garansi sampai bisa"],
      price: "Rp 3jt/bulan"
    },
    {
      type: "Kelas Online",
      icon: Video,
      description: "Belajar dari mana saja",
      features: ["Live interactive", "Recorded sessions", "Flexible schedule", "Global access"],
      price: "Rp 800rb/bulan"
    }
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

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleDownloadBrochure = () => {
    // Simulate brochure download
    alert("Brochure program akan segera diunduh!");
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Tombol Kembali ke Halaman Utama */}
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <Button 
          onClick={handleBackToHome}
          variant="outline" 
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 border-primary/20"
        >
          <Home className="w-4 h-4" />
          Kembali ke Halaman Utama
        </Button>
      </div>

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
            {i % 4 === 0 ? "日本語" : i % 4 === 1 ? "한국어" : i % 4 === 2 ? "中文" : "English"}
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
        <div className="absolute w-64 h-64 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-3xl opacity-25 left-1/4 top-10" />
        
        {/* Floating Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 6 === 0 ? "🎌" : i % 6 === 1 ? "🇰🇷" : i % 6 === 2 ? "📚" : i % 6 === 3 ? "🌏" : i % 6 === 4 ? "🎓" : "🌟"}
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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Program <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pendidikan Bahasa</span>
          </h1>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Tersedia program belajar untuk kelas <span className="font-semibold text-green-600">online</span> dan <span className="font-semibold text-blue-600">offline</span> dengan instruktur berpengalaman. 
            <span className="block mt-2 text-lg">Raih impian karir internasional Anda mulai dari sekarang!</span>
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            {[
              { number: "2000+", label: "Siswa Aktif" },
              { number: "98%", label: "Kepuasan Siswa" },
              { number: "50+", label: "Instruktur Profesional" },
              { number: "10", label: "Tahun Pengalaman" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
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
                className={`border-2 ${program.borderColor} bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 overflow-hidden cursor-pointer relative z-10 h-full`}
              >
                {/* Animated Header Gradient */}
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                
                <CardHeader className="text-center pb-4 relative">
                  {/* Program Images Carousel */}
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={program.images[0]} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 flex gap-1">
                      {program.images.slice(0, 2).map((_, idx) => (
                        <div key={idx} className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Icon */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {program.icon}
                    </div>
                  </div>
                  
                  <CardTitle className="text-3xl font-bold text-primary mb-2 mt-4">
                    {program.title}
                  </CardTitle>
                  
                  <div className="text-4xl font-light text-muted-foreground group-hover:scale-105 transition-transform duration-300 mb-4">
                    {program.subtitle}
                  </div>

                  {/* Program Stats */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-2 bg-primary/5 rounded-lg">
                      <Clock className="w-4 h-4 mx-auto mb-1 text-primary" />
                      <div className="font-semibold">{program.duration}</div>
                    </div>
                    <div className="text-center p-2 bg-primary/5 rounded-lg">
                      <BookOpen className="w-4 h-4 mx-auto mb-1 text-primary" />
                      <div className="font-semibold">{program.level}</div>
                    </div>
                    <div className="text-center p-2 bg-primary/5 rounded-lg">
                      <Users className="w-4 h-4 mx-auto mb-1 text-primary" />
                      <div className="font-semibold">{program.students}</div>
                    </div>
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
                    className="w-full mt-6 group hover:scale-105 hover:shadow-lg transition-all duration-300 border-primary/20"
                    onClick={handleKonsultasiProgram}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      Konsultasi Program
                    </span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Programs */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {additionalPrograms.map((program, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 ${
                programsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${(index + 2) * 0.2}s` }}
            >
              <Card 
                className={`border-2 ${program.borderColor} bg-white/80 backdrop-blur-sm hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer relative z-10 h-full`}
              >
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-primary">
                        {program.title}
                      </CardTitle>
                      <div className="text-2xl font-light text-muted-foreground">
                        {program.subtitle}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group hover:scale-105 transition-all duration-300"
                    onClick={handleKonsultasiProgram}
                  >
                    <span>Info Lebih Lanjut</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Class Types Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Pilihan Jenis Kelas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classTypes.map((classType, index) => (
              <Card key={index} className="border-2 border-primary/10 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto`}>
                    <classType.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{classType.type}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{classType.description}</p>
                  <div className="space-y-2 mb-4">
                    {classType.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="font-bold text-primary text-lg">{classType.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Grid with Enhanced Animations */}
        <div 
          ref={benefitsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
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
                  
                  <p className="text-sm text-muted-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {benefit.description}
                  </p>

                  <div className="space-y-1">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div ref={galleryRef} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-4">Galeri Kegiatan Belajar</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Dokumentasi momen-momen seru dan inspiratif dari berbagai aktivitas belajar di kelas kami
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-xl cursor-pointer transform transition-all duration-700 ${
                  galleryVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h4 className="font-semibold text-lg mb-1">{image.title}</h4>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div ref={testimonialsRef} className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-4">Apa Kata Alumni Kami</h3>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Testimoni langsung dari siswa-siswa yang telah berhasil mencapai tujuan mereka
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`border-2 border-primary/10 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 transform ${
                  testimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-primary">{testimonial.program}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground text-sm italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          testimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full opacity-20" />
            
            <h3 className="text-3xl font-bold mb-4 relative z-10">
              Siap Memulai Perjalanan Bahasa Anda?
            </h3>
            <p className="mb-6 relative z-10 text-blue-100 text-lg max-w-2xl mx-auto">
              Bergabunglah dengan ribuan siswa yang telah berhasil menguasai bahasa asing dan meraih karir impian mereka di perusahaan internasional
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={handleKonsultasiProgram}
              >
                <Users className="w-5 h-5 mr-2" />
                Konsultasi Gratis Sekarang
              </Button>
              
              <Button 
                size="lg"
                variant="ghost" 
                className="bg-white/20 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300"
                onClick={handleBackToHome}
              >
                <Home className="w-5 h-5 mr-2" />
                Kembali ke Home
              </Button>
            </div>
            
            <div className="mt-6 text-blue-100 text-sm relative z-10">
              📞 Hubungi kami: 0822-9904-7778 | ✉️  zengloballanguageinstitute@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};