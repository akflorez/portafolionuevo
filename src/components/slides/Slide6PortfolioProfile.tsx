import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";

const Slide6PortfolioProfile = () => {
  return (
    <SlideLayout bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-20 z-20">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-12 drop-shadow-md flex items-center gap-4"
        >
          <div className="w-2 h-12 bg-blue-500 rounded-sm"></div>
          Perfil del Portafolio
        </motion.h2>

        <div className="grid grid-cols-2 gap-12">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl text-gray-400 uppercase tracking-wider mb-2 text-sm font-semibold">Tipo de Cartera</h3>
              <p className="text-3xl text-white font-medium">Financiera Comercial</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-xl text-gray-400 uppercase tracking-wider mb-2 text-sm font-semibold">Comportamiento General</h3>
              <p className="text-lg text-gray-200 font-light leading-relaxed">
                Volumen transaccional medio-alto con tickets de honorarios en crecimiento sólido. 
                Adaptabilidad estacional marcada en Diciembre y Febrero.
              </p>
            </div>
          </motion.div>

          {/* Automagic Insight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-blue-900/40 backdrop-blur-xl border border-blue-500/30 p-10 rounded-3xl shadow-2xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <span className="material-symbols-outlined text-9xl">insights</span>
            </div>
            <h3 className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-6 relative z-10 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">auto_awesome</span>
              Insight Ejecutivo Automático
            </h3>
            
            <p className="text-3xl text-white font-light leading-snug relative z-10">
              “Portafolio enfocado fuertemente en recuperación, mostrando picos de alta productividad y una recuperación sostenida superior al promedio en febrero.”
            </p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide6PortfolioProfile;
