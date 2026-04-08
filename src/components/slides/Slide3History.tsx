import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Star, TrendingUp, Award, Clock } from "lucide-react";
import analysisBg from "@/assets/slide6-analysis.jpg";

const Slide3History = () => {
  const stats = [
    { icon: Clock, label: "Trayectoria", value: "+15 Años", suffix: "Desde 2009" },
    { icon: Star, label: "Especialización", value: "BPS", suffix: "Procesos Críticos" },
    { icon: Award, label: "Calidad", value: "100%", suffix: "Resultados Auditables" },
    { icon: TrendingUp, label: "Crecimiento", value: "Sostenido", suffix: "Mercado Nacional" }
  ];

  return (
    <SlideLayout bgImage={analysisBg}>
      <div className="flex-1 flex items-center px-20 gap-20">
        <motion.div 
          className="w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative group flex flex-col gap-6">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-2xl group-hover:bg-emerald-500/30 transition-all duration-500"></div>
            <img 
              src="/equipo-emdecob.png" 
              alt="Socios Fundadores EMDECOB" 
              className="relative rounded-2xl w-full h-auto object-contain border border-white/10"
            />
            <div className="relative card-glass p-6 rounded-2xl border border-white/10 shadow-xl">
              <p className="text-emerald-400 font-bold mb-2 uppercase tracking-tighter">Liderazgo y Propósito</p>
              <p className="text-white text-lg italic">"Nuestra misión es transformar procesos en soluciones precisas con un toque humano inigualable."</p>
            </div>
          </div>
        </motion.div>

        <div className="w-1/2 flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-500 font-bold uppercase tracking-widest mb-4"
          >
            Trayectoria y Experiencia
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl font-black text-white mb-8"
          >
            Conócenos
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-xl text-white font-bold leading-relaxed mb-12 drop-shadow-md"
          >
            <p>
              Somos una empresa quindiana de <span className="text-white font-bold italic">Business Process Services (BPS)</span>, 
              con experiencia sólida desde el 2009.
            </p>
            <p>
              Nos especializamos en procesos críticos que requieren trazabilidad exhaustiva, 
              sensibilidad humana y precisión absoluta. Nuestra estructura nos permite integrar 
              soluciones 360 para los retos más complejos del mercado actual.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <stat.icon className="w-10 h-10 text-emerald-500" />
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/40 uppercase tracking-tighter">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3History;
