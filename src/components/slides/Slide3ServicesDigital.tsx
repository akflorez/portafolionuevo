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
    <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-noir/20 group">
      <AnimatePresence mode="wait">
        <motion.img
          key={appImages[index]}
          src={appImages[index]}
          alt="EMDECOB App"
          initial={{ opacity: 0, scale: 1.05, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.95, rotate: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent"></div>
      
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
          className="flex-1 space-y-10"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <Cpu className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-sm">El Motor de Innovación</p>
            </div>
            <h2 className="text-7xl font-black text-white leading-tight mb-6">
              Transformación <br />
              <span className="text-gradient-green">Digital & Datos</span>
            </h2>
            <p className="text-xl text-white/50 font-light max-w-xl leading-relaxed">
              Convertimos los datos en una ventaja competitiva diferencial. Soluciones tecnológicas enfocadas en la eficiencia, escalabilidad y resultados tangibles.
            </p>
          </div>

          <div className="space-y-8">
            {digitalServices.map((service, sIndex) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sIndex * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-6 bg-emerald-500 rounded-full" />
                  <h3 className="text-xl font-bold text-white tracking-tight">{service.title}</h3>
                </div>
                <div className="grid grid-cols-1 gap-1.5 pl-5">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/60" />
                      <span className="text-sm text-white/60">{item}</span>
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
          className="flex-1 w-full max-w-2xl"
        >
          <div className="relative">
             <ScreenshotCarousel />
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-8 -right-8 p-6 card-glass border border-emerald-500/20 rounded-3xl shadow-2xl flex items-center gap-4"
             >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg">
                  <BarChart3 className="text-noir w-6 h-6" />
                </div>
                <div>
                   <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Analytics AI</p>
                   <p className="text-lg font-bold text-white">Cloud Ecosystem</p>
                </div>
             </motion.div>
             
             {/* Tech Stack Decoration */}
             <div className="absolute -bottom-10 -left-10 flex gap-3">
                <div className="w-12 h-12 rounded-xl bg-noir/80 border border-white/10 flex items-center justify-center shadow-xl">
                    <Zap className="text-emerald-500 w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-noir/80 border border-white/10 flex items-center justify-center shadow-xl">
                    <AppWindow className="text-emerald-500 w-5 h-5" />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesDigital;
