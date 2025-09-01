import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "$19",
      description: "Perfecto para empezar",
      features: [
        "Hasta 100 reservas/mes",
        "Landing personalizable",
        "Recordatorios WhatsApp",
        "Soporte por email"
      ],
      buttonText: "Comenzar Gratis",
      buttonVariant: "default" as const,
      isPopular: false,
      cardGradient: "from-slate-50 to-gray-50",
      borderColor: "border-slate-200"
    },
    {
      name: "Pro",
      price: "$39",
      description: "El favorito de los profesionales",
      features: [
        "Reservas ilimitadas",
        "Pagos MercadoPago",
        "Reportes avanzados",
        "Múltiples servicios",
        "Soporte prioritario 24/7"
      ],
      buttonText: "🚀 Empezar Pro",
      buttonVariant: "default" as const,
      isPopular: true,
      cardGradient: "from-emerald-50 to-green-100",
      borderColor: "border-emerald-300"
    },
    {
      name: "Premium",
      price: "$69",
      description: "Para empresas en crecimiento",
      features: [
        "Todo en Pro",
        "Múltiples sucursales",
        "API personalizada",
        "Manager dedicado"
      ],
      buttonText: "Contactar Ventas",
      buttonVariant: "outline" as const,
      isPopular: false,
      cardGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section id="precios" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-300/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-300/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-600/10 text-emerald-700 text-sm font-bold mb-10 border border-emerald-200/50 backdrop-blur-sm">
            <span className="mr-3">💎</span> Precios empresariales
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 tracking-tight">
            Planes <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent">transparentes</span> para cada negocio
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto font-light">
            Elige el plan que mejor se adapte a tus necesidades sin sorpresas ni letra pequeña
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-2 ${plan.borderColor} shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br ${plan.cardGradient} backdrop-blur-sm relative overflow-hidden group ${
                plan.isPopular 
                  ? 'scale-105 hover:scale-110 shadow-emerald-200/50' 
                  : 'hover:-translate-y-2'
              }`}
            >
              {plan.isPopular && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 to-green-600"></div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-8 py-3 text-sm font-black shadow-lg border-0">
                      ⭐ MÁS POPULAR
                    </Badge>
                  </div>
                </>
              )}
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className={`p-12 ${plan.isPopular ? 'pt-16' : 'pt-12'} relative z-10`}>
                <div className="text-center space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-4xl font-black text-slate-800 group-hover:text-slate-900 transition-colors">{plan.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className={`text-6xl md:text-7xl font-black ${
                          plan.isPopular 
                            ? 'bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent' 
                            : 'text-slate-800'
                        } group-hover:scale-105 transition-transform`}>
                          {plan.price}
                        </span>
                        <span className="text-xl text-slate-500 font-semibold">/mes</span>
                      </div>
                      <p className={`text-base font-bold ${
                        plan.isPopular ? 'text-emerald-600' : 'text-slate-600'
                      }`}>
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-4">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.isPopular 
                            ? 'bg-gradient-to-r from-emerald-500 to-green-600 shadow-lg' 
                            : 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-md'
                        } group-hover:scale-110 transition-transform`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-semibold text-lg group-hover:text-slate-800 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full font-black text-xl py-8 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-800 border-0 text-white'
                        : plan.buttonVariant === 'outline'
                        ? 'border-2 border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-800'
                        : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 border-0 text-white'
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
