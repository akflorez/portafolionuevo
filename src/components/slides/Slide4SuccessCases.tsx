import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { TrendingUp, Layers, Target, Gauge } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import analysisBg from "@/assets/slide6-analysis.jpg";

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
    // Format decimal separator as comma for Spanish
    return (isSpanish ? formatted.replace(".", ",") : formatted) + suffix;
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

  // CREDIORBE Metrics
  const crediorbeMetrics = [
    {
      icon: TrendingUp,
      val: 88.6,
      decimals: 1,
      title: t("slide4Crediorbe.card1_title"),
      hoverBorder: "hover:border-emerald-500/30",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      icon: Layers,
      val: 100.0,
      decimals: 0,
      title: t("slide4Crediorbe.card2_title"),
      hoverBorder: "hover:border-blue-500/30",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Target,
      val: 99.19,
      decimals: 2,
      title: t("slide4Crediorbe.card3_title"),
      hoverBorder: "hover:border-emerald-500/30",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      icon: Gauge,
      val: 92.4,
      decimals: 1,
      title: t("slide4Crediorbe.card4_title"),
      hoverBorder: "hover:border-blue-500/30",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
  ];

  // FNA Metrics
  const fnaMetrics = [
    {
      icon: TrendingUp,
      val: 91.8,
      decimals: 1,
      title: t("slide4FNA.card1_title"),
      hoverBorder: "hover:border-emerald-500/30",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      icon: Layers,
      val: 100.0,
      decimals: 0,
      title: t("slide4FNA.card2_title"),
      hoverBorder: "hover:border-blue-500/30",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Target,
      val: 98.7,
      decimals: 1,
      title: t("slide4FNA.card3_title"),
      hoverBorder: "hover:border-emerald-500/30",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      icon: Gauge,
      val: 93.2,
      decimals: 1,
      title: t("slide4FNA.card4_title"),
      hoverBorder: "hover:border-blue-500/30",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <SlideLayout bgImage={analysisBg} overlayStrong>
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-8 md:px-20 gap-8 lg:gap-16 z-20 w-full max-w-[130rem] mx-auto py-12 lg:py-24 overflow-y-auto lg:overflow-hidden h-full">
        
        {/* Left Column — Title and The Why Context */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col justify-center max-w-xl text-left lg:pr-4"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-3 text-sm md:text-base">
            {t("slide4SuccessCases.tagline")}
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
            {t("slide4SuccessCases.title_main")} <br className="hidden md:inline" />
            <span className="text-gradient-green">{t("slide4SuccessCases.title_gradient")}</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-semibold mb-5 leading-relaxed">
            {t("slide4SuccessCases.subtitle")}
          </p>
          <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed mb-6">
            {t("slide4SuccessCases.desc")}
          </p>
          
          {/* Footnote under text on desktop */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:block text-xs text-white/40 font-medium italic leading-relaxed"
          >
            {t("slide4SuccessCases.footnote")}
          </motion.p>
        </motion.div>

        {/* Right Column — Two Side-by-Side Portfolios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-[1.3] w-full flex flex-col sm:flex-row gap-8 lg:gap-12"
        >
          {/* Column 1: CREDIORBE */}
          <div className="flex-1 flex flex-col">
            {/* Borderless Floating Logo */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-16 flex items-center justify-center mb-6 select-none"
            >
              <img 
                src="/CrediOrbe.webp" 
                alt="CREDIORBE" 
                className="max-h-full object-contain filter brightness-110 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] dark:brightness-100" 
              />
            </motion.div>

            {/* List of 4 Metrics */}
            <div className="space-y-4">
              {crediorbeMetrics.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className={`card-glass p-3 px-5 rounded-2xl border border-white/10 ${card.hoverBorder} transition-all duration-300 flex items-center justify-between gap-4`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${card.bgColor} flex items-center justify-center shrink-0`}>
                      <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-white/90 text-left leading-tight">
                      {card.title}
                    </span>
                  </div>
                  
                  {/* Percentage metric */}
                  <div className="flex items-baseline shrink-0">
                    <CountUp 
                      value={card.val} 
                      decimals={card.decimals} 
                      isSpanish={isSpanish} 
                      className="text-xl md:text-2xl font-black text-white tracking-tight"
                    />
                    <span className={`text-base font-black ml-0.5 ${card.iconColor}`}>%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: FNA */}
          <div className="flex-1 flex flex-col">
            {/* Borderless Floating Logo */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-16 flex items-center justify-center mb-6 select-none"
            >
              <img 
                src="/FNA.png" 
                alt="Fondo Nacional del Ahorro" 
                className="max-h-full object-contain filter brightness-115 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] dark:brightness-105" 
              />
            </motion.div>

            {/* List of 4 Metrics */}
            <div className="space-y-4">
              {fnaMetrics.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className={`card-glass p-3 px-5 rounded-2xl border border-white/10 ${card.hoverBorder} transition-all duration-300 flex items-center justify-between gap-4`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${card.bgColor} flex items-center justify-center shrink-0`}>
                      <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-white/90 text-left leading-tight">
                      {card.title}
                    </span>
                  </div>
                  
                  {/* Percentage metric */}
                  <div className="flex items-baseline shrink-0">
                    <CountUp 
                      value={card.val} 
                      decimals={card.decimals} 
                      isSpanish={isSpanish} 
                      className="text-xl md:text-2xl font-black text-white tracking-tight"
                    />
                    <span className={`text-base font-black ml-0.5 ${card.iconColor}`}>%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Footnote for mobile viewports */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="block lg:hidden text-[10px] text-white/40 font-medium italic mt-4 text-center leading-relaxed"
        >
          {t("slide4SuccessCases.footnote")}
        </motion.p>

      </div>
    </SlideLayout>
  );
};

export default Slide4SuccessCases;
