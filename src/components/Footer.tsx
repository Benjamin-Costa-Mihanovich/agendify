import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Heart, ArrowUp, Mail, Phone, MapPin, Clock, Instagram, Twitter, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Ultra dark background with subtle patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-emerald-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(16,185,129,0.03)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Animated background elements - more subtle */}
      <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-green-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-green-400/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Brand section - spans 2 columns */}
            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur-lg opacity-30"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <Calendar className="w-9 h-9 text-white" />
                  </div>
                </div>
                <h3 className="text-5xl font-black bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Agendify
                </h3>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed max-w-md font-light">
                La plataforma de reservas empresarial que revoluciona la gestión de turnos. 
                <span className="text-emerald-400 font-semibold"> Sin comisiones, máxima eficiencia.</span>
              </p>
              
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20">
                  <div className="text-3xl font-black text-emerald-400">+2,500</div>
                  <div className="text-sm text-slate-400 font-medium">Negocios activos</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20">
                  <div className="text-3xl font-black text-green-400">4.9★</div>
                  <div className="text-sm text-slate-400 font-medium">Satisfacción</div>
                </div>
              </div>

              {/* Social media */}
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#", color: "from-pink-500 to-purple-600" },
                  { icon: Twitter, href: "#", color: "from-blue-400 to-blue-600" },
                  { icon: Linkedin, href: "#", color: "from-blue-600 to-blue-800" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick links */}
            <div className="space-y-8">
              <h4 className="text-2xl font-black text-white relative">
                Navegación
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                {[
                  { label: "Inicio", href: "#inicio" },
                  { label: "Beneficios", href: "#beneficios" },
                  { label: "Demo en vivo", href: "#demo" },
                  { label: "Precios", href: "#precios" },
                  { label: "Testimonios", href: "#testimonios" }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 font-medium text-lg transition-all duration-300 hover:translate-x-2 transform group"
                  >
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Product */}
            <div className="space-y-8">
              <h4 className="text-2xl font-black text-white relative">
                Producto
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                {[
                  "Gestión de turnos",
                  "Pagos integrados", 
                  "WhatsApp Business",
                  "Reportes avanzados",
                  "API personalizada"
                ].map((feature, index) => (
                  <div key={index} className="text-slate-400 hover:text-emerald-400 font-medium text-lg transition-colors cursor-pointer">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact info */}
            <div className="space-y-8">
              <h4 className="text-2xl font-black text-white relative">
                Contacto
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
              </h4>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hola@agendify.com",
                    action: "mailto:hola@agendify.com"
                  },
                  {
                    icon: Phone,
                    label: "WhatsApp",
                    value: "+54 11 5555-0123",
                    action: "https://wa.me/5491155550123"
                  },
                  {
                    icon: MapPin,
                    label: "Ubicación",
                    value: "Buenos Aires, AR",
                    action: null
                  },
                  {
                    icon: Clock,
                    label: "Soporte",
                    value: "24/7 disponible",
                    action: null
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 bg-gradient-to-r from-emerald-500/20 to-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                      <contact.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">{contact.label}</p>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-white font-semibold hover:text-emerald-400 transition-colors text-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-lg">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        
        {/* Bottom section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8 text-slate-400">
              <p className="text-lg font-medium">
                © {currentYear} Agendify. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-2 text-sm">
                Desarrollado con <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" /> en Argentina
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex gap-8 text-slate-400 text-sm">
                <a href="#" className="hover:text-emerald-400 transition-colors font-medium">Términos</a>
                <a href="#" className="hover:text-emerald-400 transition-colors font-medium">Privacidad</a>
                <a href="#" className="hover:text-emerald-400 transition-colors font-medium">Cookies</a>
              </div>
              
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 rounded-2xl w-14 h-14 p-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
