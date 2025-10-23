import React, { useState, useEffect, useRef } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqData = [
    {
      question: "Apa saja program bahasa yang tersedia di Zen Global?",
      answer: "Kami menyediakan program bahasa Jepang (日本語) dan Korea (한국어) dengan kurikulum khusus yang dirancang untuk persiapan kerja ke luar negeri."
    },
    {
      question: "Berapa lama durasi program belajar?",
      answer: "Durasi program bervariasi tergantung level: Basic (3 bulan), Intermediate (4 bulan), Advanced (5 bulan). Total program lengkap 12 bulan termasuk persiapan sertifikasi."
    },
    {
      question: "Apakah ada jaminan penyaluran kerja setelah lulus?",
      answer: "Ya, melalui kemitraan dengan PT. Intersolusi Indonesia, kami memiliki jaringan lebih dari 50 perusahaan mitra di Asia yang siap menerima lulusan terbaik kami."
    },
    {
      question: "Bagaimana sistem pengajaran di Zen Global?",
      answer: "Kami menggunakan metode komunikatif dengan fokus percakapan, simulasi situasi kerja, multimedia, dan latihan berkala dengan pengajar berpengalaman."
    },
    {
      question: "Apakah tersedia kelas trial atau placement test?",
      answer: "Ya, kami menyediakan placement test gratis untuk menentukan level kemampuan awal dan trial class untuk merasakan metode pengajaran kami."
    },
    {
      question: "Bidang pekerjaan apa saja yang disalurkan?",
      answer: "Kami menyalurkan ke berbagai bidang: Tata Graha, Memasak, Pengasuh Anak, Pertanian, Pengelasan, Industri Manufaktur, dan perawatan disabilitas."
    },
    {
      question: "Bagaimana proses pendaftaran dan persyaratannya?",
      answer: "Proses pendaftaran: 1) Konsultasi, 2) Placement Test, 3) Registrasi, 4) Pembayaran. Persyaratan: KTP, Foto, Ijazah terakhir, dan semangat belajar!"
    },
    {
      question: "Apakah tersedia program beasiswa atau keringanan biaya?",
      answer: "Ya, kami memiliki program beasiswa untuk peserta berprestasi dan sistem cicilan untuk memudahkan pembiayaan pendidikan."
    },
    {
      question: "Bagaimana sertifikasi yang akan didapat setelah lulus?",
      answer: "Selain sertifikat kompetensi dari Zen Global, kami mempersiapkan peserta untuk ujian JLPT (Jepang) dan TOPIK (Korea) yang diakui internasional."
    },
    {
      question: "Apakah ada program pelatihan budaya kerja?",
      answer: "Ya, selain bahasa, kami memberikan pelatihan budaya kerja, etika profesional, dan adaptasi budaya negara tujuan kerja."
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section dengan animasi */}
        <div 
          className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pertanyaan yang{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Sering Diajukan
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar program pendidikan dan penyaluran kerja di Zen Global Language Institute
          </p>
        </div>

        {/* FAQ Items dengan animasi stagger */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${
                isVisible 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-10 opacity-0'
              } ${
                openIndex === index 
                  ? 'ring-2 ring-orange-500 shadow-2xl' 
                  : ''
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Question Button dengan animasi */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-orange-50 to-red-50' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  {/* Number Badge dengan animasi */}
                  <div 
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 scale-110' 
                        : 'bg-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 pr-4 text-left">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-6 h-6 text-orange-600 transform transition-all duration-300 ${
                      openIndex === index ? 'rotate-180 scale-110' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </button>

              {/* Answer Content dengan animasi yang lebih smooth */}
              <div 
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div 
                  className={`px-6 pb-4 border-t border-gray-200 pt-4 transform transition-all duration-300 ${
                    openIndex === index 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: openIndex === index ? '200ms' : '0ms'
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info dengan animasi */}
        <div 
          className={`text-center mt-12 transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-10 opacity-0 scale-95'
          }`}
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white animate-pulse"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full opacity-20 animate-ping"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Masih Ada Pertanyaan?
            </h3>
            <p className="mb-6 relative z-10">
              Tim kami siap membantu menjawab semua pertanyaan Anda
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative z-10">
              Hubungi Kami Sekarang
            </button>

            {/* Floating elements */}
            <div className="absolute bottom-2 left-4 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '0.2s' }}>
              ❓
            </div>
            <div className="absolute top-4 right-6 text-3xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
              💬
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
            <span className="text-sm text-gray-600">
              {openIndex !== null ? 'Membaca FAQ' : 'Pilih pertanyaan'}
            </span>
            <div className="flex space-x-1">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    openIndex !== null 
                      ? 'bg-green-500 animate-pulse' 
                      : 'bg-gray-300'
                  }`}
                  style={{ 
                    animationDelay: `${dot * 0.2}s` 
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;