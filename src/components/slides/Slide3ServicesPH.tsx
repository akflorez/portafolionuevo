import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Home, CheckCircle2, ClipboardCheck } from "lucide-react";
import analysisBg from "@/assets/slide6-analysis.jpg";
import { useLanguage } from "../../contexts/LanguageContext";

const Slide3ServicesPH = () => {
  const { t } = useLanguage();

  const features = t("slide3PH.features") as unknown as string[];

  // Split features into two columns of 4 items for readability
  const firstCol = features.slice(0, 4);
  const secondCol = features.slice(4);

  return (
    <SlideLayout bgImage={analysisBg} overlayStrong>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-20 gap-16 z-20 w-full max-w-[140rem] mx-auto py-16">
        
        {/* Left Side Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-[1.5] space-y-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                <Home className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs font-black">
                {t("slide3PH.tagline")}
              </p>
            </div>
            <h2 className="text-5xl font-black text-white leading-tight mb-4 tracking-tighter">
              {t("slide3PH.title_main")} <br />
              <span className="text-gradient-green">{t("slide3PH.title_gradient")}</span>
            </h2>
            <p className="text-base text-white/85 font-medium max-w-3xl leading-relaxed">
              {t("slide3PH.desc")}
            </p>
          </div>

          {/* 2-Column Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            <div className="space-y-3">
              {firstCol.map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-sm text-white/95 group-hover:text-white transition-colors font-semibold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {secondCol.map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-sm text-white/95 group-hover:text-white transition-colors font-semibold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side Visual Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl aspect-[4/5] bg-noir/20">
              <img 
                src="/propiedad-horizontal.webp" 
                alt="Propiedad Horizontal" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent"></div>
              
              {/* Overlay stats/badge card */}
              <div className="absolute bottom-8 left-8 right-8 card-glass p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <ClipboardCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Recuperación Efectiva</h4>
                  <p className="text-sm text-white/80 font-medium">Garantía y salud financiera para tu comunidad</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesPH;
