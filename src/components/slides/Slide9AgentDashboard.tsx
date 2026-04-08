import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { fnaAgents, calculateAgentAverages, getAgentTrend, getAgentInsight } from "../../data/fnaData";

const formatMoney = (val: number) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);
};

const Slide9AgentDashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextAgent = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % fnaAgents.length);
  }, []);

  const prevAgent = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + fnaAgents.length) % fnaAgents.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextAgent();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextAgent]);

  const agent = fnaAgents[currentIndex];
  const avgs = calculateAgentAverages(agent);
  const trend = getAgentTrend(agent);
  const insight = getAgentInsight(agent);

  return (
    <SlideLayout bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" overlayStrong>
      <div 
        className="flex-1 flex flex-col pt-20 px-16 z-20 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.h2 
          className="text-4xl font-bold text-white mb-8 drop-shadow-md border-l-4 border-blue-500 pl-4"
        >
          Análisis Individual por Agente
        </motion.h2>

        {/* Flechas para navegar agentes */}
        <button
          onClick={prevAgent}
          className="absolute left-4 top-[40%] z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
          aria-label="Anterior"
        >
          <span className="material-symbols-outlined text-2xl">chevron_left</span>
        </button>
        <button
          onClick={nextAgent}
          className="absolute right-4 top-[40%] z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
          aria-label="Siguiente"
        >
          <span className="material-symbols-outlined text-2xl">chevron_right</span>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex gap-12"
          >
            {/* Izquierda: Perfil y Foto */}
            <div className="w-1/3 flex flex-col gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col items-center shadow-lg relative overflow-hidden">
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-600 to-blue-300 p-1 relative mb-6">
                  <img src={agent.photoUrl} alt={agent.name} className="w-full h-full rounded-full object-cover border-4 border-[#0b132b]" />
                </div>
                <h3 className="text-2xl font-bold text-white text-center">{agent.name}</h3>
                <div className="mt-4 bg-blue-500/20 w-full py-2 rounded-lg text-center border border-blue-500/30">
                  <span className="text-blue-300 font-semibold tracking-wide">
                    {trend}
                  </span>
                </div>
              </div>
              
              <div className="bg-emerald-900/30 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 shadow-lg">
                <h4 className="text-sm uppercase text-gray-400 font-bold mb-2 flex items-center gap-2">
                  🧠 Análisis Ejecutivo
                </h4>
                <p className="text-emerald-100 font-light text-lg italic leading-relaxed">
                  "{insight}"
                </p>
              </div>
            </div>

            {/* Derecha: Métricas y Promedios */}
            <div className="w-2/3 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="text-gray-400 font-semibold uppercase tracking-widest text-sm mb-2">Promedio Honorarios</h4>
                  <p className="text-4xl font-bold text-white">{formatMoney(avgs.avgHonorarios)}</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="text-gray-400 font-semibold uppercase tracking-widest text-sm mb-2">Promedio Cuentas</h4>
                  <p className="text-4xl font-bold text-white">{Math.round(avgs.avgCuentas)} recuperadas</p>
                </div>
              </div>

              {/* Desglose mensual */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex-1 mt-2">
                <h4 className="text-gray-400 font-semibold uppercase tracking-widest text-sm mb-6">Histórico Mensual</h4>
                <div className="grid grid-cols-3 gap-8">
                  {['diciembre', 'enero', 'febrero'].map((month) => {
                    const data = agent.months[month as keyof typeof agent.months];
                    return (
                      <div key={month} className="flex flex-col gap-2">
                        <span className="uppercase text-blue-300 font-bold tracking-wide">{month}</span>
                        <p className="text-2xl text-white font-medium">{formatMoney(data.honorarios)}</p>
                        <p className="text-gray-400">{data.cuentas} cuentas</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
          </motion.div>
        </AnimatePresence>

        {/* Indicadores de progreso de agentes */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
          {fnaAgents.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'}`} 
            />
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide9AgentDashboard;
