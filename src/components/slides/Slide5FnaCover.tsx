import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";

const Slide5FnaCover = () => {
  return (
    <SlideLayout bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-block bg-blue-500/20 backdrop-blur-md px-6 py-2 rounded-full border border-blue-400/50 mb-8">
            <span className="text-blue-200 font-semibold tracking-widest uppercase text-sm">
              Analítica de Rendimiento
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-6">
            Portafolio FNA
          </h1>
          <h2 className="text-3xl text-gray-300 font-light tracking-wide uppercase">
            Resultados y Desempeño Operativo
          </h2>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide5FnaCover;
