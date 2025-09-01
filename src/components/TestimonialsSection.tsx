import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Estilista",
      business: "Salón Elite",
      content: "Agendify cambió completamente mi negocio. Antes perdía 30% de mis clientes por no poder atender el teléfono. Ahora mis clientas reservan solas y yo me enfoco en lo que amo: hacer que se vean hermosas.",
      avatar: "/src/assets/testimonial-1.jpg",
      rating: 5,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-100"
    },
    {
      name: "Carlos Ruiz",
      role: "Dentista",
      business: "Clínica Dental Sonrisa",
      content: "La automatización de recordatorios redujo mis ausencias en 85%. Los pacientes agradecen la comodidad de agendar online y yo tengo una agenda organizada sin esfuerzo. ROI increíble.",
      avatar: "/src/assets/testimonial-2.jpg",
      rating: 5,
      gradient: "from-green-600 to-emerald-700",
      bgGradient: "from-green-50 to-emerald-100"
    },
    {
      name: "Ana Martínez",
      role: "Psicóloga",
      business: "Centro Bienestar",
      content: "Mis pacientes valoran mucho la discreción de poder agendar sin llamar. Los recordatorios automáticos y la gestión de pagos me ahorraron horas semanales que ahora dedico a más pacientes.",
      avatar: "/src/assets/testimonial-3.jpg",
      rating: 5,
      gradient: "from-teal-500 to-emerald-600",
      bgGradient: "from-teal-50 to-emerald-50"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50"></div>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-green-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-green-200/15 to-emerald-300/15 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-600/10 text-emerald-700 text-sm font-bold mb-10 border border-emerald-200/50 backdrop-blur-sm">
            <span className="mr-3">💬</span> Testimonios reales
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 tracking-tight">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent">clientes</span>
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto font-light">
            Más de 10,000 profesionales ya transformaron sus negocios con Agendify
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br ${testimonial.bgGradient} backdrop-blur-sm relative overflow-hidden group`}
            >
              {/* Quote decoration */}
              <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity`}>
                <Quote className="w-8 h-8 text-white" />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-10 relative z-10">
                <div className="space-y-8">
                  {/* Rating */}
                  <div className="flex gap-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className={`w-6 h-6 fill-current text-yellow-500`} />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <blockquote className="text-slate-700 text-lg leading-relaxed font-medium">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-6">
                    <Avatar className="w-16 h-16 ring-4 ring-white shadow-xl">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className={`bg-gradient-to-r ${testimonial.gradient} text-white font-bold text-lg`}>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <h4 className="font-black text-xl text-slate-800">{testimonial.name}</h4>
                      <div className="space-y-1">
                        <p className="text-slate-600 font-semibold">{testimonial.role}</p>
                        <Badge 
                          className={`bg-gradient-to-r ${testimonial.gradient} text-white border-0 font-semibold`}
                        >
                          {testimonial.business}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-emerald-50 to-green-100 rounded-3xl p-12 border border-emerald-200/50 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto space-y-8">
              <h3 className="text-4xl md:text-5xl font-black text-slate-800">
                ¿Listo para ser el <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">próximo testimonio</span>?
              </h3>
              <p className="text-xl text-slate-600 font-medium">
                Únete a miles de profesionales que ya transformaron sus negocios
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="text-lg font-bold text-emerald-700">
                  ⚡ Setup en menos de 5 minutos
                </div>
                <div className="text-lg font-bold text-emerald-700">
                  🎯 Sin permanencia
                </div>
                <div className="text-lg font-bold text-emerald-700">
                  💰 ROI desde el primer mes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
