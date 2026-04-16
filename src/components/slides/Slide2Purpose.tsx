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
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">{t("slide2.essence")}</p>
          <h2 className="text-7xl font-black text-white mb-8 leading-tight">
            {t("slide2.title_main")} <span className="text-gradient-green">{t("slide2.title_gradient")}</span>
          </h2>
          
          <div className="space-y-6 mb-16">
            <p className="text-2xl text-white/90 font-medium leading-relaxed max-w-4xl">
              {t("slide2.p1")}
            </p>
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-4xl">
              {t("slide2.p2")}
            </p>
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-4xl">
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
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
                <pillar.icon className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-base text-white/50 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2Purpose;
