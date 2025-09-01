import { Palette, Calendar, BarChart3 } from "lucide-react";
import workspaceImage from "@/assets/calendar-planning.jpg";
import mobileCalendarImage from "@/assets/mobile-calendar.jpg";
import dashboardImage from "@/assets/business-dashboard.jpg";

const VisualDemoSection = () => {
  const features = [
    {
      image: workspaceImage,
      icon: Palette,
      title: "Landing Personalizable",
      description: "Tu página única con tu marca y colores corporativos",
      alt: "Landing page personalizable de Agendify",
      gradient: "from-emerald-500 to-green-600",
      iconColor: "text-emerald-100"
    },
    {
      image: mobileCalendarImage,
      icon: Calendar,
      title: "Calendario Inteligente",
      description: "Gestiona todos tus turnos de forma visual e intuitiva",
      alt: "Calendario intuitivo de Agendify",
      gradient: "from-blue-500 to-emerald-600",
      iconColor: "text-blue-100"
    },
    {
      image: dashboardImage,
      icon: BarChart3,
      title: "Dashboard Ejecutivo",
      description: "Control total, analytics y reportes de tu negocio",
      alt: "Panel de administración Agendify",
      gradient: "from-teal-500 to-green-600",
      iconColor: "text-teal-100"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-slate-50 via-emerald-50/50 to-green-50 w-full h-full"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-emerald-300/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-green-300/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-600/10 text-green-700 text-sm font-bold mb-10 border border-green-200/50 backdrop-blur-sm">
            <span className="mr-3">🎯</span> Plataforma integral
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 tracking-tight">
            Una plataforma <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 bg-clip-text text-transparent">completa</span> y fácil de usar
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto font-light">
            Todo lo que necesitas para gestionar tu negocio desde una sola interfaz profesional
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-8 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-slate-900/80 z-10"></div>
                <img 
                  src={feature.image} 
                  alt={feature.alt} 
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/40 to-transparent z-20"></div>
                <div className="absolute bottom-8 left-8 right-8 z-30">
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-emerald-200 transition-colors">{feature.title}</h3>
                    <p className="text-sm md:text-base opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity">{feature.description}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-25"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualDemoSection;
