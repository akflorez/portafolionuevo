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
        ease: [0.1, 0.76, 0.55, 0.94], // Custom smooth ease-out curve
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

const Slide4FNA = () => {
  const { t, language } = useLanguage();
  
  const cards = [
    {
      icon: TrendingUp,
      val: 91.8,
      decimals: 1,
      title: t("slide4FNA.card1_title"),
      desc: t("slide4FNA.card1_desc"),
      hoverBorder: "hover:border-emerald-500/30",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      bgColor: "bg-emerald-500/10",
      hoverBgColor: "group-hover:bg-emerald-500/20",
      iconColor: "text-emerald-500",
    },
    {
      icon: Layers,
      val: 100.0,
      decimals: 0,
      title: t("slide4FNA.card2_title"),
      desc: t("slide4FNA.card2_desc"),
      hoverBorder: "hover:border-blue-500/30",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      bgColor: "bg-blue-500/10",
      hoverBgColor: "group-hover:bg-blue-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Target,
      val: 98.7,
      decimals: 1,
      title: t("slide4FNA.card3_title"),
      desc: t("slide4FNA.card3_desc"),
      hoverBorder: "hover:border-emerald-500/30",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      bgColor: "bg-emerald-500/10",
      hoverBgColor: "group-hover:bg-emerald-500/20",
      iconColor: "text-emerald-500",
    },
    {
      icon: Gauge,
      val: 93.2,
      decimals: 1,
      title: t("slide4FNA.card4_title"),
      desc: t("slide4FNA.card4_desc"),
      hoverBorder: "hover:border-blue-500/30",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      bgColor: "bg-blue-500/10",
      hoverBgColor: "group-hover:bg-blue-500/20",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <SlideLayout bgImage={analysisBg} overlayStrong>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-12 md:px-20 gap-8 md:gap-16 z-20 w-full max-w-[130rem] mx-auto py-16 md:py-24 overflow-y-auto md:overflow-hidden h-full">
        
        {/* Left Column — Title and Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col justify-center max-w-2xl text-left"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">
            {t("slide4FNA.tagline")}
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            {t("slide4FNA.title_main")} <br className="hidden md:inline" />
            <span className="text-gradient-green">{t("slide4FNA.title_gradient")}</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-semibold mb-6 leading-relaxed">
            {t("slide4FNA.subtitle")}
          </p>
          <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed">
            {t("slide4FNA.desc")}
          </p>
        </motion.div>

        {/* Right Column — Responsive Grid of Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className={`card-glass p-6 md:p-8 rounded-3xl border border-white/10 ${card.hoverBorder} ${card.hoverShadow} transition-all duration-300 group flex flex-col`}
              >
                {/* Minimalist Icon Wrapper */}
                <div className={`w-14 h-14 rounded-2xl ${card.bgColor} ${card.hoverBgColor} flex items-center justify-center mb-6 transition-all duration-300`}>
                  <card.icon className={`w-7 h-7 ${card.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                </div>

                {/* Percentage Big Indicator */}
                <div className="flex items-baseline mb-3">
                  <CountUp 
                    value={card.val} 
                    decimals={card.decimals} 
                    isSpanish={language === "es"} 
                    className="text-5xl md:text-6xl font-black text-white tracking-tight"
                  />
                  <span className={`text-3xl md:text-4xl font-black ml-1 ${card.iconColor}`}>%</span>
                </div>

                {/* Card Info */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footnote */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xs md:text-sm text-white/40 font-medium italic mt-6 text-center md:text-left leading-relaxed"
          >
            {t("slide4FNA.footnote")}
          </motion.p>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default Slide4FNA;
