import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.2);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.2);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate(); 

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // TAMBAHKAN FUNGSI INI - yang sebelumnya hilang
  const goToProgramPage = () => {
    navigate('/program');
  };

  // Enhanced Background Animation dengan Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      oscillation: number;
      waveSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.oscillation = Math.random() * Math.PI * 2;
        this.waveSpeed = Math.random() * 0.05 + 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.oscillation += this.waveSpeed;
        
        // Enhanced floating effect dengan wave motion
        this.y += Math.sin(this.oscillation) * 0.3;
        this.x += Math.cos(this.oscillation * 0.7) * 0.2;

        // Boundary check dengan wrap-around
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.y > canvas.height + 10) this.y = -10;
        if (this.y < -10) this.y = canvas.height + 10;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Glow effect untuk particles
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Enhanced Floating shapes dengan lebih banyak variasi
    class FloatingShape {
      x: number;
      y: number;
      size: number;
      speed: number;
      type: string;
      rotation: number;
      rotationSpeed: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.speed = Math.random() * 0.5 + 0.2;
        this.type = ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.04 + 0.01})`;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.y -= this.speed;
        this.rotation += this.rotationSpeed;
        this.pulseOffset += this.pulseSpeed;
        
        // Pulse effect
        const pulse = Math.sin(this.pulseOffset) * 0.2 + 0.8;
        const currentSize = this.size * pulse;
        
        if (this.y < -this.size) {
          this.y = canvas.height + this.size;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        
        const pulse = Math.sin(this.pulseOffset) * 0.2 + 0.8;
        const currentSize = this.size * pulse;
        const alpha = 0.1 * pulse;
        
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        if (this.type === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, currentSize, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -currentSize);
          ctx.lineTo(currentSize, currentSize);
          ctx.lineTo(-currentSize, currentSize);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.rect(-currentSize/2, -currentSize/2, currentSize, currentSize);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const particles: Particle[] = [];
    const shapes: FloatingShape[] = [];

    // Initialize more particles and shapes for richer animation
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < 12; i++) {
      shapes.push(new FloatingShape());
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Enhanced animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear with dynamic gradient that follows mouse
      const gradient = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, Math.max(canvas.width, canvas.height) * 0.8
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.08)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.15)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw shapes
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

      // Update particles with mouse influence
      particles.forEach(particle => {
        // Mouse repulsion effect
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          particle.x += Math.cos(angle) * force * 2;
          particle.y += Math.sin(angle) * force * 2;
        }
        
        particle.update();
        particle.draw();
      });

      // Enhanced connections with gradient lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = 1 - (distance / 120);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Pengajar Native dan Bersertifikat",
      description: "Instruktur berpengalaman dari Jepang dan Korea"
    },
    {
      icon: Users,
      title: "Kurikulum Standar Internasional",
      description: "Materi sesuai JLPT dan TOPIK"
    },
    {
      icon: Award,
      title: "Fasilitas Modern",
      description: "Pembelajaran dengan teknologi terkini"
    }
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/80" />
      
      {/* Enhanced Decorative Elements dengan animasi */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse-slower" />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-white/30 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/5 w-4 h-4 bg-accent/40 rounded-full animate-float-slower" />
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-white/20 rounded-full animate-float-delayed" />
        <div className="absolute top-2/3 right-1/6 w-5 h-5 bg-accent/30 rounded-full animate-float-slow" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={leftRef}
            className={`text-white space-y-8 transition-all duration-1000 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Kursus Bahasa Jepang & Korea dengan{" "}
                <span className="text-accent bg-gradient-to-r from-accent to-accent-light bg-clip-text ">
                  Program Profesional
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Program pelatihan bahasa Jepang dan Korea untuk persiapan kerja ke luar negeri dengan 
                fasilitas belajar modern dan terintegrasi teknologi
              </p>
            </div>

            {/* CTA Buttons - PERBAIKI DI SINI */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl group"
                onClick={goToProgramPage} // DIUBAH: dari gotoprogrampage menjadi goToProgramPage
              >
                <span className="flex items-center">
                  Lihat Program
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg" 
                className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300 backdrop-blur-sm border-white/30 hover:border-white/50"
                onClick={() => scrollToSection("contact")}
              >
                Konsultasi Gratis
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="w-8 h-8 mb-3 text-accent group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12" />
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                  <p className="text-xs text-white/80 group-hover:text-white transition-colors duration-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div 
            ref={rightRef}
            className={`relative transition-all duration-1000 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img 
                src={heroImage} 
                alt="Language Learning Classroom" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              
              {/* Enhanced animated overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            </div>
            
            {/* Enhanced Floating Stats dengan efek lebih smooth */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer border border-white/20 hover:border-white/40 stats-card">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">16,000+</div>
              <div className="text-sm text-gray-600 mt-1">Lulusan Berhasil</div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl text-white hover:shadow-3xl transition-all duration-500 cursor-pointer border border-accent/20 hover:border-accent/40 stats-card">
              <div className="text-3xl font-bold">30+</div>
              <div className="text-sm text-white/90 mt-1">Tahun Pengalaman</div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};