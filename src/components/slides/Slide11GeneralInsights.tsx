import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { fnaAgents, calculateAgentAverages } from "../../data/fnaData";

const Slide11GeneralInsights = () => {
  const agentsWithAverages = fnaAgents.map(a => ({ ...a, ...calculateAgentAverages(a) }));
  
  const bestHon = [...agentsWithAverages].sort((a, b) => b.totalHonorarios - a.totalHonorarios)[0];
  const bestCuentas = [...agentsWithAverages].sort((a, b) => b.totalCuentas - a.totalCuentas)[0];
  
  const differences = "Existen variaciones importantes entre volumen de recuperación (cuentas) y generación de honorarios. Algunos agentes logran alta recuperación en cuentas pero generan un ticket de honorario menor en promedio, revelando una oportunidad clara de optimizar los honorarios por cuenta cerrada.";

  return (
    <SlideLayout bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-24 z-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-l-4 border-blue-500 pl-6"
        >
          <h2 className="text-5xl font-black text-white">Conclusiones Generales</h2>
          <h3 className="text-2xl text-blue-300 font-light mt-2 uppercase tracking-widest">Síntesis Analítica FNA</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <span className="material-symbols-outlined text-4xl text-yellow-400 mb-4 block">star</span>
            <p className="text-gray-300 font-bold uppercase text-xs tracking-widest mb-2">Líder en Honorarios</p>
            <p className="text-xl text-white font-medium mb-4">{bestHon.name}</p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">Demuestra la mayor efectividad en recaudos de alto valor, sosteniendo el mejor promedio de honorarios.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <span className="material-symbols-outlined text-4xl text-emerald-400 mb-4 block">trending_up</span>
            <p className="text-gray-300 font-bold uppercase text-xs tracking-widest mb-2">Líder en Cuentas</p>
            <p className="text-xl text-white font-medium mb-4">{bestCuentas.name}</p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">Mayor volumen de recuperación operativa, asegurando el saneamiento continuo del portafolio del usuario.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-900/40 backdrop-blur-md rounded-2xl p-8 border border-blue-500/40"
          >
            <span className="material-symbols-outlined text-4xl text-blue-400 mb-4 block">lightbulb</span>
            <p className="text-blue-300 font-bold uppercase text-xs tracking-widest mb-2">Oportunidad de Negocio</p>
            <p className="text-xl text-white font-medium mb-4">Optimización de Cierre</p>
            <p className="text-sm text-blue-100/70 leading-relaxed font-light">Se detecta una oportunidad clave para equiparar la alta volumetría de cuentas con estrategias de recaudo de mayor impacto monetario.</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl text-gray-200 font-light italic text-center max-w-4xl mx-auto border-t border-white/10 pt-8"
        >
          "{differences}"
        </motion.p>
      </div>
    </SlideLayout>
  );
};

export default Slide11GeneralInsights;
