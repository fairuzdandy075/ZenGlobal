import { Card, CardContent } from "@/components/ui/card";
import { Home, ChefHat, Baby, Heart, Tractor, Wrench, Factory } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const JobFields = () => {
  const { ref: hotelRef, isVisible: hotelVisible } = useScrollAnimation(0.2);
  const { ref: universalRef, isVisible: universalVisible } = useScrollAnimation(0.2);
  const { ref: countriesRef, isVisible: countriesVisible } = useScrollAnimation(0.2);
  const hotelFields = [
    {
      icon: Home,
      title: "Tata Graha",
      description: "Housekeeping dan manajemen kamar hotel"
    },
    {
      icon: ChefHat,
      title: "Memasak",
      description: "Culinary dan food preparation"
    },
    {
      icon: Baby,
      title: "Pengasuh Anak",
      description: "Childcare dan early education"
    },
    {
      icon: Heart,
      title: "Merawat Disabilitas",
      description: "Special needs care dan nursing"
    },
  ];

  const universalFields = [
    {
      icon: Tractor,
      title: "Pertanian",
      description: "Agriculture dan farming"
    },
    {
      icon: Wrench,
      title: "Pengelasan",
      description: "Welding dan metal work"
    },
    {
      icon: Factory,
      title: "Industri Manufaktur",
      description: "Manufacturing dan production"
    },
  ];

  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Bidang Pekerjaan <span className="text-primary">yang Dikelola</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Berbagai peluang karir internasional untuk lulusan program bahasa kami
          </p>
        </div>

        {/* Hotel Category */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/10 px-6 py-2 rounded-full">
              <h3 className="text-xl font-bold text-primary">HOTEL & HOSPITALITY</h3>
            </div>
          </div>
          <div 
            ref={hotelRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {hotelFields.map((field, index) => (
              <Card 
                key={index}
                className={`border-2 border-primary/10 hover:border-primary/30 hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-500 group cursor-pointer ${
                  hotelVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <field.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">{field.title}</h4>
                  <p className="text-sm text-muted-foreground">{field.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Universal Category */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-accent/10 px-6 py-2 rounded-full">
              <h3 className="text-xl font-bold text-accent">UNIVERSAL</h3>
            </div>
          </div>
          <div 
            ref={universalRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {universalFields.map((field, index) => (
              <Card 
                key={index}
                className={`border-2 border-accent/10 hover:border-accent/30 hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-500 group cursor-pointer ${
                  universalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <field.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">{field.title}</h4>
                  <p className="text-sm text-muted-foreground">{field.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Countries Section */}
        <div 
          ref={countriesRef}
          className={`mt-16 transition-all duration-1000 ${
            countriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-primary">Negara Tujuan Penempatan</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["🇯🇵 Jepang", "🇰🇷 Korea Selatan", "🇹🇼 Taiwan", "🇲🇾 Malaysia", "🇸🇬 Singapura", "🇭🇰 Hong Kong", "🇰🇼 Kuwait"].map((country, index) => (
                  <div 
                    key={index}
                    className={`bg-white border-2 border-primary/20 rounded-full px-6 py-3 font-semibold text-foreground hover:border-primary/40 hover:shadow-md hover:scale-110 transition-all duration-300 cursor-pointer ${
                      countriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {country}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
