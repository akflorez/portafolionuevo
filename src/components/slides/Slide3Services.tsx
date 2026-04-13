import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, MessageSquare, BarChart3, Users, Headphones, Cpu, CheckCircle2 } from "lucide-react";
import channelsBg from "@/assets/slide3-channels.jpg";

const services = [
  {
    icon: Users,
    title: "Gestión BPO & BPS 360",
    desc: "Operación integral de procesos de negocio con enfoque en recuperación estratégica.",
    details: [
      "Cobro Administrativo", 
      "Cobro Pre-jurídico y Jurídico", 
      "Agendamiento de Citas", 
      "Servicio al Cliente", 
      "Ventas Remotas"
    ],
    image: "/assets/apps/legal_dashboard.png"
  },
  {
    icon: MessageSquare,
    title: "Contact Center Inteligente",
    desc: "Gestión masiva de comunicaciones multicanal con equipo especializado.",
    details: [
      "Llamadas Telefónicas Robotizadas", 
      "Correos Electrónicos", 
      "Chat y Mensajes por WhatsApp", 
      "Mensajes de Voz e IVR Interactivo", 
      "Seguimiento e Informes Continuos"
    ],
    image: "/assets/apps/contact_center.png"
  },
  {
    icon: BarChart3,
    title: "Transformación Digital",
    desc: "Ecosistema tecnológico para optimizar la eficiencia y convertir datos en valor.",
    details: [
      "Visualización de Datos (BI)", 
      "Cally IA: Agentes Virtuales", 
      "Portales de Gestión en la Nube", 
      "Automatización de Procesos (RPA)",
      "Análisis de Información Real-time"
    ],
    image: "/assets/apps/bi_dashboard.png"
  }
];

const ScreenshotCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-xl bg-noir/20">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Application Screenshot"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full bg-noir/40 backdrop-blur-md border border-white/10">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-emerald-400 w-4' : 'bg-white/30'}`} 
            />
          ))}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

const Slide3Services = () => {
  return (
    <SlideLayout bgImage={channelsBg} overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-10 z-20">
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-6 text-center"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-2 text-sm">Portafolio Modular de Soluciones</p>
          <h2 className="text-5xl font-black text-white leading-tight">Servicios <span className="text-gradient-green">Integrales</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-5 rounded-[1.5rem] border border-white/5 group relative flex flex-col h-[65vh]"
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">{service.title}</h3>
                </div>
                
                <p className="text-[10px] text-white/50 font-light leading-snug">
                  {service.desc}
                </p>
                
                <ScreenshotCarousel images={"images" in service ? service.images : [service.image!]} />

                <div className="mt-2 space-y-1.5 overflow-y-auto pr-2 custom-scrollbar">
                  <p className="text-[9px] text-emerald-400/80 font-bold uppercase tracking-wide mb-2">Capacidades:</p>
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-[10px] text-white/80 font-medium leading-tight">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3Services;
