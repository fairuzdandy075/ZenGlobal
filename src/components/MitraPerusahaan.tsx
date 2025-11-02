import React, { useEffect, useRef, useState } from 'react';

const MitraPerusahaan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const mitraData = [
    {
      region: "Taiwan",
      companies: [
        "CHIN CHUANG INTERNATIONAL MANPOWER CO., LTD",
        "DA YE INTERNATIONAL CO., LTD",
        "GIANT MANPOWER RESOURCE CO., LTD",
        "KONSULTAN MANAJEMEN HONG HAI LTD",
        "HUECEIN MANPOWER CO., LTD - Huecein Manpower Brokerage Co., Ltd",
        "HUI CI INTERNATIONAL CO., LTD",
        "JIH YUEH HUNG TENAGA KERJA CO., LTD - Sun Moon Hung Manpower Brokerage Co., Ltd",
        "MING HSIN MANPOWER CO., LTD",
        "CHANG KUN PERUSAHAAN KONSTRUKSI TERBATAS - Changkun Construction Co., Ltd",
        "JEOU LUH ENTERPRISE CO., LTD",
        "BERGABUNGLAH DENGAN YIUH INDUSTRY CO., LTD",
        "KHEIRON CORP - Ding Fulong Precision Machinery Co., Ltd",
        "LEDER INDUSTRIAL CO., LTD - Star Color Industrial Co., Ltd",
        "MIAO CHIANG PAPER CONTAINER CO., LTD",
        "TUN HOU CORPORATION",
        "WINSON MACHINERY CASTING CO., LTD - Daying Cheng Machinery Co., Ltd",
        "SHIH SHING INTERNATIONAL CO., LTD",
        "YANG CHIEH INTERNATIONAL CO., LTD",
        "YANG LUCK INTERNATIONAL CO., LTD",
        "YUCI INTERNATIONAL DEVELOPMENT CO., LTD",
        "YU-HAN MANPOWER DEVELOPMENT CO., LTD",
        "YUNG HUNG INTERNATIONAL HUMAN RESOURCES CO., LTD",
        "BUFFALO MACHINERY CO., LTD - Daffalo Enterprise Co., Ltd"
      ]
    },
    {
      region: "Hong Kong",
      companies: [
        "AGENSI KERJA ASIA-ONE",
        "BELIEF EMPLOYMENT LTD - Perusahaan Pekerjaan Faith (Luar Negeri)",
        "SHUN TONG INTERNATIONAL LTD",
        "KONSULTAN KERJA KONVOI - Konsultasi Ketenagakerjaan Ying'an",
        "PUSAT KERJA FRANK EXPRESS",
        "PUSAT AGEN KERJA GOOD RICH",
        "AGEN KERJA LOGON CORP - Agensi Hiburan",
        "ORIENT TRAVEL SERVICE & TRADING CO",
        "SHUN ON EMPLOYMENT SERVICES LIMITED",
        "PERUSAHAAN WAI WAI"
      ]
    },
    {
      region: "Malaysia",
      companies: [
        "AGENSI PEKERJAAN MNK SDN. BHD",
        "AGENSI PEKERJAAN PANSOMAL SDN. BHD",
        "BADAN PENYEDIA KERJA SAMA TENAGA KERJA"
      ]
    },
    {
      region: "Internasional Lainnya",
      companies: [
        "KUWAIT SADEN GENERAL TRADING CO. - Kuwait",
        "SAMSUNG HEAVY INDUSTRIES - Korea",
        "TOPLACH INTERNATIONAL CO., LTD - Minneng Human Resource Management Co., Ltd",
        "Perusahaan Jasa Tenaga Kerja - Internasional Chen Hong"
      ]
    }
  ];

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section dengan animasi */}
        <div 
          className={`text-center mb-12 transition-all duration-700 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mitra Kerja Sama{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Internasional
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Melalui kemitraan dengan{' '}
            <span className="font-semibold text-blue-600 animate-pulse">
              PT. INTERSOLUSI INDONESIA
            </span>
            , LPK{' '}
            <span className="font-semibold text-green-600">
              Zen Global Language Institute
            </span>{' '}
            terhubung dengan berbagai perusahaan dan lembaga internasional di Asia yang menjadi mitra penyaluran tenaga kerja terlatih kami.
          </p>
        </div>

        {/* Perusahaan Chen Hong dengan animasi */}
        <div 
          className={`bg-white rounded-2xl shadow-lg p-8 mb-12 text-center transform transition-all duration-500 ${
            isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-95 opacity-0'
          } hover:shadow-xl hover:scale-105 cursor-pointer`}
        >
          <div className="animate-bounce mb-4">
            <span className="text-3xl">🤝</span>
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Perusahaan Jasa Tenaga Kerja Internasional Zen Global
          </h2>
          <p className="text-gray-600">
            Mitra utama dalam penyaluran tenaga kerja terlatih ke berbagai negara
          </p>
        </div>

        {/* Grid Mitra Perusahaan dengan animasi stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mitraData.map((region, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Header kartu dengan gradient animasi */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 py-4 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                <h3 className="text-xl font-bold text-white text-center relative z-10">
                  {region.region}
                </h3>
              </div>
              
              {/* Daftar perusahaan dengan animasi bertahap */}
              <div className="p-6 max-h-96 overflow-y-auto">
                <ul className="space-y-3">
                  {region.companies.map((company, companyIndex) => (
                    <li 
                      key={companyIndex}
                      className={`flex items-start py-3 border-b border-gray-100 last:border-b-0 transform transition-all duration-300 hover:bg-blue-50 hover:pl-4 rounded-lg ${
                        isVisible 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-10 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${companyIndex * 50 + index * 100}ms`
                      }}
                    >
                      <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2 mr-3 animate-ping"></div>
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 absolute"></div>
                      <span className="text-gray-800 leading-relaxed">
                        {company}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer kartu dengan animasi */}
              <div className="bg-gray-50 py-3 px-6 text-center">
                <p className="text-sm text-gray-600 animate-pulse">
                  {region.companies.length} perusahaan mitra
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Counter animasi untuk total mitra */}
        <div 
          className={`text-center mt-12 p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-700 ${
            isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-90 opacity-0'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mitraData.map((region, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {region.companies.length}+
                </div>
                <div className="text-sm text-gray-600">{region.region}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note dengan animasi */}
        <div 
          className={`text-center mt-8 transition-all duration-1000 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-gray-600 italic animate-pulse">
            * Daftar mitra perusahaan yang terus diperbarui dan berkembang
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: `${dot * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MitraPerusahaan;