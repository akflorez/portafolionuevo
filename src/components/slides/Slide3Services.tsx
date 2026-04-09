import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, MessageSquare, Scale } from "lucide-react";
import channelsBg from "@/assets/slide3-channels.jpg";

const services = [
  {
    icon: Scale,
    title: "Gestión Legal & Procesal",
    desc: "Plataforma integral para el seguimiento de procesos ante la Rama Judicial. Automatización de consultas y validaciones masivas.",
    details: ["Validación de Procesos", "Filtros de Búsqueda Avanzados", "Control de Estados en Tiempo Real"],
    link: "https://consultasjuridicas.emdecob.com/",
    linkText: "Explorar Aplicativo Legal",
    images: ["/assets/apps/legal_login.png", "/assets/apps/legal_dashboard.png"]
  },
  {
    icon: MessageSquare,
    title: "Inteligencia Conversacional IA",
    desc: "Cally: Asistente virtual para la gestión de leads, cobranza y atención al cliente integrada con WhatsApp y CRM.",
    details: ["Chatbots con IA Generativa", "Contexto CRM Integrado", "Omnicanalidad Eficiente"],
    link: "https://cally.emdecob.com/",
    linkText: "Ver Cally IA",
    images: ["/assets/apps/ai_cally_login.png", "/assets/apps/ai_cally_chat.png"]
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
    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-xl group/img">
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
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full bg-noir/40 backdrop-blur-md border border-white/10">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-emerald-400 w-4' : 'bg-white/30'}`} 
          />
        ))}
      </div>
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
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">Transformación Digital en Acción</p>
          <h2 className="text-6xl font-black text-white">Nuestros <span className="text-gradient-green">Aplicativos</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-7 rounded-[2.5rem] border border-white/10 hover:border-emerald-500/30 transition-all group overflow-hidden relative"
            >
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-all">
                    <service.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors tracking-tight">{service.title}</h3>
                    <p className="text-sm text-white/50 font-light leading-relaxed mb-4">{service.desc}</p>
                  </div>
                </div>
                
                <ScreenshotCarousel images={service.images} />

                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-wrap gap-2">
                    {service.details.map((detail) => (
                      <span key={detail} className="text-[10px] px-2.5 py-1 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400/80 uppercase font-bold tracking-wider">
                        {detail}
                      </span>
                    ))}
                  </div>
                  
                  {service.link && (
                    <motion.a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-noir text-xs font-bold hover:bg-emerald-400 transition-all shadow-lg"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      {service.linkText}
                    </motion.a>
                  )}
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
