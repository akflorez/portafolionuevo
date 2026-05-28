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
}

const CountUp = ({ value, decimals = 0, suffix = "", className = "", isSpanish = false }: CountUpProps) => {
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
        duration: 2,
        ease: [0.1, 0.76, 0.55, 0.94], // Smooth ease-out
      });
      return controls.stop;
    }
  }, [inView, value, count]);

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
    { icon: Users, text: t("slide4SuccessCases.block1_item1") },
    { icon: PhoneCall, text: t("slide4SuccessCases.block1_item2") },
    { icon: History, text: t("slide4SuccessCases.block1_item3") },
    { icon: Filter, text: t("slide4SuccessCases.block1_item4") }
  ];

  // Block 2 Surrounding pills (Operación Inteligente)
  const block2Pills = [
    t("slide4SuccessCases.block2_surround1"),
    t("slide4SuccessCases.block2_surround2"),
    t("slide4SuccessCases.block2_surround3"),
    t("slide4SuccessCases.block2_surround4"),
    t("slide4SuccessCases.block2_surround5")
  ];

  return (
    <SlideLayout>
      {/* Background soft glowing accent spots */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* SVG Connecting Flow Lines - only visible on Desktop */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" 
        viewBox="0 0 1000 500" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Static Background Paths */}
        <path d="M 300 160 Q 400 160 500 210" stroke="rgba(59,130,246,0.12)" strokeWidth="2" fill="none" />
        <path d="M 300 290 Q 400 290 500 210" stroke="rgba(59,130,246,0.12)" strokeWidth="2" fill="none" />
        <path d="M 500 210 Q 600 160 700 160" stroke="rgba(16,185,129,0.12)" strokeWidth="2" fill="none" />
        <path d="M 500 210 Q 600 320 700 320" stroke="rgba(16,185,129,0.12)" strokeWidth="2" fill="none" />

        {/* Animated Flow Paths (Simulating Data Packets) */}
        <motion.path
          d="M 300 160 Q 400 160 500 210"
          stroke="url(#flow-gradient)"
          strokeWidth="2.5"
          strokeDasharray="15 45"
          fill="none"
          animate={{ strokeDashoffset: [120, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 300 290 Q 400 290 500 210"
          stroke="url(#flow-gradient)"
          strokeWidth="2.5"
          strokeDasharray="15 45"
          fill="none"
          animate={{ strokeDashoffset: [120, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 500 210 Q 600 160 700 160"
          stroke="url(#flow-gradient)"
          strokeWidth="2.5"
          strokeDasharray="20 60"
          fill="none"
          animate={{ strokeDashoffset: [-160, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 500 210 Q 600 320 700 320"
          stroke="url(#flow-gradient)"
          strokeWidth="2.5"
          strokeDasharray="20 60"
          fill="none"
          animate={{ strokeDashoffset: [-160, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 w-full max-w-[130rem] mx-auto py-8 md:py-12 lg:py-16 overflow-y-auto">
        
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-10 max-w-4xl mx-auto"
        >
          <span className="text-emerald-500 font-extrabold uppercase tracking-[0.25em] text-xs">
            {t("slide4SuccessCases.tagline")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-3 tracking-tight">
            {t("slide4SuccessCases.concept")}
          </h2>
          <p className="text-xs md:text-sm text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
            {t("slide4SuccessCases.subtitle")}
          </p>
        </motion.div>

        {/* 3 Blocks Grid (Left-to-Right Desktop, Grid Tablet/Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch z-10">
          
          {/* BLOCK 1: BASE DE CARTERA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-glass border border-white/5 rounded-[2rem] p-5 md:p-6 flex flex-col justify-between min-h-[380px] lg:min-h-[420px]"
          >
            <div className="mb-4 border-b border-white/10 pb-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Layers className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-base font-black text-white uppercase tracking-wider">
                {t("slide4SuccessCases.block1_title")}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1 items-center">
              {block1Items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="card-glass p-4 rounded-xl border border-white/10 flex flex-col gap-2.5 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-semibold text-white/80 leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BLOCK 2: OPERACIÓN INTELIGENTE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card-glass border border-white/5 rounded-[2rem] p-5 md:p-6 flex flex-col justify-between items-center min-h-[380px] lg:min-h-[420px] relative overflow-hidden"
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="w-full mb-4 border-b border-white/10 pb-3 flex items-center gap-3 z-10">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Brain className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-base font-black text-white uppercase tracking-wider">
                {t("slide4SuccessCases.block2_title")}
              </h3>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center w-full z-10">
              {/* CENTRAL NUCLEUS */}
              <div className="relative flex flex-col items-center mb-5">
                <div className="relative w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Cpu className="w-7 h-7 text-emerald-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border border-emerald-500/40 animate-ping opacity-25" />
                </div>
                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mt-1.5">Core System</span>
              </div>

              {/* SURROUNDING MODULE PILLS */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-5 max-w-sm">
                {block2Pills.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="px-2.5 py-1.5 rounded-full card-glass border border-emerald-500/20 text-[9px] font-bold text-emerald-300 uppercase tracking-wider shadow-sm hover:bg-emerald-500/10 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* HIGH-LIGHTED CALLOUT CONTAINER */}
              <div className="card-glass p-3 px-4 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.03] shadow-lg w-full relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-blue-500" />
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1 pl-1">
                  {t("slide4SuccessCases.block2_callout_title")}
                </h4>
                <p className="text-[10px] text-white/80 font-medium leading-relaxed pl-1">
                  {t("slide4SuccessCases.block2_callout_text")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* BLOCK 3: RESULTADOS MEDIBLES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-1 card-glass border border-white/5 rounded-[2rem] p-5 md:p-6 flex flex-col justify-between min-h-[380px] lg:min-h-[420px]"
          >
            <div className="mb-4 border-b border-white/10 pb-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-base font-black text-white uppercase tracking-wider">
                {t("slide4SuccessCases.block3_title")}
              </h3>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-4">
              {/* 3 Main Percentage KPIs */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {/* KPI 1: 84% */}
                <div className="card-glass p-3 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between min-h-[110px]">
                  <div className="flex items-center justify-between">
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <div className="flex items-baseline text-emerald-400">
                      <CountUp value={84} decimals={0} isSpanish={isSpanish} className="text-lg md:text-xl font-black text-white tracking-tight" />
                      <span className="text-[10px] font-black ml-0.5">%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-[9px] font-black text-white/90 uppercase tracking-tight leading-tight">
                      {t("slide4SuccessCases.kpi1_title")}
                    </h4>
                    <p className="text-[8px] text-white/50 leading-tight mt-0.5 font-medium">
                      {t("slide4SuccessCases.kpi1_desc")}
                    </p>
                  </div>
                </div>

                {/* KPI 2: 68% */}
                <div className="card-glass p-3 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between min-h-[110px]">
                  <div className="flex items-center justify-between">
                    <GitMerge className="w-4 h-4 text-emerald-400" />
                    <div className="flex items-baseline text-emerald-400">
                      <CountUp value={68} decimals={0} isSpanish={isSpanish} className="text-lg md:text-xl font-black text-white tracking-tight" />
                      <span className="text-[10px] font-black ml-0.5">%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-[9px] font-black text-white/90 uppercase tracking-tight leading-tight">
                      {t("slide4SuccessCases.kpi2_title")}
                    </h4>
                    <p className="text-[8px] text-white/50 leading-tight mt-0.5 font-medium">
                      {t("slide4SuccessCases.kpi2_desc")}
                    </p>
                  </div>
                </div>

                {/* KPI 3: 76% */}
                <div className="card-glass p-3 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between min-h-[110px]">
                  <div className="flex items-center justify-between">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <div className="flex items-baseline text-emerald-400">
                      <CountUp value={76} decimals={0} isSpanish={isSpanish} className="text-lg md:text-xl font-black text-white tracking-tight" />
                      <span className="text-[10px] font-black ml-0.5">%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-[9px] font-black text-white/90 uppercase tracking-tight leading-tight">
                      {t("slide4SuccessCases.kpi3_title")}
                    </h4>
                    <p className="text-[8px] text-white/50 leading-tight mt-0.5 font-medium">
                      {t("slide4SuccessCases.kpi3_desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Supporting indicators */}
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 pb-1">
                {/* Support KPI 1: +5.000 */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm font-black text-white flex items-baseline leading-none">
                      <span>+</span>
                      <CountUp value={5000} decimals={0} isSpanish={isSpanish} className="font-black text-white" />
                    </div>
                    <span className="text-[8px] font-bold text-white/40 uppercase tracking-tight leading-none block mt-1 truncate">
                      {t("slide4SuccessCases.support_kpi1_title")}
                    </span>
                  </div>
                </div>

                {/* Support KPI 2: $443.5 M / $443,5 M */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm font-black text-white flex items-baseline leading-none">
                      <span>$</span>
                      <CountUp value={443.5} decimals={1} isSpanish={isSpanish} className="font-black text-white" />
                      <span className="text-[10px] font-black ml-0.5">M</span>
                    </div>
                    <span className="text-[8px] font-bold text-white/40 uppercase tracking-tight leading-none block mt-1 truncate">
                      {t("slide4SuccessCases.support_kpi2_title")}
                    </span>
                  </div>
                </div>

                {/* Support KPI 3: 12 */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Scale className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm font-black text-white flex items-baseline leading-none">
                      <CountUp value={12} decimals={0} isSpanish={isSpanish} className="font-black text-white" />
                    </div>
                    <span className="text-[8px] font-bold text-white/40 uppercase tracking-tight leading-none block mt-1 truncate">
                      {t("slide4SuccessCases.support_kpi3_title")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer closing block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full text-center mt-6 z-10 flex flex-col items-center"
        >
          <p className="text-sm md:text-base font-black text-emerald-400 tracking-wide uppercase">
            {t("slide4SuccessCases.closing_phrase")}
          </p>
          <p className="text-[9px] text-white/40 font-medium italic mt-2 max-w-5xl leading-relaxed">
            {t("slide4SuccessCases.footnote")}
          </p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default Slide4SuccessCases;
