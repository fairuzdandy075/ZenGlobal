import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, PlayCircle, FileCheck, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Method = () => {
  const { ref: methodsRef, isVisible: methodsVisible } = useScrollAnimation(0.2);
  const methods = [
    {
      icon: MessageSquare,
      title: "Pendekatan Komunikatif",
      description: "Fokus pada kemampuan berbicara dan mendengar dalam situasi nyata kehidupan sehari-hari",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: PlayCircle,
      title: "Simulasi Percakapan",
      description: "Praktik langsung dengan simulasi percakapan dalam berbagai konteks dan situasi",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FileCheck,
      title: "Penggunaan Multimedia",
      description: "Audio dan video sebagai pendukung belajar untuk pemahaman yang lebih baik",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: TrendingUp,
      title: "Latihan Berkala",
      description: "Ujian akhir tiap level dan latihan soal standar JLPT/TOPIK untuk persiapan sertifikasi",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
  ];

  return (
    <section id="method" className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Metode <span className="text-primary">Pengajaran</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pendekatan pembelajaran modern yang efektif dan menyenangkan untuk hasil optimal
          </p>
        </div>

        {/* Methods Grid */}
        <div 
          ref={methodsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {methods.map((method, index) => (
            <Card 
              key={index}
              className={`border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 group cursor-pointer ${
                methodsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`${method.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`w-10 h-10 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{method.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Siap Memulai Perjalanan Belajar Bahasa Anda?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan siswa yang telah berhasil menguasai bahasa Jepang dan Korea
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
