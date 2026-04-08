import { motion } from "framer-motion";
import heroImage from "@/assets/slide1-hero.jpg";

const Slide1EmdecobCover = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-noir">
      {/* Imagen de fondo corporativa original */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-noir/20 via-noir/60 to-noir"></div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          {/* Logo de EMDECOB con efecto de respiración */}
          <motion.img
            src="/emdecob-logo-blanco.png"
            alt="Logo EMDECOB"
            className="w-56 h-56 object-contain mb-12 drop-shadow-[0_0_50px_rgba(16,185,129,0.3)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              type: "spring",
              bounce: 0.4
            }}
          />

          <motion.h1 
            className="text-9xl font-black tracking-tighter text-white mb-6"
            style={{ textShadow: "0 0-40px rgba(16,185,129,0.5)" }}
          >
            EMDECOB
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 bg-emerald-500 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-2xl text-emerald-400 font-bold uppercase"
          >
            Tu aliado estratégico en tercerización de servicios
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide1EmdecobCover;
