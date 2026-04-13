import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { 
  Users, 
  Wallet, 
  Scale, 
  CalendarCheck, 
  HeartHandshake, 
  Zap,
  CheckCircle2
} from "lucide-react";
import teamBg from "@/assets/slide2-team.jpg";

const services = [
  {
    title: "Cobro Administrativo",
    subtitle: "Preventivo & Masivo",
    icon: Wallet,
    desc: "Gestión temprana para asegurar el flujo de caja."
  },
  {
    title: "Cobro Pre-jurídico",
    subtitle: "Estratégico & Conciliado",
    icon: Scale,
    desc: "Recuperación de cartera con enfoque legal preventivo."
  },
  {
    title: "Agendamiento",
    subtitle: "Citas Masivas",
    icon: CalendarCheck,
    desc: "Optimización de agendas comerciales y operativas."
  },
  {
    title: "Servicio al Cliente",
    subtitle: "& Fidelización 360",
    icon: HeartHandshake,
    desc: "Experiencia de usuario centrada en la excelencia."
  },
  {
    title: "Ventas Remotas",
    subtitle: "Cross-selling & Outbound",
    icon: Zap,
    desc: "Aumento de ingresos mediante canales digitales."
  }
];

const Slide3ServicesBPO = () => {
  return (
    <SlideLayout bgImage={teamBg} overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-16 z-20 w-full max-w-7xl mx-auto py-20">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/10 border border-emerald-500/20">
              <Users className="w-7 h-7 text-emerald-500" />
            </div>
            <p className="text-emerald-500 font-black uppercase tracking-[0.4em] text-xs">Operaciones de Alto Impacto</p>
          </div>
          <h2 className="text-7xl font-black text-white leading-tight mb-6">
            Gestión BPO <span className="text-gradient-green">& BPS 360</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-4xl mx-auto leading-relaxed">
            Optimizamos la recuperación de cartera y la gestión de procesos operativos mediante estrategias segmentadas y talento humano especializado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full p-6 card-glass border border-white/10 rounded-[2rem] flex flex-col items-center text-center transition-all duration-500 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/30">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:text-noir transition-all duration-500">
                  <service.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-black text-white mb-2 leading-tight uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-4">
                  {service.subtitle}
                </p>
                <div className="h-px w-8 bg-emerald-500/30 mb-4 group-hover:w-16 transition-all" />
                <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="mt-10 flex items-center justify-center gap-10"
        >
           <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 w-4 h-4" />
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Tecnología de Punta</span>
           </div>
           <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 w-4 h-4" />
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Talento Especializado</span>
           </div>
           <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500 w-4 h-4" />
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Escalabilidad Regional</span>
           </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesBPO;
