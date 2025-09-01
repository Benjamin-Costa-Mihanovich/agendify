import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 w-full h-full"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-400/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-600/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 text-sm font-bold mb-10 shadow-lg">
            <span className="mr-3 animate-pulse">🚀</span>
            Únete a +2,500 negocios exitosos
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            ¿Listo para <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent">modernizar</span> tu negocio?
          </h2>
          <p className="text-2xl md:text-3xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
            Completa el formulario y te contactamos en menos de 24 horas para configurar tu plataforma
          </p>
        </div>
        
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-green-50/30"></div>
          <CardContent className="p-12 relative z-10">
            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <Label htmlFor="name" className="text-slate-800 font-bold text-xl">Nombre completo *</Label>
                  <Input 
                    id="name" 
                    placeholder="Tu nombre y apellido" 
                    className="h-16 text-xl border-2 border-slate-200 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg focus:shadow-xl" 
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="phone" className="text-slate-800 font-bold text-xl">WhatsApp *</Label>
                  <Input 
                    id="phone" 
                    placeholder="+54 9 11 1234-5678" 
                    className="h-16 text-xl border-2 border-slate-200 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg focus:shadow-xl" 
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <Label htmlFor="email" className="text-slate-800 font-bold text-xl">Correo electrónico *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="h-16 text-xl border-2 border-slate-200 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg focus:shadow-xl" 
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="business" className="text-slate-800 font-bold text-xl">Rubro del negocio *</Label>
                  <Input 
                    id="business" 
                    placeholder="Ej: Peluquería, Estética, Clínica..." 
                    className="h-16 text-xl border-2 border-slate-200 focus:border-emerald-500 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg focus:shadow-xl" 
                  />
                </div>
              </div>
              
              <div className="text-center pt-8">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 hover:from-emerald-700 hover:via-green-700 hover:to-teal-800 text-white font-black text-2xl px-16 py-10 h-auto shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1 border-0"
                >
                  <span className="mr-4 text-3xl">🚀</span>
                  Quiero Agendify para mi negocio
                </Button>
                <p className="text-slate-600 text-base mt-6 font-medium">
                  * Campos obligatorios. No compartimos tu información.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
