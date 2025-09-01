import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-200/50 fixed w-full top-0 z-50 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-white/80 to-green-50/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl blur opacity-20"></div>
              <img 
                src={logo} 
                alt="Agendify Logo" 
                className="h-14 w-auto relative z-10 rounded-xl"
              />
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-semibold relative group">
              Inicio
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#beneficios" className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-semibold relative group">
              Beneficios
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#precios" className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-semibold relative group">
              Precios
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#contacto" className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-semibold relative group">
              Contacto
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-bold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border-0"
          >
            Empezar Gratis
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
