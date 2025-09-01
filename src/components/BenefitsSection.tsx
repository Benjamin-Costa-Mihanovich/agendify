import { Card, CardContent } from "@/components/ui/card";
import { Shield, CreditCard, Zap, MessageCircle, Palette, BarChart3 } from "lucide-react";
import modernOfficeBg from "@/assets/modern-office-bg.jpg";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Sin Comisiones",
      description: "Mantén el 100% de tus ganancias. Sin comisiones ocultas ni costos sorpresa en ningún plan.",
      gradient: "from-emerald-500 to-green-600",
      iconColor: "text-emerald-100"
    },
    {
      icon: CreditCard,
      title: "Precios Transparentes",
      description: "Una sola cuota mensual fija. Sin letra pequeña ni costos adicionales por transacción.",
      gradient: "from-green-600 to-emerald-700",
      iconColor: "text-green-100"
    },
    {
      icon: Zap,
      title: "Reservas Ultrarrápidas",
      description: "Tus clientes reservan en 30 segundos desde cualquier dispositivo, 24/7.",
      gradient: "from-lime-500 to-green-600",
      iconColor: "text-lime-100"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integrado",
      description: "Recordatorios automáticos, confirmaciones y comunicación directa con tus clientes.",
      gradient: "from-teal-500 to-emerald-600",
      iconColor: "text-teal-100"
    },
    {
      icon: Palette,
      title: "Branding Personalizado",
      description: "Tu página de reservas con tu marca, colores, logo e información corporativa.",
      gradient: "from-blue-500 to-emerald-600",
      iconColor: "text-blue-100"
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzados",
      description: "Reportes detallados de ventas, clientes y performance para optimizar tu negocio.",
      gradient: "from-emerald-600 to-teal-700",
      iconColor: "text-emerald-100"
    }
  ];

  return (
    <section id="beneficios" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={modernOfficeBg} 
          alt="Oficina moderna profesional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-emerald-50/90 to-green-50/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-emerald-300/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-300/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-600/10 text-emerald-700 text-sm font-bold mb-10 border border-emerald-200/50 backdrop-blur-sm">
            <span className="mr-3">⚡</span> Tecnología empresarial
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 tracking-tight">
            ¿Por qué elegir <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent">Agendify</span>?
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            La plataforma que tu negocio necesita para gestionar reservas de forma profesional y sin complicaciones
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-slate-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-12 text-center relative z-10">
                <div className={`w-24 h-24 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <benefit.icon className={`w-12 h-12 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 text-slate-800 group-hover:text-slate-900 transition-colors">{benefit.title}</h3>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed group-hover:text-slate-700 transition-colors">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
