import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide4Bg from "@/assets/slide4-contact.jpg";
import { UserCheck, Users } from "lucide-react";
import { staggerContainer, fadeLeft } from "./animations";

const Slide4Contact = () => (
  <SlideLayout bgImage={slide4Bg} overlayStrong>
    <motion.div className="flex-1 flex flex-col justify-center px-20" variants={staggerContainer} initial="hidden" animate="show">
      <motion.div className="flex items-center gap-4 mb-4" variants={fadeLeft}>
        <span className="text-sm font-bold text-noir-foreground bg-primary/20 px-4 py-1.5 rounded-full border-glow">PASO 2</span>
      </motion.div>
      <motion.h2 className="text-5xl font-bold text-primary-foreground mb-4" variants={fadeLeft}>Contacto</motion.h2>
      <motion.p className="text-xl text-primary-foreground/60 mb-16 font-light max-w-xl" variants={fadeLeft}>
        Registra con quién se sostuvo la gestión.
      </motion.p>
      <motion.div className="flex gap-8 max-w-3xl" variants={staggerContainer}>
        <motion.div className="card-glass-strong rounded-2xl p-10 flex-1 flex flex-col items-center text-center gap-5 glow-green" variants={fadeLeft}>
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
            <UserCheck className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary-foreground">Directo</h3>
          <p className="text-primary-foreground/50 font-light">Contacto con el titular de la obligación</p>
        </motion.div>
        <motion.div className="card-glass rounded-2xl p-10 flex-1 flex flex-col items-center text-center gap-5" variants={fadeLeft}>
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Users className="w-10 h-10 text-primary/70" />
          </div>
          <h3 className="text-2xl font-bold text-primary-foreground">Indirecto</h3>
          <p className="text-primary-foreground/50 font-light">Contacto con un tercero o referencia</p>
        </motion.div>
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide4Contact;
