import logo from "@/assets/logo-zen.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Zen Global" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">ZEN GLOBAL</span>
                <span className="text-xs text-white/80">Language Institute</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Lembaga kursus bahasa Jepang dan Korea terpercaya dengan mitra internasional 
              berpengalaman lebih dari 30 tahun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Program</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Bahasa Jepang (JLPT)</li>
              <li>Bahasa Korea (TOPIK)</li>
              <li>Persiapan Kerja Luar Negeri</li>
              <li>Kelas Online & Offline</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Bekasi, Jawa Barat</li>
              <li>+62 822-9904-7778</li>
              <li>zengloballanguageinstitute@gmail.com</li>
            </ul>
          </div>

          {/* Google Maps - Alternative Solution */}
          <div>
            <h4 className="font-bold text-lg mb-4">Lokasi Kami</h4>
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-200 aspect-video">
              <iframe
                src="https://maps.google.com/maps?q=-6.3204797,107.0200179&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Zen Global Language Institute"
              />
            </div>
            <p className="text-white/70 text-xs mt-2 text-center">
              📍 Bekasi, Jawa Barat
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Zen Global Language Institute. All rights reserved.
          </p>
          <p className="text-white/60 text-xs mt-2">
            Bermitra dengan PT. INTERSOLUSI INDONESIA
          </p>
        </div>
      </div>
    </footer>
  );
};