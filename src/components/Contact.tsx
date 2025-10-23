import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contact = () => {
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation(0.2);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.2);
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl Setu Bantargebang, Kelurahan Cimuning RT 09/RW03 Kecamatan Mustika Jaya, Kota Bekasi, Provinsi Jawa Barat, Indonesia",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Phone,
      title: "Telepon / WhatsApp",
      content: "+62 822-9904-7778",
      link: "https://wa.me/6282299047778",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Mail,
      title: "Email",
      content: "zengloballanguageinstitute@gmail.com",
      link: "mailto:zengloballanguageinstitute@gmail.com",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Globe,
      title: "Website",
      content: "Coming Soon",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Siap membantu Anda memulai perjalanan belajar bahasa Jepang dan Korea
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div 
            ref={contactRef}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className={`border-2 border-primary/10 hover:border-primary/30 hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-500 group cursor-pointer ${
                  contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${info.bgColor} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-7 h-7 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card 
            ref={ctaRef}
            className={`border-2 border-primary/20 bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden relative hover:shadow-2xl transition-all duration-500 ${
              ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            <CardContent className="p-8 md:p-12 text-center relative z-10">
              <h3 className="text-3xl font-bold mb-4">Konsultasi Gratis</h3>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Dapatkan informasi lengkap tentang program, biaya, dan jadwal kursus. 
                Tim kami siap membantu Anda menemukan program yang tepat!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg"
                  onClick={() => window.open("https://wa.me/6282299047778", "_blank")}
                >
                  <Phone className="mr-2" />
                  WhatsApp Sekarang
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  className="text-lg"
                  onClick={() => window.location.href = "mailto:zengloballanguageinstitute@gmail.com"}
                >
                  <Mail className="mr-2" />
                  Email Kami
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
