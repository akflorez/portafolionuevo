import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide1Bg from "@/assets/slide1-hero.jpg";
import logo from "@/assets/emdecob-logo.png";
import { staggerContainer, fadeUp } from "./animations";

const Slide1Hero = () => (
  <SlideLayout bgImage={slide1Bg}>
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-16 text-center"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.img
        src={logo}
        alt="EMDECOB"
        className="h-20 mb-10 brightness-0 invert"
        variants={fadeUp}
      />
      <motion.div className="w-20 h-1 bg-primary rounded-full mb-8" variants={fadeUp} />
      <motion.h1
        className="text-6xl font-extrabold tracking-tight text-primary-foreground leading-tight mb-6"
        variants={fadeUp}
      >
        TIPIFICACIÓN DE{" "}
        <span className="text-gradient-green">GESTIONES EN CRM</span>
      </motion.h1>
      <motion.p className="text-xl font-light text-primary-foreground/70 max-w-3xl leading-relaxed" variants={fadeUp}>
        Registro claro, trazable y estratégico para una gestión efectiva
      </motion.p>
      <motion.div className="mt-12 flex items-center gap-3" variants={fadeUp}>
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
        <span className="text-sm font-medium text-primary-foreground/50 uppercase tracking-widest">
          Capacitación corporativa
        </span>
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide1Hero;
