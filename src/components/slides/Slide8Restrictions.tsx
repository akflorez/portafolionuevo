import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { staggerContainer, fadeUp } from "./animations";
import { AlertOctagon, XCircle, FileWarning, Palette, CalendarX, ListX } from "lucide-react";

const restrictions = [
  { icon: FileWarning, text: "No se puede cambiar el nombre de las columnas." },
  { icon: Palette, text: "No se pueden cambiar los colores que ya están." },
  { icon: CalendarX, text: "No se puede utilizar un formato de fecha diferente." },
  { icon: ListX, text: "No se puede colocar tipificaciones distintas a las listas desplegables." },
  { icon: XCircle, text: "No se puede colocar 'Cumple un Acuerdo' si solamente se ha pagado capital o si la columna de valor cancelado está en cero." },
];

const Slide8Restrictions = () => (
  <SlideLayout bgImage={""} overlayStrong>
    <motion.div
      className="flex-1 flex flex-col justify-center items-center px-20 relative w-full h-full"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div 
        className="w-24 h-24 rounded-2xl bg-destructive/20 flex items-center justify-center mb-8 border border-destructive/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
        variants={fadeUp}
      >
        <AlertOctagon className="w-12 h-12 text-destructive" />
      </motion.div>

      <motion.h2 className="text-6xl font-extrabold text-primary-foreground mb-12 text-center" variants={fadeUp}>
        Restricciones del <span className="text-destructive">Formato</span>
      </motion.h2>

      <motion.div className="grid grid-cols-1 gap-4 w-full max-w-4xl" variants={staggerContainer}>
        {restrictions.map((item, i) => (
          <motion.div 
            key={i} 
            className="flex items-center gap-6 bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            variants={fadeUp}
          >
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
              <item.icon className="w-6 h-6 text-destructive" />
            </div>
            <p className="text-xl text-primary-foreground/90 font-medium leading-tight">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p className="mt-12 text-sm text-primary-foreground/40 uppercase tracking-[0.3em] font-semibold" variants={fadeUp}>
        Cumplimiento Obligatorio
      </motion.p>
    </motion.div>
  </SlideLayout>
);

export default Slide8Restrictions;
