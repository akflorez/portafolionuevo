import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Cpu, CheckCircle2, Zap, BarChart3, AppWindow } from "lucide-react";
import channelsBg from "@/assets/slide3-channels.jpg";

const digitalServices = [
  {
    title: "Portales de Analítica & BI",
    items: ["Tableros de Control Real-time", "Modelado de Datos (Power BI)", "Analítica Predictiva de Recaudo"]
  },
  {
    title: "Cally IA: Ecosistema Conversacional",
    items: ["Agentes Virtuales Generativos", "Integración Omnicanal (WhatsApp)", "Contexto Dinámico CRM"]
  },
  {
    title: "Automatización & RPA",
    items: ["Robots de Consulta Judicial", "Automatización de Procesos Operativos", "Escalabilidad Tecnológica"]
  }
];

const appImages = [
  "/assets/apps/bi_dashboard.png",
  "/assets/apps/legal_login.png",
  "/assets/apps/legal_dashboard.png",
  "/assets/apps/ai_cally_login.png",
  "/assets/apps/ai_cally_chat.png"
];

const ScreenshotCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % appImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-noir/20 group">
      <AnimatePresence mode="wait">
        <motion.img
          key={appImages[index]}
          src={appImages[index]}
          alt="EMDECOB App"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full object-contain bg-noir/40"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-1.5 rounded-full bg-noir/60 backdrop-blur-xl border border-white/10">
        {appImages.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'bg-emerald-400 w-6' : 'bg-white/20 w-1.5'}`} 
          />
        ))}
      </div>
    </div>
  );
};

const Slide3ServicesDigital = () => {
  return (
    <SlideLayout bgImage={channelsBg} overlayStrong>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-16 gap-16 z-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-7"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/10 border border-emerald-500/20">
                <Cpu className="w-7 h-7 text-emerald-500" />
              </div>
              <p className="text-emerald-500 font-black uppercase tracking-[0.4em] text-xs">El Motor de Innovación</p>
            </div>
            <h2 className="text-8xl font-black text-white leading-[0.8] mb-6 tracking-tighter">
              Transformación <br />
              <span className="text-gradient-green">Digital & Datos</span>
            </h2>
            <p className="text-xl text-white/50 font-light max-w-2xl leading-relaxed">
              Convertimos los datos en una ventaja competitiva diferencial con soluciones enfocadas en la eficiencia y escalabilidad.
            </p>
          </div>

          <div className="space-y-5">
            {digitalServices.map((service, sIndex) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sIndex * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-7 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase tracking-widest">{service.title}</h3>
                </div>
                <div className="grid grid-cols-1 gap-1.5 pl-6">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-4 group">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500/60 group-hover:text-emerald-500 transition-colors" />
                      <span className="text-lg text-white/60 group-hover:text-white transition-colors font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1 w-full max-w-5xl"
        >
          <div className="relative scale-110 origin-right">
             <ScreenshotCarousel />
             
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -right-4 p-7 card-glass border border-emerald-500/40 rounded-[2.5rem] shadow-2xl flex items-center gap-7 backdrop-blur-3xl z-30"
             >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-emerald-500/20">
                  <BarChart3 className="text-noir w-8 h-8" />
                </div>
                <div>
                   <p className="text-xs text-emerald-400 font-black uppercase tracking-[0.3em] mb-1">Analytics AI</p>
                   <p className="text-2xl font-black text-white">Ecosistema Cloud</p>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesDigital;
