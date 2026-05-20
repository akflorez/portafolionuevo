import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide1EmdecobCover from "./Slide1EmdecobCover";
import Slide2Purpose from "./Slide2Purpose";
import Slide3History from "./Slide3History";
import Slide3ServicesBPO from "./Slide3ServicesBPO";
import Slide3ServicesContact from "./Slide3ServicesContact";
import Slide3ServicesDigital from "./Slide3ServicesDigital";
import Slide5Contact from "./Slide5Contact";
import logo from "/favicon.png";
import { useLanguage } from "../../contexts/LanguageContext";
import { Languages } from "lucide-react";

const slides = [
  Slide1EmdecobCover,    // 1. Portada
  Slide2Purpose,         // 2. Propósito Institucional
  Slide3History,         // 3. Conócenos / Historia
  // Slide3ServicesBPO,     // 4. BPO & BPS 360 (Hidden per request)
  Slide3ServicesContact, // 5. Contact Center Inteligente
  Slide3ServicesDigital, // 6. Transformación Digital
  Slide5Contact          // 7. Contacto
];

const CorporateSlider = () => {
  const { t, toggleLanguage } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        next();
      } else if (e.key === "ArrowUp") {
        prev();
      }
    };
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 50) {
        if (e.deltaY > 0) next();
        else prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [next, prev]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => next(), 12000);
    return () => clearInterval(timer);
  }, [current, next, isPaused]);

  const CurrentSlide = slides[current];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-noir font-montserrat"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="print:hidden h-full w-full relative">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            className="absolute inset-0"
            initial={{ y: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>

        {/* Top Navbar */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-8 no-print bg-gradient-to-b from-noir/80 to-transparent">
          <img src={logo} alt="EMDECOB" className="h-12 opacity-90 drop-shadow-lg" />
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-white/40 uppercase tracking-[0.4em]">
              {t("navbar.portfolio")}
            </span>
            <button 
              onClick={toggleLanguage}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full btn-glass-morphism hover:bg-emerald-500/10 transition-all active:scale-95"
            >
              <Languages className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span className="text-[10px] font-black text-white/70 group-hover:text-white uppercase tracking-[0.2em] transition-colors">
                {t("navbar.languageToggle")}
              </span>
            </button>
          </div>
        </div>

        {/* Vertical Progress Indicators (Right Side) */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="group relative flex items-center h-10"
            >
               <span className={`absolute right-6 text-[10px] font-black uppercase tracking-widest text-emerald-400 opacity-0 group-hover:opacity-100 transition-all ${i === current ? 'opacity-100 pr-2' : ''}`}>
                  0{i + 1}
               </span>
               <div className={`w-1 transition-all duration-500 rounded-full ${i === current ? 'bg-emerald-500 h-10 shadow-[0_0_20px_rgba(16,185,129,0.8)]' : 'bg-white/20 h-2 hover:bg-white/50'}`} />
            </button>
          ))}
        </div>

        {/* Content Number/Progress (Bottom Left) */}
        <div className="absolute bottom-10 left-10 z-50 flex items-baseline gap-2">
            <span className="text-4xl font-black text-emerald-500">
                0{current + 1}
            </span>
            <div className="h-px w-12 bg-white/20 mx-2" />
            <span className="text-xl font-bold text-white/20">
                0{slides.length}
            </span>
        </div>
      </div>

      {/* Printing is disabled per user request to remove Download button and vertical behavior */}
      <div className="hidden print:block bg-noir h-screen flex items-center justify-center text-white text-3xl text-center px-20">
          {t("print_view")}
      </div>
    </div>
  );
};

export default CorporateSlider;
