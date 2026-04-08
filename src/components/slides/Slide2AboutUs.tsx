import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";

const Slide2AboutUs = () => {
  return (
    <SlideLayout bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80" overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-20 z-20">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-10 drop-shadow-md flex items-center gap-4"
        >
          <div className="w-2 h-12 bg-emerald-500 rounded-sm"></div>
          Propósito Institucional
        </motion.h2>

        <div className="grid grid-cols-2 gap-12">
          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl text-emerald-300 font-semibold mb-4">Nuestra Esencia</h3>
              <p className="text-lg text-gray-200 font-light leading-relaxed">
                Actuamos con la firmeza del derecho, la precisión de la analítica 
                y la empatía de la atención humana. Protegemos el patrimonio de nuestros 
                clientes, fortalecemos sus relaciones comerciales y entregamos resultados 
                auditables.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl text-emerald-300 font-semibold mb-4">Quiénes Somos</h3>
              <p className="text-lg text-gray-200 font-light leading-relaxed">
                Empresa quindiana de Soluciones de Procesos de Negocio, con experiencia 
                desde 2009. Especializada en procesos críticos que requieren trazabilidad, 
                sensibilidad humana, precisión legal y resultados medibles.
              </p>
            </div>
          </motion.div>

          {/* Foto de los dueños */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden w-full">
              <div className="w-full h-72 overflow-hidden">
                <img 
                  src="https://img.genially.com/68fa7f26a64382001e8321a5/7d907deb-ef94-4307-bbc2-db906d506a1a.jpeg" 
                  alt="Equipo Directivo EMDECOB" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-emerald-300 font-semibold mb-2">Equipo Directivo</h3>
                <p className="text-gray-300 font-light text-lg italic">
                  "Más que gestión, acompañamos tu tranquilidad."
                </p>
                <p className="text-emerald-400 font-semibold mt-3 text-sm uppercase tracking-widest">
                  Armenia, Quindío · Desde 2009
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2AboutUs;
