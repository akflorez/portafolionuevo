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
            <h2 className="text-8xl font-black text-white leading-[0.9] mb-8">
              Gestión BPO <br />
              <span className="text-gradient-green">& BPS 360</span>
            </h2>
            <p className="text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
              Optimizamos la recuperación de cartera y la gestión de procesos operativos mediante estrategias segmentadas y talento humano especializado.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-noir transition-all duration-300">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <span className="text-2xl text-white/80 group-hover:text-white transition-colors font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1 relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl aspect-[4/5] bg-noir/20">
            <img 
              src="/assets/apps/bpo_team.png" 
              alt="Executive BPO Team" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-8 -right-8 p-8 card-glass border border-emerald-500/40 rounded-[2rem] shadow-2xl flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
              <TrendingUp className="text-noir w-8 h-8" />
            </div>
            <div>
              <p className="text-xs text-emerald-400 uppercase font-black tracking-[0.2em] mb-1">Optimización</p>
              <p className="text-2xl font-black text-white">Resultados Reales</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesBPO;
