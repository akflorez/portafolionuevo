import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide5Bg from "@/assets/slide5-profiles.jpg";
import { MessageCircle, Phone, Clock, FileCheck } from "lucide-react";
import { staggerContainer, fadeUp } from "./animations";

const profiles = [
  { icon: FileCheck, title: "Medio del Acuerdo", subtitle: "WhatsApp o Llamada", desc: "Es fundamental seleccionar por qué medio se logró el compromiso (esencial para la métrica de contactabilidad)." },
  { icon: Clock, title: "Días de Mora", subtitle: "Obligatorio", desc: "Cantidad de días que lleva el crédito en mora al momento de la gestión." },
  { icon: FileCheck, title: "Honorarios", subtitle: "Obligatorio", desc: "Gestión de cobro correspondiente según los días de mora." },
];

const Slide5FormatoP3 = () => (
  <SlideLayout bgImage={slide5Bg}>
    <motion.div className="flex-1 flex flex-col justify-center px-20" variants={staggerContainer} initial="hidden" animate="show">
      <motion.p className="text-primary font-semibold text-lg uppercase tracking-[0.3em] mb-4" variants={fadeUp}>Paso a Paso</motion.p>
      <motion.h2 className="text-7xl font-extrabold text-primary-foreground mb-16" variants={fadeUp}>Datos <span className="text-gradient-green">Finales</span></motion.h2>
      
      <div className="flex gap-8">
        {profiles.map((profile, i) => (
          <motion.div key={i} className="flex-1 card-glass rounded-2xl p-8 flex flex-col items-start gap-6 border-t-2 border-t-primary/50 hover:-translate-y-2 transition-transform duration-300" variants={fadeUp}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center glow-green">
              <profile.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-foreground mb-2">{profile.title}</h3>
              <p className="text-xl text-primary font-medium mb-4">{profile.subtitle}</p>
              <p className="text-lg font-light text-primary-foreground/50 leading-relaxed">{profile.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </SlideLayout>
);

export default Slide5FormatoP3;
