import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Headphones, Scale, BarChart3, Infinity } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Slide3Services360 = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Headphones,
      title: t("slide3360.pillars.contact"),
      desc: t("slide3360.pillars.contact_desc"),
    },
    {
      icon: Scale,
      title: t("slide3360.pillars.legal"),
      desc: t("slide3360.pillars.legal_desc"),
    },
    {
      icon: BarChart3,
      title: t("slide3360.pillars.data"),
      desc: t("slide3360.pillars.data_desc"),
    },
  ];

  return (
    <SlideLayout>
      {/* Background image with full brightness — no SlideLayout overlay interference */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img src="/bps-bg.png" alt="" className="w-full h-full object-cover object-top" />
      </motion.div>
      {/* Subtle tint — just enough to keep text readable without hiding the people */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-noir/55 via-noir/20 to-noir/65 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col justify-center px-20 w-full max-w-[140rem] mx-auto py-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
              <Infinity className="w-7 h-7 text-emerald-400 animate-pulse" />
            </div>
            <p className="text-emerald-400 font-black uppercase tracking-[0.4em] text-sm drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              {t("slide3360.tagline")}
            </p>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            {t("slide3360.title_main")} <span className="text-gradient-green">{t("slide3360.title_gradient")}</span>
          </h2>
          <p className="text-lg md:text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {t("slide3360.desc")}
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full p-8 card-glass border border-white/5 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/30">
                
                {/* Icon Wrapper */}
                <div className="w-24 h-24 rounded-[2rem] bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-noir transition-all duration-500 shadow-xl border border-white/5">
                  <pillar.icon className="w-11 h-11 text-emerald-400 group-hover:text-noir group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                  {pillar.title}
                </h3>

                <div className="h-px w-8 bg-emerald-500/30 mb-4 group-hover:w-16 transition-all duration-500" />

                {/* Description */}
                <p className="text-base md:text-lg text-white/90 group-hover:text-emerald-300 transition-colors leading-relaxed font-semibold">
                  {pillar.desc}
                </p>

              </div>
              
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/[0.02] rounded-full blur-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3Services360;
