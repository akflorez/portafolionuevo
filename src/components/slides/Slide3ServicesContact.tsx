import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Headphones, CheckCircle2, MessageSquare, Zap } from "lucide-react";
import contactBg from "@/assets/slide4-contact.jpg";

const Slide3ServicesContact = () => {
  const coreServices = [
    "Cobro Administrativo Masivo",
    "Cobro Pre-jurídico y Jurídico",
    "Agendamiento de Citas",
    "Servicio al Cliente",
    "Ventas Remotas (Outbound)"
  ];

  const techCapabilities = [
    "Llamadas Telefónicas Robotizadas",
    "Correos Electrónicos Automatizados",
    "Chat y Mensajería por WhatsApp Business",
    "Mensajes de Voz e IVR Interactivo",
    "Mensajes de Texto (SMS) Masivos",
    "Seguimiento, Informes y Acompañamiento Continuo"
  ];

  return (
    <SlideLayout bgImage={contactBg} overlayStrong>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-16 gap-12 z-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                <Headphones className="w-7 h-7 text-emerald-500" />
              </div>
              <p className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs">Comunicación Estratégica</p>
            </div>
            <h2 className="text-8xl font-black text-white leading-[0.9] mb-6">
              Contact Center <br />
              <span className="text-gradient-green">Inteligente</span>
            </h2>
            <p className="text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
              Omnicanalidad y respuesta inmediata. Combinamos tecnología de punta con un equipo altamente capacitado para gestionar sus comunicaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
             <div className="space-y-4">
                <p className="text-xs text-emerald-400 uppercase font-black tracking-widest mb-4 px-4 py-2 bg-emerald-500/10 rounded-xl inline-block border border-emerald-500/20">Servicios Core</p>
                {coreServices.map((item, index) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-xl text-white/80 group-hover:text-white transition-colors font-medium">{item}</span>
                  </div>
                ))}
             </div>
             <div className="space-y-4 pt-0">
                <p className="text-xs text-emerald-400 uppercase font-black tracking-widest mb-4 px-4 py-2 bg-emerald-500/10 rounded-xl inline-block border border-emerald-500/20">Capacidades</p>
                {techCapabilities.map((item, index) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <Zap className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-lg text-white/60 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <img 
                src="/assets/apps/contact_center.png" 
                alt="Contact Center Operations" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-noir/40 via-transparent to-noir/10"></div>
            </div>
            
            <motion.div 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 left-8 p-6 rounded-3xl bg-noir/90 backdrop-blur-xl border border-white/20 flex items-center gap-4 shadow-2xl"
            >
              <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              <span className="text-xs text-white/90 font-black uppercase tracking-[0.2em]">Operación En Vivo</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesContact;
