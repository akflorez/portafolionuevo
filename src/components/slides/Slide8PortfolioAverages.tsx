import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { globalFnaData } from "../../data/fnaData";

const formatMoney = (val: number) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);
};

const Slide8PortfolioAverages = () => {
  const { diciembre, enero, febrero } = globalFnaData;
  const avgHon = (diciembre.honorarios + enero.honorarios + febrero.honorarios) / 3;
  const avgCuentas = (diciembre.cuentas + enero.cuentas + febrero.cuentas) / 3;

  return (
    <SlideLayout bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" overlayStrong>
      <div className="flex-1 flex flex-col justify-center items-center px-20 z-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-20 drop-shadow-md"
        >
          Promedios Trimestrales
        </motion.h2>

        <div className="flex gap-16 w-full max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 bg-white/5 backdrop-blur-xl border border-white/20 p-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <span className="text-6xl mb-6">💰</span>
            <h3 className="text-2xl text-gray-300 uppercase tracking-widest font-semibold mb-4">Honorarios</h3>
            <p className="text-6xl font-black text-white">{formatMoney(avgHon)}</p>
            <p className="mt-4 text-gray-400 font-light text-lg">Promedio Mensual (3 Meses)</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 bg-white/5 backdrop-blur-xl border border-white/20 p-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <span className="text-6xl mb-6">✅</span>
            <h3 className="text-2xl text-gray-300 uppercase tracking-widest font-semibold mb-4">Cuentas Recuperadas</h3>
            <p className="text-6xl font-black text-white">{Math.round(avgCuentas)}</p>
            <p className="mt-4 text-gray-400 font-light text-lg">Promedio Mensual (3 Meses)</p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide8PortfolioAverages;
