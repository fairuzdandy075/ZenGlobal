import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ChefHat, Baby, Heart, Tractor, Wrench, Factory, Building, Car, Utensils, School, UserCheck, Plane, Globe, Users, Award, Clock, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const JobFields = () => {
  const navigate = useNavigate();

  // Fallback untuk useScrollAnimation jika hook tidak tersedia
  const useScrollAnimation = (threshold = 0.1) => {
    return { 
      ref: { current: null }, 
      isVisible: true 
    };
  };

  const { ref: hotelRef, isVisible: hotelVisible } = useScrollAnimation(0.1);
  const { ref: universalRef, isVisible: universalVisible } = useScrollAnimation(0.1);
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.1);

  const handleBackToHome = () => {
    navigate("/");
  };

  // Fungsi untuk redirect ke WhatsApp
  const handleWhatsAppClick = (message = "Halo, saya ingin konsultasi tentang program di Zen Global Language Institute") => {
    const phoneNumber = "6282299047778";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
  };

  // Placeholder images yang sudah diperbaiki
  const placeholderImages = {
    hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
    chef: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
    childcare: "https://images.unsplash.com/photo-1516627145497-ae69578cfc06?w=400&h=250&fit=crop", // Gambar pengasuh anak yang lebih tepat
    nursing: "https://images.unsplash.com/photo-1576765974257-b414b9ea0051?w=400&h=250&fit=crop", // Gambar perawatan disabilitas yang lebih tepat
    agriculture: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop",
    welding: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=250&fit=crop", // Gambar pengelasan yang lebih tepat
    manufacturing: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=250&fit=crop",
    construction: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop",
    automotive: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=250&fit=crop",
    restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
    education: "https://images.unsplash.com/photo-1524178239883-269a632f576f?w=400&h=250&fit=crop", // Gambar pendidikan yang lebih tepat
    qualityControl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=250&fit=crop"
  };

  const hotelFields = [
    {
      icon: Home,
      image: placeholderImages.hotel,
      title: "Tata Graha",
      description: "Housekeeping dan manajemen kamar hotel",
      details: [
        "Membersihkan dan merapikan kamar hotel",
        "Mengelola linen dan perlengkapan kamar",
        "Memastikan standar kebersihan internasional",
        "Melayani kebutuhan tamu hotel"
      ],
      salary: "¥180,000 - ¥250,000/bulan",
      requirements: ["Pengalaman housekeeping", "Kesehatan baik", "Ramah dan sopan"]
    },
    {
      icon: ChefHat,
      image: placeholderImages.chef,
      title: "Memasak",
      description: "Culinary dan food preparation",
      details: [
        "Mempersiapkan bahan makanan",
        "Memasak menu Jepang/Korea",
        "Menjaga kebersihan dapur",
        "Mengelola inventory bahan makanan"
      ],
      salary: "¥200,000 - ¥300,000/bulan",
      requirements: ["Pengalaman memasak", "Sertifikasi culinary", "Kreatif dalam menu"]
    },
    {
      icon: Baby,
      image: placeholderImages.childcare,
      title: "Pengasuh Anak",
      description: "Childcare dan early education",
      details: [
        "Mengasuh dan mengawasi anak",
        "Aktivitas edukasi dan bermain",
        "Mempersiapkan makanan anak",
        "Bekerja sama dengan orang tua"
      ],
      salary: "¥190,000 - ¥260,000/bulan",
      requirements: ["Pengalaman childcare", "Sabar dan penyayang", "Sertifikat CPR"]
    },
    {
      icon: Heart,
      image: placeholderImages.nursing,
      title: "Merawat Disabilitas",
      description: "Special needs care dan nursing",
      details: [
        "Merawat lansia dan disabilitas",
        "Bantuan aktivitas sehari-hari",
        "Pemberian obat dan terapi",
        "Dukungan emosional dan psikologis"
      ],
      salary: "¥200,000 - ¥280,000/bulan",
      requirements: ["Pengalaman nursing", "Sertifikat perawatan", "Empati tinggi"]
    },
    {
      icon: Utensils,
      image: placeholderImages.restaurant,
      title: "Restoran & Kafe",
      description: "Food service dan hospitality",
      details: [
        "Pelayanan makanan dan minuman",
        "Menjaga kualitas pelayanan",
        "Manajemen meja dan reservasi",
        "Pengetahuan menu dan bahan"
      ],
      salary: "¥170,000 - ¥230,000/bulan",
      requirements: ["Pengalaman F&B", "Komunikasi baik", "Kerja tim"]
    },
    {
      icon: Building,
      image: placeholderImages.construction,
      title: "Manajemen Properti",
      description: "Property maintenance dan facility",
      details: [
        "Pemeliharaan gedung dan fasilitas",
        "Manajemen kebersihan umum",
        "Koordinasi dengan kontraktor",
        "Emergency response"
      ],
      salary: "¥210,000 - ¥290,000/bulan",
      requirements: ["Teknis maintenance", "Problem solving", "Fisik kuat"]
    }
  ];

  const universalFields = [
    {
      icon: Tractor,
      image: placeholderImages.agriculture,
      title: "Pertanian",
      description: "Agriculture dan farming",
      details: [
        "Budidaya tanaman dan sayuran",
        "Pengelolaan greenhouse",
        "Panen dan pasca panen",
        "Penggunaan alat pertanian modern"
      ],
      salary: "¥160,000 - ¥220,000/bulan",
      requirements: ["Pengalaman pertanian", "Fisik sehat", "Mau kerja outdoor"]
    },
    {
      icon: Wrench,
      image: placeholderImages.welding,
      title: "Pengelasan",
      description: "Welding dan metal work",
      details: [
        "Pengelasan berbagai jenis logam",
        "Membaca blue print teknik",
        "Quality control hasil las",
        "Maintenance peralatan las"
      ],
      salary: "¥220,000 - ¥320,000/bulan",
      requirements: ["Sertifikat pengelasan", "Pengalaman min. 2 tahun", "Safety awareness"]
    },
    {
      icon: Factory,
      image: placeholderImages.manufacturing,
      title: "Industri Manufaktur",
      description: "Manufacturing dan production",
      details: [
        "Operasi mesin produksi",
        "Assembly produk elektronik",
        "Quality control produk",
        "Manajemen production line"
      ],
      salary: "¥180,000 - ¥250,000/bulan",
      requirements: ["Pengalaman manufaktur", "Detail oriented", "Kerja shift"]
    },
    {
      icon: Car,
      image: placeholderImages.automotive,
      title: "Otomotif",
      description: "Automotive dan machinery",
      details: [
        "Perakitan kendaraan",
        "Maintenance mesin",
        "Quality inspection",
        "Parts manufacturing"
      ],
      salary: "¥200,000 - ¥280,000/bulan",
      requirements: ["Pengalaman otomotif", "Technical skill", "Safety first"]
    },
    {
      icon: School,
      image: placeholderImages.education,
      title: "Pendidikan",
      description: "Education dan training",
      details: [
        "Asisten pengajar bahasa",
        "Konsultan pendidikan",
        "Training coordinator",
        "Education consultant"
      ],
      salary: "¥190,000 - ¥270,000/bulan",
      requirements: ["Background pendidikan", "Komunikasi baik", "Sertifikat mengajar"]
    },
    {
      icon: UserCheck,
      image: placeholderImages.qualityControl,
      title: "Quality Control",
      description: "QA/QC dan inspection",
      details: [
        "Inspeksi kualitas produk",
        "Quality assurance process",
        "Documentation control",
        "Standard compliance"
      ],
      salary: "¥210,000 - ¥290,000/bulan",
      requirements: ["Pengalaman QA/QC", "Detail oriented", "Analytical thinking"]
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "Gaji Kompetitif", description: "Gaji sesuai standar internasional" },
    { icon: Clock, title: "Jam Kerja Tetap", description: "Waktu kerja teratur dan jelas" },
    { icon: Award, title: "Pelatihan", description: "Training sebelum berangkat" },
    { icon: Users, title: "Komunitas", description: "Dukungan komunitas Indonesia" },
    { icon: Plane, title: "Tiket Pulang", description: "Tiket pesawat PP setiap kontrak" },
    { icon: Globe, title: "Asuransi", description: "Asuransi kesehatan lengkap" }
  ];

  const processSteps = [
    { step: 1, title: "Pendaftaran", description: "Registrasi dan seleksi administrasi" },
    { step: 2, title: "Tes Bahasa", description: "Tes kemampuan bahasa Jepang/Korea" },
    { step: 3, title: "Interview", description: "Wawancara dengan employer" },
    { step: 4, title: "Pelatihan", description: "Training bahasa dan budaya" },
    { step: 5, title: "Visa", description: "Pengurusan dokumen dan visa" },
    { step: 6, title: "Keberangkatan", description: "Persiapan dan keberangkatan" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Header dengan Background */}
        <div className="relative bg-blue-600 text-white py-16">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-8 relative">
            <Button 
              onClick={handleBackToHome}
              variant="secondary" 
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white mb-8 border-white"
            >
              <Home className="w-4 h-4" />
              Kembali ke Halaman Utama
            </Button>

            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Bidang <span className="text-yellow-300">Pekerjaan</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
                Jelajahi berbagai peluang karir internasional dengan gaji kompetitif dan benefit menarik
              </p>
              <div className="w-32 h-1 bg-yellow-300 mx-auto mt-8" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 -mt-12 relative">
          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { number: "500+", label: "Pekerja Terkirim" },
              { number: "15+", label: "Tahun Pengalaman" },
              { number: "7", label: "Negara Tujuan" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Hotel & Hospitality Category */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">HOTEL & HOSPITALITY</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industri perhotelan dan hospitality dengan standar pelayanan internasional
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotelFields.map((field, index) => (
                <Card 
                  key={index}
                  className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={field.image} 
                      alt={field.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback jika gambar gagal dimuat
                        e.currentTarget.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                        <field.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{field.title}</h3>
                        <p className="text-sm text-gray-600">{field.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <h4 className="font-semibold text-gray-900">Tugas & Tanggung Jawab:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {field.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold">Estimasi Gaji:</span>
                        <span className="text-blue-600 font-bold">{field.salary}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold">Persyaratan:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {field.requirements.map((req, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Universal Category */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">UNIVERSAL & TECHNICAL</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Beragam bidang teknik dan universal dengan peluang karir yang luas
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {universalFields.map((field, index) => (
                <Card 
                  key={index}
                  className="border-2 border-green-100 hover:border-green-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={field.image} 
                      alt={field.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback jika gambar gagal dimuat
                        e.currentTarget.src = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=250&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-green-600/20 group-hover:bg-green-600/10 transition-colors" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center">
                        <field.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{field.title}</h3>
                        <p className="text-sm text-gray-600">{field.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <h4 className="font-semibold text-gray-900">Tugas & Tanggung Jawab:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {field.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold">Estimasi Gaji:</span>
                        <span className="text-green-600 font-bold">{field.salary}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold">Persyaratan:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {field.requirements.map((req, idx) => (
                            <span key={idx} className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Benefit & <span className="text-blue-600">Fasilitas</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nikmati berbagai benefit menarik yang kami sediakan untuk keberhasilan karir internasional Anda
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="border-2 border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 p-6 text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Proses <span className="text-blue-600">Rekrutmen</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Langkah-langkah menuju karir internasional yang sukses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-white border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-center py-12 mb-8">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4">Siap Memulai Karir Internasional?</h2>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Daftar sekarang dan wujudkan impian bekerja di luar negeri dengan bimbingan profesional kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="font-semibold bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => handleWhatsAppClick("Halo, saya ingin konsultasi tentang program di Zen Global Language Institute")}
                >
                  Konsultasi Gratis
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-semibold border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => handleWhatsAppClick("Halo, saya ingin mendaftar program di Zen Global Language Institute")}
                >
                  Daftar Sekarang
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};