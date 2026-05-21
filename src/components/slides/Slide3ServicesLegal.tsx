import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Scale, ShieldCheck, Briefcase, Users, Landmark, Heart, Gavel, Handshake } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Slide3ServicesLegal = () => {
  const { t } = useLanguage();

  const areas = [
    { icon: Scale,     label: t("slide3Legal.civil") },
    { icon: Briefcase, label: t("slide3Legal.commercial") },
    { icon: Users,     label: t("slide3Legal.labor") },
    { icon: Landmark,  label: t("slide3Legal.administrative") },
    { icon: Heart,     label: t("slide3Legal.family") },
  ];

  const stages = [
    { icon: Gavel,     label: t("slide3Legal.judicial") },
    { icon: Handshake, label: t("slide3Legal.extrajudicial") },
  ];

  return (
    <SlideLayout bgImage="/servicios-juridicos-bg.png" overlayStrong>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-20 gap-16 z-20 w-full max-w-[130rem] mx-auto py-12">

        {/* Left — Title + desc */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
              <Scale className="w-7 h-7 text-emerald-400" />
            </div>
            <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs">
              {t("slide3Legal.tagline")}
            </p>
          </div>

          <h2 className="text-8xl font-black text-white leading-[0.85] tracking-tighter">
            {t("slide3Legal.title_main")} <br />
            <span className="text-gradient-green">{t("slide3Legal.title_gradient")}</span>
          </h2>

          <p className="text-2xl text-white/90 font-medium max-w-2xl leading-relaxed">
            {t("slide3Legal.desc")}
          </p>

          {/* Stages as horizontal pills */}
          <div className="flex flex-wrap gap-4 pt-2">
            {stages.map((s) => (
              <div key={s.label} className="flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500/10 border border-emerald-500/25 group hover:bg-emerald-500/20 transition-all">
                <s.icon className="w-6 h-6 text-emerald-400" />
                <span className="text-lg text-white/95 font-bold uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Icon cards grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 grid grid-cols-2 gap-6 w-full max-w-xl"
        >
          {areas.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`card-glass border border-white/8 rounded-[2.5rem] p-8 flex flex-col items-center text-center gap-4 group hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 ${
                i === 4 ? "col-span-2 mx-auto w-full md:max-w-[50%]" : ""
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300 shadow-lg">
                <area.icon className="w-8 h-8 text-emerald-400 group-hover:text-noir transition-colors duration-300" />
              </div>
              <span className="text-white font-bold text-lg uppercase tracking-tight leading-snug group-hover:text-emerald-300 transition-colors">
                {area.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesLegal;
