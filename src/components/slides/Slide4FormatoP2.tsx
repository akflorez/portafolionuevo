import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide4Bg from "@/assets/slide4-contact.jpg";
import { List, CheckCircle, Percent, DollarSign, Wallet } from "lucide-react";
import { staggerContainer, fadeUp } from "./animations";

const steps = [
  { icon: List, title: "Tipo de Acuerdo", desc: "Seleccionar la tipificación correcta de la lista desplegable." },
  { icon: CheckCircle, title: "Efectividad", desc: "En caso de que el acuerdo NO sea para el mismo día, seleccionar 'Pendiente' en la lista desplegable." },
  { icon: Percent, title: "Descuento", desc: "Indicar 'Sí' o 'No' según corresponda al acuerdo." },
  { icon: DollarSign, title: "Monto del Acuerdo", desc: "Valor exacto por el cual se hizo el acuerdo con el cliente." },
  { icon: Wallet, title: "Valor Cancelado", desc: "Llenar SÓLO cuando el cliente lo cancele. Si no, dejar en blanco." }
];

const Slide4FormatoP2 = () => (
  <SlideLayout bgImage={slide4Bg} overlayStrong>
    <motion.div className="flex-1 flex flex-col justify-center px-20 py-10" variants={staggerContainer} initial="hidden" animate="show">
      <motion.p className="text-primary font-semibold text-lg uppercase tracking-[0.3em] mb-4" variants={fadeUp}>Paso a Paso</motion.p>
      <motion.h2 className="text-7xl font-extrabold text-primary-foreground mb-12" variants={fadeUp}>Condiciones del <span className="text-gradient-green">Acuerdo</span></motion.h2>
      
      <div className="flex flex-col gap-5">
        {steps.map((step) => (
          <motion.div key={step.title} className="card-glass rounded-xl p-6 flex flex-row items-center gap-6 cursor-pointer hover:bg-primary/5 transition-colors border border-white/5" variants={fadeUp}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary-foreground mb-1">{step.title}</h3>
              <p className="text-lg font-light text-primary-foreground/50">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </SlideLayout>
);

export default Slide4FormatoP2;
