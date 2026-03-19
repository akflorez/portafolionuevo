import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide3Bg from "@/assets/slide3-channels.jpg";
import { Folder, Calendar, User, Hash } from "lucide-react";
import { staggerContainer, fadeUp } from "./animations";

const steps = [
  { icon: Folder, title: "Portafolio", desc: "Seleccionar el portafolio correspondiente de la lista desplegable." },
  { icon: Calendar, title: "Fecha Gestión y Promesa", desc: "La fecha de promesa NO puede ser inferior a la fecha de gestión." },
  { icon: User, title: "Ejecutivo", desc: "Seleccionar el nombre del agente de la lista desplegable." },
  { icon: Hash, title: "Número de Obligación", desc: "Obligatorio para identificar correctamente el caso." }
];

const Slide3FormatoP1 = () => (
  <SlideLayout bgImage={slide3Bg}>
    <motion.div className="flex-1 flex flex-col justify-center px-20" variants={staggerContainer} initial="hidden" animate="show">
      <motion.p className="text-primary font-semibold text-lg uppercase tracking-[0.3em] mb-4" variants={fadeUp}>Paso a Paso</motion.p>
      <motion.h2 className="text-7xl font-extrabold text-primary-foreground mb-12" variants={fadeUp}>Columnas <span className="text-gradient-green">Iniciales</span></motion.h2>
      
      <div className="grid grid-cols-2 gap-8">
        {steps.map((step) => (
          <motion.div key={step.title} className="card-glass rounded-2xl p-8 flex items-start gap-6" variants={fadeUp}>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">{step.title}</h3>
              <p className="text-lg font-light text-primary-foreground/60 leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </SlideLayout>
);

export default Slide3FormatoP1;
