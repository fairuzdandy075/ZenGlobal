import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, PlayCircle, FileCheck, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export const Method = () => {
  const { ref: methodsRef, isVisible: methodsVisible } = useScrollAnimation(0.2);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // URL WhatsApp
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=6282299047778&text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20program%20di%20Zen%20Global%20Language%20Institute&type=phone_number&app_absent=0";

  const methods = [
    {
      icon: MessageSquare,
      title: "Pendekatan Komunikatif",
      description: "Fokus pada kemampuan berbicara dan mendengar dalam situasi nyata kehidupan sehari-hari",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "/images/methods/komunikatif.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1334",
      details: [
        "Dialog kehidupan sehari-hari",
        "Role-play situasi nyata", 
        "Koreksi pengucapan langsung",
        "Peningkatan kosakata praktis"
      ]
    },
    {
      icon: PlayCircle,
      title: "Simulasi Percakapan",
      description: "Praktik langsung dengan simulasi percakapan dalam berbagai konteks dan situasi",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "/images/methods/simulasi.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
      details: [
        "Simulasi restoran & shopping",
        "Percakapan bisnis profesional",
        "Situasi darurat & travel",
        "Budaya dan tradisi lokal"
      ]
    },
    {
      icon: FileCheck,
      title: "Penggunaan Multimedia",
      description: "Audio dan video sebagai pendukung belajar untuk pemahaman yang lebih baik",
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: "/images/methods/multimedia.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
      details: [
        "Video pembelajaran interaktif",
        "Audio native speaker",
        "Film & drama bahasa asli",
        "Aplikasi belajar mobile"
      ]
    },
    {
      icon: TrendingUp,
      title: "Latihan Berkala",
      description: "Ujian akhir tiap level dan latihan soal standar JLPT/TOPIK untuk persiapan sertifikasi",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "/images/methods/latihan.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80",
      details: [
        "Mock test berkala",
        "Simulasi ujian JLPT/TOPIK",
        "Review progress mingguan",
        "Sertifikasi resmi"
      ]
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackImage: string) => {
    const target = e.target as HTMLImageElement;
    target.src = fallbackImage;
  };

  const handleWhatsAppClick = (messageType: 'daftar' | 'konsultasi') => {
    let text = '';
    
    if (messageType === 'daftar') {
      text = "Halo, saya ingin mendaftar program di Zen Global Language Institute";
    } else {
      text = "Halo, saya ingin konsultasi tentang program di Zen Global Language Institute";
    }
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=6282299047778&text=${encodedText}&type=phone_number&app_absent=0`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="method" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200/20 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Metode Terbukti</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Metode <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Pengajaran</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pendekatan pembelajaran modern yang efektif dan menyenangkan, dirancang khusus untuk 
            <span className="font-semibold text-foreground"> hasil optimal dalam waktu singkat</span>
          </p>
        </div>

        {/* Methods Grid */}
        <div 
          ref={methodsRef}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {methods.map((method, index) => (
            <Card 
              key={index}
              className={`border-2 border-primary/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden ${
                methodsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${activeCard === index ? 'ring-2 ring-primary/20 shadow-xl scale-105' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img 
                  src={method.image}
                  alt={method.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => handleImageError(e, method.fallbackImage)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-full ${method.bgColor} flex items-center justify-center shadow-lg`}>
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
              </div>

              <CardContent className="p-6">
                {/* Main Content */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {method.description}
                  </p>
                </div>

                {/* Details List */}
                <div className="space-y-2">
                  {method.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex}
                      className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${method.bgColor} ${method.color.replace('text', 'bg')}`} />
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "95%", label: "Tingkat Kepuasan" },
            { number: "2.5x", label: "Lebih Cepat Mahir" },
            { number: "10k+", label: "Siswa Berhasil" },
            { number: "100%", label: "Garansi Belajar" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/5 hover:border-primary/20 hover:bg-white/80 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-accent/10" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <Card className="border-0 bg-transparent backdrop-blur-sm">
            <CardContent className="p-12 text-center relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Siap Memulai Perjalanan Belajar <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Bahasa</span> Anda?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Bergabunglah dengan <span className="font-semibold text-foreground">ribuan siswa</span> yang telah berhasil menguasai bahasa Jepang dan Korea dengan metode kami
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => handleWhatsAppClick('daftar')}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Daftar Sekarang
                </button>
                <button 
                  onClick={() => handleWhatsAppClick('konsultasi')}
                  className="px-8 py-4 border-2 border-primary/20 text-foreground rounded-2xl font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Konsultasi Gratis
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};