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
    { text: t("slide4SuccessCases.block2_surround1"), color: "text-emerald-300 border-emerald-500/30" },
    { text: t("slide4SuccessCases.block2_surround2"), color: "text-teal-300 border-teal-500/30" },
    { text: t("slide4SuccessCases.block2_surround3"), color: "text-cyan-300 border-cyan-500/30" },
    { text: t("slide4SuccessCases.block2_surround4"), color: "text-emerald-300 border-emerald-500/30" },
    { text: t("slide4SuccessCases.block2_surround5"), color: "text-green-300 border-green-500/30" }
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
          className="text-center mb-6 md:mb-12 max-w-4xl mx-auto"
        >
          {/* Elevate "Casos de éxito" with an ultra-premium layout */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/25 mb-4 shadow-[0_0_25px_rgba(16,185,129,0.15)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[11px] leading-none">
              {t("slide4SuccessCases.tagline")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mt-2 mb-4 tracking-tight uppercase leading-none">
            {t("slide4SuccessCases.concept")}
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto font-semibold leading-relaxed">
            {t("slide4SuccessCases.subtitle")}
          </p>
        </motion.div>

        {/* 3 Blocks Grid (Choreographed Storytelling Entrance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch z-10">
          
          {/* BLOCK 1: BASE DE CARTERA (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -80, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="card-glass border border-white/5 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between min-h-[400px] lg:min-h-[460px] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.05)] transition-all duration-500"
          >
            <div className="mb-5 border-b border-white/10 pb-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/25 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <Layers className="w-5.5 h-5.5 text-blue-400" />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-wider">
                {t("slide4SuccessCases.block1_title")}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-1 items-center">
              {block1Items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.15 + (0.1 * idx), duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(59,130,246,0.4)", backgroundColor: "rgba(59,130,246,0.02)" }}
                  className="card-glass p-5 rounded-2xl border border-white/10 flex flex-col gap-3.5 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.border} flex items-center justify-center border`}>
                    <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="text-sm font-bold text-white/90 leading-relaxed group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BLOCK 2: OPERACIÓN INTELIGENTE (Central Column - Nucleus) */}
          <motion.div
            initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="card-glass border border-emerald-500/10 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between items-center min-h-[400px] lg:min-h-[460px] relative overflow-hidden"
          >
            {/* Background cyber grid effect */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.04)_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

            <div className="w-full mb-5 border-b border-white/10 pb-4 flex items-center gap-3 z-10">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Brain className="w-5.5 h-5.5 text-emerald-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-wider">
                {t("slide4SuccessCases.block2_title")}
              </h3>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center w-full z-10 py-4">
              
              {/* QUANTUM CPU NUCLEUS ENGINE */}
              <div className="relative flex flex-col items-center mb-8">
                
                {/* 1st Ring: Clockwise Outer Dotted Tech Dashboard */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-11 rounded-full border border-dotted border-emerald-500/25 pointer-events-none shadow-[0_0_15px_rgba(16,185,129,0.05)]" 
                />

                {/* 2nd Ring: Counter-Clockwise Glowing Dash Indicator */}
                <motion.div 
                  animate={{ rotate: -360 }} 
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 rounded-full border-2 border-dashed border-emerald-500/35 pointer-events-none shadow-[0_0_20px_rgba(16,185,129,0.1)]" 
                />

                {/* 3rd Ring: Expanding Concentric Energy Wave pulses */}
                <motion.div 
                  animate={{ scale: [1, 1.3, 1.6], opacity: [0.35, 0.15, 0] }} 
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute -inset-14 rounded-full border border-emerald-500/20 pointer-events-none" 
                />
                
                <motion.div 
                  animate={{ scale: [1, 1.25, 1.5], opacity: [0.3, 0.1, 0] }} 
                  transition={{ duration: 3.5, delay: 1.75, repeat: Infinity, ease: "easeOut" }}
                  className="absolute -inset-14 rounded-full border border-emerald-500/15 pointer-events-none" 
                />

                {/* Central CPU Processor Node */}
                <div className="relative w-18 h-18 rounded-full bg-gradient-to-tr from-emerald-500/30 to-teal-500/15 border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                  <Cpu className="w-9 h-9 text-emerald-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-500/50 animate-ping opacity-25" />
                </div>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.25em] mt-3.5">AI Engine Core</span>
              </div>

              {/* SURROUNDING ACTIVE PILLS */}
              <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-sm">
                {block2Pills.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (idx * 0.1), duration: 0.4 }}
                    whileHover={{ scale: 1.08, backgroundColor: "rgba(16, 185, 129, 0.15)", borderColor: "rgba(16, 185, 129, 0.5)" }}
                    className={`px-3.5 py-1.5 rounded-full card-glass border ${item.color} text-[10.5px] font-extrabold uppercase tracking-widest shadow-md transition-all duration-300 cursor-pointer`}
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>

              {/* GLASSY CALLOUT CONTAINER */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="card-glass p-3.5 px-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.02] shadow-xl w-full relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 via-teal-500 to-blue-500" />
                <h4 className="text-xs font-black text-emerald-300 uppercase tracking-widest mb-1.5 pl-2.5 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {t("slide4SuccessCases.block2_callout_title")}
                </h4>
                <p className="text-[11.5px] text-white/85 font-semibold leading-relaxed pl-2.5">
                  {t("slide4SuccessCases.block2_callout_text")}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* BLOCK 3: RESULTADOS MEDIBLES (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 80, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 lg:col-span-1 card-glass border border-white/5 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between min-h-[400px] lg:min-h-[460px] hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)] transition-all duration-500"
          >
            <div className="mb-5 border-b border-white/10 pb-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <TrendingUp className="w-5.5 h-5.5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-wider">
                {t("slide4SuccessCases.block3_title")}
              </h3>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-5">
              
              {/* 3 Main Percentage KPIs with Delayed Sequence */}
              <div className="grid grid-cols-3 gap-3.5">
                {/* KPI 1: Contactability */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                  className="card-glass p-3.5 rounded-2xl border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.01] transition-all duration-300 flex flex-col justify-between min-h-[125px] shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <PhoneCall className="w-4.5 h-4.5 text-emerald-400" />
                    <div className="flex items-baseline text-emerald-400">
                      <CountUp value={84} decimals={0} isSpanish={isSpanish} delay={1.3} className="text-2xl md:text-3xl font-black text-white tracking-tight" />
                      <span className="text-xs font-black ml-0.5">%</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-[10px] font-black text-white/95 uppercase tracking-tight leading-tight">
                      {t("slide4SuccessCases.kpi1_title")}
                    </h4>
                    <p className="text-[9px] text-white/50 leading-tight mt-1 font-medium">
                      {t("slide4SuccessCases.kpi1_desc")}
                    </p>
                  </div>
                </motion.div>

                {/* KPI 2: Conversion */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
                  className="card-glass p-3.5 rounded-2xl border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.01] transition-all duration-300 flex flex-col justify-between min-h-[125px] shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <GitMerge className="w-4.5 h-4.5 text-emerald-400" />
                    <div className="flex items-baseline text-emerald-400">
                      <CountUp value={68} decimals={0} isSpanish={isSpanish} delay={1.5} className="text-2xl md:text-3xl font-black text-white tracking-tight" />
                      <span className="text-xs font-black ml-0.5">%</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-[10px] font-black text-white/95 uppercase tracking-tight leading-tight">
                      {t("slide4SuccessCases.kpi2_title")}
                    </h4>
                    <p className="text-[9px] text-white/50 leading-tight mt-1 font-medium">
                      {t("slide4SuccessCases.kpi2_desc")}
                    </p>
                  </div>
                </motion.div>

                {/* KPI 3: Effectiveness */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
                  className="card-glass p-3.5 rounded-2xl border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.01] transition-all duration-300 flex flex-col justify-between min-h-[125px] shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <Zap className="w-4.5 h-4.5 text-emerald-400" />
                    <div className="flex items-baseline text-emerald-400">
                      <CountUp value={76} decimals={0} isSpanish={isSpanish} delay={1.7} className="text-2xl md:text-3xl font-black text-white tracking-tight" />
                      <span className="text-xs font-black ml-0.5">%</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-[10px] font-black text-white/95 uppercase tracking-tight leading-tight">
                      {t("slide4SuccessCases.kpi3_title")}
                    </h4>
                    <p className="text-[9px] text-white/50 leading-tight mt-1 font-medium">
                      {t("slide4SuccessCases.kpi3_desc")}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* 3 Secondary Supporting indicators with staggered entries */}
              <div className="grid grid-cols-3 gap-3.5 border-t border-white/10 pt-5 pb-1">
                {/* Support KPI 1: Assigned clients */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="flex items-center gap-2.5 group cursor-pointer"
                >
                  <div className="w-8.5 h-8.5 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500/25 transition-all duration-300">
                    <Users className="w-4.5 h-4.5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm font-black text-white flex items-baseline leading-none">
                      <span>+</span>
                      <CountUp value={5000} decimals={0} isSpanish={isSpanish} delay={1.9} className="font-black text-white" />
                    </div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-tight leading-none block mt-2 truncate group-hover:text-white/60 transition-colors">
                      {t("slide4SuccessCases.support_kpi1_title")}
                    </span>
                  </div>
                </motion.div>

                {/* Support KPI 2: Recovered capital */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.0, duration: 0.5 }}
                  className="flex items-center gap-2.5 group cursor-pointer"
                >
                  <div className="w-8.5 h-8.5 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500/25 transition-all duration-300">
                    <DollarSign className="w-4.5 h-4.5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm font-black text-white flex items-baseline leading-none">
                      <span>$</span>
                      <CountUp value={443.5} decimals={1} isSpanish={isSpanish} delay={2.1} className="font-black text-white" />
                      <span className="text-[10px] font-black ml-0.5">M</span>
                    </div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-tight leading-none block mt-2 truncate group-hover:text-white/60 transition-colors">
                      {t("slide4SuccessCases.support_kpi2_title")}
                    </span>
                  </div>
                </motion.div>

                {/* Support KPI 3: Juridical scale */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  className="flex items-center gap-2.5 group cursor-pointer"
                >
                  <div className="w-8.5 h-8.5 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500/25 transition-all duration-300">
                    <Scale className="w-4.5 h-4.5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm font-black text-white flex items-baseline leading-none">
                      <CountUp value={12} decimals={0} isSpanish={isSpanish} delay={2.3} className="font-black text-white" />
                    </div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-tight leading-none block mt-2 truncate group-hover:text-white/60 transition-colors">
                      {t("slide4SuccessCases.support_kpi3_title")}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer closing block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="w-full text-center mt-8 z-10 flex flex-col items-center"
        >
          <p className="text-base md:text-lg font-black text-emerald-400 tracking-wide uppercase">
            {t("slide4SuccessCases.closing_phrase")}
          </p>
          <p className="text-[10.5px] text-white/40 font-medium italic mt-2.5 max-w-5xl leading-relaxed">
            {t("slide4SuccessCases.footnote")}
          </p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default Slide4SuccessCases;
