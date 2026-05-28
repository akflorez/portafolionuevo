import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { BarChart3, CheckCircle2 } from "lucide-react";
import channelsBg from "@/assets/slide3-channels.jpg";
import { useLanguage } from "../../contexts/LanguageContext";

const ScreenshotCarousel = () => {
  const appImages = [
    "/assets/apps/bi_dashboard.png",
    "/assets/apps/legal_login.png",
    "/assets/apps/legal_dashboard.png",
    "/assets/apps/ai_cally_login.png",
    "/assets/apps/ai_cally_chat.png"
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % appImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [appImages.length]);

  return (
    <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-noir/20 group">
      <AnimatePresence mode="wait">
        <motion.img
          key={appImages[index]}
          src={appImages[index]}
          alt="EMDECOB Analytics"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full object-contain bg-noir/40"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-1.5 rounded-full bg-noir/60 backdrop-blur-xl border border-white/10">
        {appImages.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'bg-emerald-400 w-6' : 'bg-white/20 w-1.5'}`} 
          />
        ))}
      </div>
    </div>
  );
};

const Slide3ServicesDigital = () => {
  const { t } = useLanguage();

  const biItems = t("slide3Digital.services.bi_items") as unknown as string[];
  const convItems = t("slide3Digital.services.conv_items") as unknown as string[];
  const customItems = t("slide3Digital.services.custom_items") as unknown as string[];

  return (
    <SlideLayout bgImage={channelsBg} overlayStrong>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-16 gap-16 z-20 w-full max-w-[140rem] mx-auto py-16">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/10 border border-emerald-500/20 animate-pulse">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-emerald-500 font-black uppercase tracking-[0.4em] text-sm leading-none">
                {t("slide3Digital.innovation")}
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tighter uppercase">
              {t("slide3Digital.title_main")} <br />
              <span className="text-gradient-green">{t("slide3Digital.title_gradient")}</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-semibold max-w-2xl leading-relaxed">
              {t("slide3Digital.desc")}
            </p>
          </div>
 
          {/* 3 Sections list */}
          <div className="space-y-6">
            {/* Section 1 */}
            <div className="space-y-2">
              <h3 className="text-xl text-white font-black uppercase tracking-wider border-l-4 border-emerald-500 pl-3 flex items-center">
                {t("slide3Digital.services.bi")}
              </h3>
              <div className="space-y-1.5 pl-4">
                {biItems.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 group">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-base md:text-lg text-white group-hover:text-emerald-300 transition-colors font-bold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Section 2 */}
            <div className="space-y-2">
              <h3 className="text-xl text-white font-black uppercase tracking-wider border-l-4 border-emerald-500 pl-3 flex items-center">
                {t("slide3Digital.services.conv")}
              </h3>
              <div className="space-y-1.5 pl-4">
                {convItems.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 group">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-base md:text-lg text-white group-hover:text-emerald-300 transition-colors font-bold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Section 3 */}
            <div className="space-y-2">
              <h3 className="text-xl text-white font-black uppercase tracking-wider border-l-4 border-emerald-500 pl-3 flex items-center">
                {t("slide3Digital.services.custom")}
              </h3>
              <div className="space-y-1.5 pl-4">
                {customItems.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 group">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-base md:text-lg text-white group-hover:text-emerald-300 transition-colors font-bold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Carousel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1 w-full max-w-5xl"
        >
          <div className="relative scale-110 origin-right">
             <ScreenshotCarousel />
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesDigital;
