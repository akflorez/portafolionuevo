import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { fnaAgents, calculateAgentAverages } from "../../data/fnaData";

const formatMoney = (val: number) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);
};

const Slide10Rankings = () => {
  const agentsWithAverages = fnaAgents.map(a => ({ ...a, ...calculateAgentAverages(a) }));
  
  const rankHonorarios = [...agentsWithAverages].sort((a, b) => b.totalHonorarios - a.totalHonorarios).slice(0, 3);
  const rankCuentas = [...agentsWithAverages].sort((a, b) => b.totalCuentas - a.totalCuentas).slice(0, 3);

  return (
    <SlideLayout bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-16 z-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-6xl mb-4">🏆</span>
          <h2 className="text-5xl font-black text-white">Ranking de Honorarios y Cuentas</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-16">
          {/* Rank Honorarios */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold tracking-widest text-yellow-400 uppercase text-center mb-8">Mejores 3 Honorarios Generados</h3>
            <div className="flex flex-col gap-4">
              {rankHonorarios.map((agent, idx) => (
                <div key={agent.id} className="flex items-center gap-6 bg-white/5 rounded-2xl p-4 border border-white/5 relative overflow-hidden group hover:bg-white/10 transition-colors">
                  {idx === 0 && <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-500/20 to-transparent"></div>}
                  <div className="w-12 h-12 rounded-full border-2 border-yellow-500 overflow-hidden shrink-0">
                    <img src={agent.photoUrl} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg leading-tight">{agent.name}</h4>
                    <span className="text-xs text-yellow-500 font-bold uppercase tracking-wider">#{idx + 1}</span>
                  </div>
                  <p className="text-2xl font-black text-white">{formatMoney(agent.totalHonorarios)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rank Cuentas */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold tracking-widest text-emerald-400 uppercase text-center mb-8">Mejores 3 Cuentas Recuperadas</h3>
            <div className="flex flex-col gap-4">
              {rankCuentas.map((agent, idx) => (
                <div key={agent.id} className="flex items-center gap-6 bg-white/5 rounded-2xl p-4 border border-white/5 relative overflow-hidden group hover:bg-white/10 transition-colors">
                  {idx === 0 && <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-500/20 to-transparent"></div>}
                  <div className="w-12 h-12 rounded-full border-2 border-emerald-500 overflow-hidden shrink-0">
                    <img src={agent.photoUrl} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg leading-tight">{agent.name}</h4>
                    <span className="text-xs text-emerald-500 font-bold uppercase tracking-wider">#{idx + 1}</span>
                  </div>
                  <p className="text-3xl font-black text-white">{agent.totalCuentas}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10Rankings;
