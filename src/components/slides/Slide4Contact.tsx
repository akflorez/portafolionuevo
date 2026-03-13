import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide4Bg from "@/assets/slide4-contact.jpg";
import { UserCheck, Users } from "lucide-react";
import { staggerContainer, fadeLeft } from "./animations";

const Slide4Contact = () => (
  <SlideLayout bgImage={slide4Bg} overlayStrong>
    <motion.div className="flex-1 flex flex-col justify-center px-20" variants={staggerContainer} initial="hidden" animate="show">
      <motion.div className="flex items-center gap-4 mb-5" variants={fadeLeft}>
        <span className="text-lg font-bold text-noir-foreground bg-primary/20 px-5 py-2 rounded-full border-glow">PASO 2</span>
      </motion.div>
      <motion.h2 className="text-7xl font-bold text-primary-foreground mb-5" variants={fadeLeft}>Contacto</motion.h2>
      <motion.p className="text-2xl text-primary-foreground/60 mb-16 font-light max-w-2xl" variants={fadeLeft}>
        Registra con quién se sostuvo la gestión.
      </motion.p>
      <motion.div className="flex gap-10 max-w-4xl" variants={staggerContainer}>
        <motion.div className="card-glass-strong rounded-2xl p-12 flex-1 flex flex-col items-center text-center gap-6 glow-green" variants={fadeLeft}>
          <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center">
            <UserCheck className="w-14 h-14 text-primary" />
          </div>
          <h3 className="text-3xl font-bold text-primary-foreground">Directo</h3>
          <p className="text-xl text-primary-foreground/50 font-light">Contacto con el titular de la obligación</p>
        </motion.div>
        <motion.div className="card-glass rounded-2xl p-12 flex-1 flex flex-col items-center text-center gap-6" variants={fadeLeft}>
          <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Users className="w-14 h-14 text-primary/70" />
          </div>
          <h3 className="text-3xl font-bold text-primary-foreground">Indirecto</h3>
          <p className="text-xl text-primary-foreground/50 font-light">Contacto con un tercero o referencia</p>
        </motion.div>
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide4Contact;
