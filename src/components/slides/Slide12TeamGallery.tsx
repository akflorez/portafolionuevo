import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { fnaAgents, calculateAgentAverages } from "../../data/fnaData";

const formatMoney = (val: number) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);
};

const Slide12TeamGallery = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedAgent = selectedId ? fnaAgents.find(a => a.id === selectedId) : null;
  const agentAvgs = selectedAgent ? calculateAgentAverages(selectedAgent) : null;

  return (
    <SlideLayout bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80" overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-12 z-20 pt-28 pb-10">
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h2 className="text-5xl font-black text-white">Nuestro Equipo FNA</h2>
            <p className="text-xl text-emerald-200 font-light mt-2 uppercase tracking-widest">Selecciona un perfil para ver detalles</p>
          </div>
        </motion.div>

        <div className="flex gap-8 items-start mb-8">
          {/* Galería (Izquierda - 35%) */}
          <div className="w-[35%] grid grid-cols-3 gap-4 content-start">
            {fnaAgents.map((agent, idx) => (
              <motion.button
                key={agent.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.06 }}
                onClick={() => setSelectedId(agent.id)}
                className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 aspect-square object-cover ${
                  selectedId === agent.id 
                    ? 'border-emerald-400 scale-105 shadow-[0_0_20px_rgba(16,185,129,0.8)] z-10' 
                    : 'border-white/20 hover:border-white/50 hover:scale-105 hover:z-20'
                }`}
              >
                <img src={agent.photoUrl} alt={agent.name} className="w-full h-full object-cover object-top" />
                {agent.isNew && (
                  <div className="absolute top-1 right-1 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                    NUEVA
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2">
                  <span className="text-white text-[11px] font-bold text-center leading-tight drop-shadow-md">{agent.name}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Panel de detalle (Derecha - 65%) */}
          <div className="w-[65%]">
            <AnimatePresence mode="wait">
              {selectedAgent && agentAvgs ? (
                <motion.div
                  key={selectedAgent.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-[#0f1f3a]/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col justify-start gap-4 relative overflow-hidden"
                >
                  {/* Decoración de fondo */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                  {/* Header con foto y nombre */}
                  <div className="flex items-center gap-6 pb-4 border-b border-white/10 relative z-10">
                    <div className="w-28 h-28 rounded-full border-4 border-emerald-400 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.5)] shrink-0 bg-black">
                      <img src={selectedAgent.photoUrl} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl font-black text-white mb-2 drop-shadow-md">{selectedAgent.name}</h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-base font-semibold border border-emerald-500/30">
                          Ejecutivo/a
                        </span>
                        {selectedAgent.isNew && (
                          <span className="bg-yellow-500/20 text-yellow-300 px-4 py-1.5 rounded-full text-base font-bold border border-yellow-500/30 animate-pulse">
                            🌟 NUEVA INCORPORACIÓN
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Info: Fecha + Observación */}
                  <div className="grid grid-cols-2 gap-5 relative z-10">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner">
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1 flex items-center gap-2">
                        <span>📅</span> Fecha de Ingreso
                      </p>
                      <p className="text-white font-bold text-2xl">{selectedAgent.ingreso}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-inner">
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1 flex items-center gap-2">
                        <span>📝</span> Observación
                      </p>
                      <p className="text-emerald-300 font-medium text-base leading-snug">{selectedAgent.nota}</p>
                    </div>
                  </div>

                  {/* Métricas GIGANTES */}
                  <div className="grid grid-cols-2 gap-5 relative z-10 border-2 border-emerald-500/20 p-5 rounded-2xl bg-black/20 my-2">
                    <div className="text-center">
                      <p className="text-emerald-400 text-xs uppercase tracking-widest font-bold mb-2 flex items-center justify-center gap-2">
                        <span>💰</span> {selectedAgent.isNew ? "HONORARIOS MARZO" : "PROMEDIO HONORARIOS"}
                      </p>
                      <p className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                        {formatMoney(agentAvgs.avgHonorarios)}
                      </p>
                    </div>
                    
                    <div className="w-px h-full bg-emerald-500/20 mx-auto"></div>

                    <div className="text-center absolute right-[15%] top-5">
                      <p className="text-blue-400 text-xs uppercase tracking-widest font-bold mb-2 flex items-center justify-center gap-2">
                        <span>✅</span> {selectedAgent.isNew ? "CUENTAS MARZO" : "PROMEDIO CUENTAS"}
                      </p>
                      <p className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        {Math.round(agentAvgs.avgCuentas)}
                      </p>
                    </div>
                  </div>

                  {/* Portafolio FNA - GRANDE */}
                  <div className="bg-gradient-to-r from-emerald-900/40 to-[#0f1f3a]/40 border border-emerald-500/30 rounded-xl p-5 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">📋</span>
                      <p className="text-emerald-300 text-xs uppercase tracking-widest font-black">Portafolio FNA – Gestión y Recuperación</p>
                    </div>
                    <p className="text-gray-200 text-base font-light leading-relaxed">
                      {selectedAgent.isNew 
                        ? "En proceso de adaptación y formación. Los datos corresponden únicamente al mes de marzo 2026."
                        : "Portafolio orientado a la gestión y recuperación de cartera a través del mecanismo de garantía mobiliaria, enfocado en la optimización de resultados financieros y el cumplimiento de objetivos extratégicos. Su propósito principal es maximizar la recuperación de capital, así como asegurar el recaudo de honorarios asociados al proceso de gestión."
                      }
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 shadow-inner h-full flex flex-col items-center justify-center text-center"
                >
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-8xl mb-8 opacity-50"
                  >
                    👆
                  </motion.div>
                  <h3 className="text-4xl text-white font-bold mb-4 drop-shadow-md">Toca una foto</h3>
                  <p className="text-emerald-200 font-light text-2xl max-w-lg leading-relaxed">
                    Selecciona a un miembro del equipo en la galería para ver su perfil completo y métricas detalladas.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide12TeamGallery;
