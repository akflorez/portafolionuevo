import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, BarChart3, Binary } from "lucide-react";
import teamBg from "@/assets/slide2-team.jpg";
import { useLanguage } from "../../contexts/LanguageContext";

const Slide2Purpose = () => {
  const { t } = useLanguage();
  
  const pillars = [
    {
      icon: Binary,
      title: t("slide2.pillar1_title"),
      desc: t("slide2.pillar1_desc")
    },
    {
      icon: BarChart3,
      title: t("slide2.pillar2_title"),
      desc: t("slide2.pillar2_desc")
    },
    {
      icon: Zap,
      title: t("slide2.pillar3_title"),
      desc: t("slide2.pillar3_desc")
    }
  ];

  return (
    <SlideLayout bgImage={teamBg} overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <div className="inline-block px-5 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <p className="text-emerald-400 font-extrabold uppercase tracking-[0.3em] text-xs leading-none">
              {t("slide2.essence")}
            </p>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase">
            {t("slide2.title_main")} <span className="text-gradient-green">{t("slide2.title_gradient")}</span>
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-2xl md:text-3xl text-white/95 font-bold leading-relaxed max-w-5xl">
              {t("slide2.p1")}
            </p>
            <p className="text-lg md:text-xl text-white/80 font-semibold leading-relaxed max-w-5xl">
              {t("slide2.p2")}
            </p>
            <p className="text-lg md:text-xl text-white/80 font-semibold leading-relaxed max-w-5xl">
              {t("slide2.p3")}
            </p>
          </div>
        </motion.div>
 
        <div className="grid grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="card-glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-all">
                <pillar.icon className="w-7 h-7 text-emerald-500 animate-pulse" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight">{pillar.title}</h3>
              <p className="text-base md:text-lg text-white/70 font-semibold leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2Purpose;
