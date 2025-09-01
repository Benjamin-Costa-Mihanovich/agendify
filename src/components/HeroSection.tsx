import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard-bg.jpg";
import professionalBg from "@/assets/professional-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Background image and overlays - lowest z-index */}
      <div className="absolute inset-0 z-0">
        <img 
          src={professionalBg} 
          alt="Background profesional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-slate-900/90 to-emerald-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated background elements - middle z-index */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-green-600/20 rounded-full blur-3xl animate-pulse z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1000 z-10"></div>
      
      {/* Main content - highest z-index */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 relative z-30">
            <div className="space-y-8">
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-600/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 text-sm font-bold mb-8 shadow-lg">
                <span className="animate-pulse mr-3 text-lg">✨</span>
                Sin comisiones • Pagos seguros • WhatsApp integrado
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                  El sistema de <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-blue-600 bg-clip-text text-transparent">reservas sin comisiones</span> para tu negocio
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                  Turnos online ilimitados, pagos con MercadoPago y WhatsApp, todo en una sola plataforma de clase empresarial.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 h-auto font-black shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-800 border-0 relative z-10"
              >
                <span className="mr-3">🚀</span> Empezar Ahora - Gratis
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-12 py-8 h-auto font-bold border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 bg-white/5 relative z-10"
              >
                <span className="mr-3">📊</span> Ver Demo
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-slate-300 font-semibold text-lg">+2,500 negocios</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/30 to-green-600/30 border-3 border-white/50 backdrop-blur-sm shadow-lg"
                    ></div>
                  ))}
                </div>
                <span className="text-slate-300 font-semibold text-lg">⭐ 4.9/5 satisfacción</span>
              </div>
            </div>
          </div>
          <div className="relative z-30">
            {/* Glow effect behind image */}
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/40 via-green-500/30 to-blue-500/20 rounded-3xl blur-3xl opacity-80 animate-pulse z-0"></div>
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-3xl z-0"></div>
              <img 
                src={heroImage} 
                alt="Dashboard profesional de Agendify - Sistema de reservas empresarial" 
                className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700 border border-emerald-400/30 relative z-10"
              />
              {/* Floating badges with proper z-index */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-emerald-400/30 z-20">
                <div className="text-4xl font-black">0%</div>
                <div className="text-sm font-bold opacity-90">Comisiones</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-white via-slate-50 to-emerald-50 text-slate-800 p-6 rounded-xl shadow-xl backdrop-blur-sm border border-white/50 z-20">
                <div className="text-3xl font-black text-emerald-600">24/7</div>
                <div className="text-sm font-bold">Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
