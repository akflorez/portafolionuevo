import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Star, TrendingUp, Award, Clock } from "lucide-react";
import analysisBg from "@/assets/slide6-analysis.jpg";
import { useLanguage } from "../../contexts/LanguageContext";

const Slide3History = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Clock, label: t("slide3History.stats.track_record"), value: t("slide3History.stats.years"), suffix: t("slide3History.stats.since") },
    { icon: Star, label: t("slide3History.stats.specialization"), value: t("slide3History.stats.specialization"), valueOverride: "BPS", suffix: t("slide3History.stats.critical") },
    { icon: Award, label: t("slide3History.stats.quality"), value: "100%", suffix: t("slide3History.stats.auditable") },
    { icon: TrendingUp, label: t("slide3History.stats.growth"), value: t("slide3History.stats.sustained"), suffix: t("slide3History.stats.market") }
  ];

  return (
    <SlideLayout bgImage={analysisBg}>
      <div className="flex-1 flex items-center px-20 gap-20">
        <motion.div 
          className="w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative group flex flex-col gap-6">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-2xl group-hover:bg-emerald-500/30 transition-all duration-500"></div>
            <img 
              src="/equipo-emdecob.png" 
              alt="Socios Fundadores EMDECOB" 
              className="relative rounded-2xl w-full h-auto object-contain border border-white/10"
            />
            <div className="relative card-glass p-6 rounded-2xl border border-white/10 shadow-xl">
              <p className="text-emerald-400 font-bold mb-2 uppercase tracking-tighter">{t("slide3History.leadership")}</p>
              <p className="text-white text-lg italic">"{t("slide3History.mission")}"</p>
            </div>
          </div>
        </motion.div>

        <div className="w-1/2 flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-500 font-bold uppercase tracking-widest mb-4"
          >
            {t("slide3History.trayectoria")}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl font-black text-white mb-8"
          >
            {t("slide3History.conocenos")}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-xl text-white font-bold leading-relaxed mb-12 drop-shadow-md"
          >
            <p>
              {t("slide3History.p1")}
            </p>
            <p>
              {t("slide3History.p2")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <stat.icon className="w-10 h-10 text-emerald-500" />
                <div>
                  <p className="text-2xl font-bold text-white">{stat.valueOverride || stat.value}</p>
                  <p className="text-sm text-white/40 uppercase tracking-tighter">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3History;
