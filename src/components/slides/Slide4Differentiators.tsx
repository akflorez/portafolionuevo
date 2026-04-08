import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Heart, BarChart3, Handshake, History, Scale, Building2 } from "lucide-react";
import differentiatorBg from "@/assets/slide3-channels.jpg"; // Reusing a professional background

const differentiators = [
  {
    icon: Heart,
    title: "Humanización",
    desc: "Cobranza con dignidad y trato ético, priorizando la sensibilidad humana en cada contacto."
  },
  {
    icon: BarChart3,
    title: "Decisión basada en Datos",
    desc: "Uso de analítica avanzada e indicadores en tiempo real para optimizar la estrategia."
  },
  {
    icon: Handshake,
    title: "Socio Estratégico",
    desc: "Acompañamiento integral y consultoría para el crecimiento sostenido de nuestros clientes."
  },
  {
    icon: History,
    title: "Trayectoria",
    desc: "Experiencia sólida desde 2009 en servicios BPS y recuperación de cartera nacional."
  },
  {
    icon: Scale,
    title: "Respaldo Jurídico",
    desc: "Soporte legal especializado para garantizar procesos seguros, firmes y transparentes."
  },
  {
    icon: Building2,
    title: "Propiedad Horizontal",
    desc: "Especialidad en gestión de copropiedades con alta efectividad y trato conciliador."
  }
];

const Slide4Differentiators = () => {
  return (
    <SlideLayout bgImage={differentiatorBg} overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-16 z-20">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-12 text-center"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">¿Por qué elegirnos?</p>
          <h2 className="text-7xl font-black text-white">Nuestros <span className="text-gradient-green">Diferenciadores</span></h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
                  <item.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide4Differentiators;
