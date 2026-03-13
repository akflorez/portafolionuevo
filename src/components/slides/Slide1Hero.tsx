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
        className="h-28 mb-12 brightness-0 invert"
        variants={fadeUp}
      />
      <motion.div className="w-24 h-1.5 bg-primary rounded-full mb-10" variants={fadeUp} />
      <motion.h1
        className="text-8xl font-extrabold tracking-tight text-primary-foreground leading-tight mb-8"
        variants={fadeUp}
      >
        TIPIFICACIÓN DE{" "}
        <span className="text-gradient-green">GESTIONES EN CRM</span>
      </motion.h1>
      <motion.p className="text-3xl font-light text-primary-foreground/70 max-w-4xl leading-relaxed" variants={fadeUp}>
        Registro claro, trazable y estratégico para una gestión efectiva
      </motion.p>
      <motion.div className="mt-14 flex items-center gap-4" variants={fadeUp}>
        <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
        <span className="text-lg font-medium text-primary-foreground/50 uppercase tracking-widest">
          Capacitación corporativa
        </span>
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide1Hero;
