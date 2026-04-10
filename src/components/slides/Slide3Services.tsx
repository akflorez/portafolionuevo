import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, MessageSquare, BarChart3, Users, Headphones, Cpu } from "lucide-react";
import channelsBg from "@/assets/slide3-channels.jpg";

const services = [
  {
    icon: Users,
    title: "Gestión BPO & Cartera 360",
    desc: "Recuperación de cartera con enfoque estratégico. Integramos analítica avanzada para predecir comportamientos de pago y optimizar el recaudo.",
    details: ["Estrategias Segmentadas", "Analítica Predictiva", "Eficiencia Operativa"],
    image: "/assets/apps/legal_dashboard.png" // Usamos el dashboard legal como muestra de gestión de datos
  },
  {
    icon: MessageSquare,
    title: "Experiencia de Cliente con IA",
    desc: "Contact Center Inteligente potenciado por Cally IA. Automatización de interacciones, agendamiento y soporte omnicanal.",
    details: ["Cally IA Generativa", "Omnicanalidad", "Contexto CRM"],
    images: ["/assets/apps/ai_cally_login.png", "/assets/apps/ai_cally_chat.png"]
  },
  {
    icon: BarChart3,
    title: "Transformación Digital",
    desc: "Desarrollo de portales, tableros de BI y soluciones de automatización a medida para transformar datos en activos estratégicos.",
    details: ["Dashboards en Tiempo Real", "Automatización de Procesos", "Modelos Escalables"],
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
    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-xl">
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
      <div className="flex-1 flex flex-col justify-center px-16 z-20">
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-8"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">Soluciones 360 Integrales</p>
          <h2 className="text-6xl font-black text-white leading-tight">Servicios <span className="text-gradient-green">Estratégicos</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-6 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-all group overflow-hidden relative flex flex-col h-full"
            >
              <div className="relative z-10 flex flex-col gap-5 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-all">
                    <service.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight leading-tight">{service.title}</h3>
                </div>
                
                <p className="text-sm text-white/50 font-light leading-relaxed min-h-[3rem]">
                  {service.desc}
                </p>
                
                <div className="mt-auto space-y-5">
                  <ScreenshotCarousel images={service.images || [service.image!]} />

                  <div className="flex flex-wrap gap-2">
                    {service.details.map((detail) => (
                      <span key={detail} className="text-[9px] px-2 py-0.5 rounded-md bg-emerald-500/5 border border-emerald-500/10 text-emerald-400/70 uppercase font-bold tracking-wider">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3Services;
