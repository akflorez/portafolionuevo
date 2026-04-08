import { motion } from "framer-motion";
import { globalFnaData } from "../../data/fnaData";

const formatMoney = (val: number) => {
  if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);
};

const Slide7GeneralSummary = () => {
  const { diciembre, enero, febrero } = globalFnaData;

  const months = [
    { name: "Diciembre", hon: diciembre.honorarios, cuentas: diciembre.cuentas },
    { name: "Enero", hon: enero.honorarios, cuentas: enero.cuentas },
    { name: "Febrero", hon: febrero.honorarios, cuentas: febrero.cuentas },
  ];

  const varEneroHon = ((enero.honorarios - diciembre.honorarios) / diciembre.honorarios * 100);
  const varFebHon = ((febrero.honorarios - enero.honorarios) / enero.honorarios * 100);
  const varEneroCue = ((enero.cuentas - diciembre.cuentas) / diciembre.cuentas * 100);
  const varFebCue = ((febrero.cuentas - enero.cuentas) / enero.cuentas * 100);

  const maxHon = Math.max(...months.map(m => m.hon));
  const maxCue = Math.max(...months.map(m => m.cuentas));

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1f3a] to-[#0a2e1a]"></div>
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          Resumen General Trimestral
        </motion.h2>

        <div className="grid grid-cols-2 gap-12">
          {/* Gráfico de columnas: Honorarios */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg text-emerald-300 font-bold uppercase tracking-widest mb-6 text-center">Honorarios por Mes</h3>
            <div className="flex items-end justify-center gap-10" style={{ height: '220px' }}>
              {months.map((m, idx) => {
                const barHeight = (m.hon / maxHon) * 180;
                return (
                  <div key={m.name} className="flex flex-col items-center gap-2">
                    <span className="text-white font-bold text-sm">{formatMoney(m.hon)}</span>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: barHeight }}
                      transition={{ duration: 1.2, delay: idx * 0.3, ease: "easeOut" }}
                      className="w-20 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-t-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    />
                    <span className="text-gray-300 text-sm font-semibold mt-1">{m.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <div className={`px-3 py-1 rounded-full text-sm font-bold ${varEneroHon > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                Dic→Ene: {varEneroHon > 0 ? '▲' : '▼'}{Math.abs(varEneroHon).toFixed(1)}%
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-bold ${varFebHon > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                Ene→Feb: {varFebHon > 0 ? '▲' : '▼'}{Math.abs(varFebHon).toFixed(1)}%
              </div>
            </div>
          </div>

          {/* Gráfico de columnas: Cuentas */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg text-blue-300 font-bold uppercase tracking-widest mb-6 text-center">Cuentas Recuperadas por Mes</h3>
            <div className="flex items-end justify-center gap-10" style={{ height: '220px' }}>
              {months.map((m, idx) => {
                const barHeight = (m.cuentas / maxCue) * 180;
                return (
                  <div key={m.name} className="flex flex-col items-center gap-2">
                    <span className="text-white font-bold text-lg">{m.cuentas}</span>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: barHeight }}
                      transition={{ duration: 1.2, delay: idx * 0.3, ease: "easeOut" }}
                      className="w-20 bg-gradient-to-t from-blue-700 to-blue-400 rounded-t-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    />
                    <span className="text-gray-300 text-sm font-semibold mt-1">{m.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <div className={`px-3 py-1 rounded-full text-sm font-bold ${varEneroCue > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                Dic→Ene: {varEneroCue > 0 ? '▲' : '▼'}{Math.abs(varEneroCue).toFixed(0)}%
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-bold ${varFebCue > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                Ene→Feb: {varFebCue > 0 ? '▲' : '▼'}{Math.abs(varFebCue).toFixed(0)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide7GeneralSummary;
