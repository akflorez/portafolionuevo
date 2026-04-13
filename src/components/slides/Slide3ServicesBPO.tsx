import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Users, CheckCircle2, TrendingUp } from "lucide-react";
import teamBg from "@/assets/slide2-team.jpg";

const Slide3ServicesBPO = () => {
  const capabilities = [
    "Cobro Administrativo / Preventivo",
    "Cobro Pre-jurídico Estratégico",
    "Agendamiento de Citas Masivo",
    "Servicio al Cliente & Fidelización",
    "Ventas Remotas (Cross-selling)"
  ];

  return (
    <SlideLayout bgImage={teamBg} overlayStrong>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-16 gap-12 z-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <Users className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-sm">Operaciones de Alto Impacto</p>
            </div>
            <h2 className="text-7xl font-black text-white leading-tight mb-6">
              Gestión BPO <br />
              <span className="text-gradient-green">& BPS 360</span>
            </h2>
            <p className="text-xl text-white/60 font-light max-w-xl leading-relaxed">
              Optimizamos la recuperación de cartera y la gestión de procesos operativos mediante estrategias segmentadas y talento humano especializado.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {capabilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-noir transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-lg text-white/80 group-hover:text-white transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1 relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/assets/apps/legal_dashboard.png" 
              alt="BPO Dashboard" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 p-6 card-glass border border-emerald-500/30 rounded-2xl shadow-xl flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-noir w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest">Optimización</p>
              <p className="text-lg font-bold text-white">Resultados Basados en Datos</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesBPO;
