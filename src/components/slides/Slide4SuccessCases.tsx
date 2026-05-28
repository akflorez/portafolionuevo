import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { 
  Layers, 
  Users, 
  PhoneCall, 
  History, 
  Filter, 
  Brain, 
  Cpu, 
  TrendingUp, 
  GitMerge, 
  Zap, 
  DollarSign, 
  Scale 
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

interface CountUpProps {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  isSpanish?: boolean;
  delay?: number;
}

const CountUp = ({ value, decimals = 0, suffix = "", className = "", isSpanish = false, delay = 0 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    const formatted = latest.toFixed(decimals);
    const parts = formatted.split(".");
    
    // Formats thousands separator based on language
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, isSpanish ? "." : ",");
    
    const numPart = parts.join(isSpanish ? "," : ".");
    return numPart + suffix;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.5,
        delay: delay,
        ease: [0.1, 0.76, 0.55, 0.94], // Extremely smooth ease-out
      });
      return controls.stop;
    }
  }, [inView, value, count, delay]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
};

const Slide4SuccessCases = () => {
  const { t, language } = useLanguage();
  const isSpanish = language === "es";

  // Block 1 Modules (Base de Cartera)
  const block1Items = [
    { icon: Users, text: t("slide4SuccessCases.block1_item1"), color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { icon: PhoneCall, text: t("slide4SuccessCases.block1_item2"), color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { icon: History, text: t("slide4SuccessCases.block1_item3"), color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
    { icon: Filter, text: t("slide4SuccessCases.block1_item4"), color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" }
  ];

  // Block 2 Surrounding pills (Operación Inteligente)
  const block2Pills = [
    { text: t("slide4SuccessCases.block2_surround1"), color: "text-emerald-300 border-emerald-500/10" },
    { text: t("slide4SuccessCases.block2_surround2"), color: "text-teal-300 border-teal-500/10" },
    { text: t("slide4SuccessCases.block2_surround3"), color: "text-cyan-300 border-cyan-500/10" },
    { text: t("slide4SuccessCases.block2_surround4"), color: "text-emerald-300 border-emerald-500/10" },
    { text: t("slide4SuccessCases.block2_surround5"), color: "text-green-300 border-green-500/10" }
  ];

  return (
    <SlideLayout>
      {/* Background soft glowing accent spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* SVG Connecting Flow Lines - only visible on Desktop */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" 
        viewBox="0 0 1000 500" 
        preserveAspectRatio="none"
      >
        <defs>
          {/* Futuristic High-tech Flow Glow Filter */}
          <filter id="flow-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="flow-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="flow-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Static Background Paths - low opacity tracks */}
        <path d="M 300 210 Q 400 210 500 240" stroke="rgba(59,130,246,0.12)" strokeWidth="2" fill="none" />
        <path d="M 300 350 Q 400 350 500 240" stroke="rgba(59,130,246,0.12)" strokeWidth="2" fill="none" />
        <path d="M 500 240 Q 600 210 700 210" stroke="rgba(16,185,129,0.12)" strokeWidth="2" fill="none" />
        <path d="M 500 240 Q 600 350 700 350" stroke="rgba(16,185,129,0.12)" strokeWidth="2" fill="none" />

        {/* Sequenced Flow Animation 1 (Base -> AI Core) */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          {/* Thick Glowing Track */}
          <motion.path
            d="M 300 210 Q 400 210 500 240"
            stroke="url(#flow-gradient-1)"
            strokeWidth="4"
            strokeDasharray="12 36"
            fill="none"
            filter="url(#flow-glow)"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
          />
          {/* Fast Inner Core Laser Dot */}
          <motion.path
            d="M 300 210 Q 400 210 500 240"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeDasharray="3 45"
            fill="none"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "linear" }}
          />

          {/* Bottom curve from block 1 */}
          <motion.path
            d="M 300 350 Q 400 350 500 240"
            stroke="url(#flow-gradient-1)"
            strokeWidth="4"
            strokeDasharray="14 42"
            fill="none"
            filter="url(#flow-glow)"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 300 350 Q 400 350 500 240"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeDasharray="4 60"
            fill="none"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.g>

        {/* Sequenced Flow Animation 2 (AI Core -> Results) */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
        >
          {/* Top curve to block 3 */}
          <motion.path
            d="M 500 240 Q 600 210 700 210"
            stroke="url(#flow-gradient-2)"
            strokeWidth="4"
            strokeDasharray="16 48"
            fill="none"
            filter="url(#flow-glow)"
            animate={{ strokeDashoffset: [-240, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 500 240 Q 600 210 700 210"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeDasharray="3 35"
            fill="none"
            animate={{ strokeDashoffset: [-240, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "linear" }}
          />

          {/* Bottom curve to block 3 */}
          <motion.path
            d="M 500 240 Q 600 350 700 350"
            stroke="url(#flow-gradient-2)"
            strokeWidth="4"
            strokeDasharray="18 54"
            fill="none"
            filter="url(#flow-glow)"
            animate={{ strokeDashoffset: [-240, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 500 240 Q 600 350 700 350"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeDasharray="4 55"
            fill="none"
            animate={{ strokeDashoffset: [-240, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "linear" }}
          />
        </motion.g>
      </svg>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 w-full max-w-[130rem] mx-auto py-8 md:py-12 lg:py-16 overflow-y-auto">
        
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-16 max-w-4xl mx-auto"
        >
          {/* "Casos de éxito" badge was removed per user request */}
          
          <h2 className="text-4xl md:text-5.5xl font-black text-white mt-2 mb-4 tracking-tight uppercase leading-none">
            {t("slide4SuccessCases.concept")}
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-semibold leading-relaxed">
            {t("slide4SuccessCases.subtitle")}
          </p>
        </motion.div>

        {/* 3 Columns Layout (Borderless Premium Redesign) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 w-full items-stretch z-10">
          
          {/* BLOCK 1: BASE DE CARTERA (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between py-4"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-blue-400">
                01. {t("slide4SuccessCases.block1_title")}
              </span>
            </div>

            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {block1Items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + (0.1 * idx), duration: 0.5, ease: "easeOut" }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.border} flex items-center justify-center border shadow-lg transition-all duration-300 group-hover:scale-110`}>
                    <item.icon className={`w-5.5 h-5.5 ${item.color}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {item.text}
                    </span>
                    <span className="text-xs font-medium text-white/40 uppercase tracking-widest mt-1">
                      {idx === 0 ? "Filtros demográficos" : idx === 1 ? "Multicanalidad activa" : idx === 2 ? "Trazabilidad completa" : "Algoritmos predictivos"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BLOCK 2: OPERACIÓN INTELIGENTE (Central Column - Nucleus) */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between items-center py-4 relative"
          >
            <div className="w-full mb-6 flex items-center justify-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-emerald-400">
                02. {t("slide4SuccessCases.block2_title")}
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center w-full py-4">
              
              {/* QUANTUM CPU NUCLEUS ENGINE */}
              <div className="relative flex flex-col items-center mb-8">
                
                {/* Rings Rotating */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-11 rounded-full border border-dotted border-emerald-500/25 pointer-events-none shadow-[0_0_15px_rgba(16,185,129,0.05)]" 
                />

                <motion.div 
                  animate={{ rotate: -360 }} 
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 rounded-full border-2 border-dashed border-emerald-500/35 pointer-events-none shadow-[0_0_20px_rgba(16,185,129,0.1)]" 
                />

                <motion.div 
                  animate={{ scale: [1, 1.3, 1.6], opacity: [0.35, 0.15, 0] }} 
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute -inset-14 rounded-full border border-emerald-500/20 pointer-events-none" 
                />

                <div className="relative w-18 h-18 rounded-full bg-gradient-to-tr from-emerald-500/30 to-teal-500/15 border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                  <Cpu className="w-9 h-9 text-emerald-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-500/50 animate-ping opacity-25" />
                </div>
                <span className="text-xs font-black text-emerald-400 uppercase tracking-[0.25em] mt-3.5">AI Engine Core</span>
              </div>

              {/* SURROUNDING ACTIVE PILLS */}
              <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-sm">
                {block2Pills.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (idx * 0.08), duration: 0.4 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-400/80 animate-pulse" />
                    <span className={`text-xs font-extrabold uppercase tracking-widest ${item.color}`}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* GLASSY CALLOUT CONTAINER (BORDERLESS LEFT LINE ACCENT) */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="relative pl-5 py-2 mt-4 max-w-md w-full border-l-2 border-emerald-500/40 bg-emerald-500/[0.02]"
              >
                <h4 className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t("slide4SuccessCases.block2_callout_title")}
                </h4>
                <p className="text-sm text-white/80 font-semibold leading-relaxed">
                  {t("slide4SuccessCases.block2_callout_text")}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* BLOCK 3: RESULTADOS MEDIBLES (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 lg:col-span-1 flex flex-col justify-between py-4"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-teal-400">
                03. {t("slide4SuccessCases.block3_title")}
              </span>
            </div>

            {/* 3 Main Percentage KPIs with Delayed Sequence */}
            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {/* KPI 1: Contactability */}
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-base md:text-lg font-bold text-white uppercase tracking-wider">{t("slide4SuccessCases.kpi1_title")}</span>
                  <div className="flex items-baseline text-emerald-400 font-black">
                    <CountUp value={68} decimals={0} isSpanish={isSpanish} delay={1.3} className="text-4xl md:text-5xl font-black tracking-tight" />
                    <span className="text-base ml-0.5">%</span>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "68%" }}
                    transition={{ duration: 1.5, delay: 1.3, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  />
                </div>
                <span className="text-xs md:text-sm text-white/50 block font-medium leading-normal">{t("slide4SuccessCases.kpi1_desc")}</span>
              </div>

              {/* KPI 2: Conversion */}
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-base md:text-lg font-bold text-white uppercase tracking-wider">{t("slide4SuccessCases.kpi2_title")}</span>
                  <div className="flex items-baseline text-emerald-400 font-black">
                    <CountUp value={84} decimals={0} isSpanish={isSpanish} delay={1.5} className="text-4xl md:text-5xl font-black tracking-tight" />
                    <span className="text-base ml-0.5">%</span>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "84%" }}
                    transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  />
                </div>
                <span className="text-xs md:text-sm text-white/50 block font-medium leading-normal">{t("slide4SuccessCases.kpi2_desc")}</span>
              </div>

              {/* KPI 3: Effectiveness */}
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-base md:text-lg font-bold text-white uppercase tracking-wider">{t("slide4SuccessCases.kpi3_title")}</span>
                  <div className="flex items-baseline text-emerald-400 font-black">
                    <CountUp value={76} decimals={0} isSpanish={isSpanish} delay={1.7} className="text-4xl md:text-5xl font-black tracking-tight" />
                    <span className="text-base ml-0.5">%</span>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "76%" }}
                    transition={{ duration: 1.5, delay: 1.7, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  />
                </div>
                <span className="text-xs md:text-sm text-white/50 block font-medium leading-normal">{t("slide4SuccessCases.kpi3_desc")}</span>
              </div>
            </div>

            {/* 4 Secondary Supporting indicators with staggered entries */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6 mt-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="text-center group cursor-pointer"
              >
                <span className="text-[11px] md:text-xs font-black text-white/40 uppercase tracking-widest leading-none block mt-1 transition-colors group-hover:text-white/60">
                  {t("slide4SuccessCases.support_kpi1_title")}
                </span>
                <div className="text-2xl md:text-3xl font-black text-white flex items-baseline justify-center leading-none mt-2">
                  <span className="text-lg md:text-xl mr-0.5 text-white/70">+</span>
                  <CountUp value={8000} decimals={0} isSpanish={isSpanish} delay={1.9} />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0, duration: 0.5 }}
                className="text-center border-l border-white/10 group cursor-pointer"
              >
                <span className="text-[11px] md:text-xs font-black text-white/40 uppercase tracking-widest leading-none block mt-1 transition-colors group-hover:text-white/60">
                  {t("slide4SuccessCases.support_kpi2_title")}
                </span>
                <div className="text-base md:text-lg font-black text-emerald-400 flex items-baseline justify-center leading-none mt-2.5">
                  <span className="text-[11px] font-bold mr-0.5 text-white/60">{isSpanish ? "Aprox. $" : "Approx. $"}</span>
                  <CountUp value={1500} decimals={0} isSpanish={isSpanish} delay={2.1} className="text-xl md:text-2xl font-black text-emerald-400" />
                  <span className="text-[11px] font-bold ml-1 text-white/60">{isSpanish ? "Mil Millones" : "Billion"}</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="text-center border-l border-white/10 group cursor-pointer"
              >
                <span className="text-[11px] md:text-xs font-black text-white/40 uppercase tracking-widest leading-none block mt-1 transition-colors group-hover:text-white/60">
                  {t("slide4SuccessCases.support_kpi3_title")}
                </span>
                <div className="text-2xl md:text-3xl font-black text-white flex items-baseline justify-center leading-none mt-2">
                  <CountUp value={12} decimals={0} isSpanish={isSpanish} delay={2.3} />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4, duration: 0.5 }}
                className="text-center border-l border-white/10 group cursor-pointer"
              >
                <span className="text-[11px] md:text-xs font-black text-white/40 uppercase tracking-widest leading-none block mt-1 transition-colors group-hover:text-white/60">
                  {t("slide4SuccessCases.support_kpi4_title")}
                </span>
                <div className="text-2xl md:text-3xl font-black text-white flex items-baseline justify-center leading-none mt-2">
                  <span className="text-lg md:text-xl mr-0.5 text-white/70">+</span>
                  <CountUp value={400} decimals={0} isSpanish={isSpanish} delay={2.5} />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Footer closing block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="w-full text-center mt-10 z-10 flex flex-col items-center"
        >
          <p className="text-base md:text-lg font-black text-emerald-400 tracking-wide uppercase">
            {t("slide4SuccessCases.closing_phrase")}
          </p>
          <p className="text-xs md:text-sm text-white/40 font-medium italic mt-2.5 max-w-5xl leading-relaxed">
            {t("slide4SuccessCases.footnote")}
          </p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default Slide4SuccessCases;
