import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import Slide1EmdecobCover from "./Slide1EmdecobCover";
import Slide2Purpose from "./Slide2Purpose";
import Slide3History from "./Slide3History";
import Slide3Services from "./Slide3Services";
import Slide4Differentiators from "./Slide4Differentiators";
import Slide4Clients from "./Slide4Clients";
import Slide5Contact from "./Slide5Contact";
import logo from "@/assets/emdecob-logo-wide.png";

const slides = [
  Slide1EmdecobCover,    // 1. Portada
  Slide2Purpose,         // 2. Propósito Institucional
  Slide3History,         // 3. Conócenos / Historia
  Slide3Services,        // 4. Servicios Estratégicos
  Slide4Differentiators, // 5. Diferenciadores
  Slide4Clients,         // 6. Casos de Éxito
  Slide5Contact          // 7. Contacto
];

const CorporateSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  useEffect(() => {
    if (isPaused) return;
    const delay = 12000; // Tiempo estándar por diapositiva
    const timer = setInterval(() => {
      next();
    }, delay);
    return () => clearInterval(timer);
  }, [current, next, isPaused]);

  const CurrentSlide = slides[current];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-noir font-montserrat"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsPaused(false), 10000);
      }}
    >
      {/* Vista Normal (Slider) */}
      <div className="print:hidden h-full w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>

        {/* Barra superior */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 no-print">
          <div className="flex items-center gap-6">
            <img src={logo} alt="EMDECOB" className="h-8 brightness-0 invert opacity-60" />
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-bold transition-all"
            >
              <Download className="w-4 h-4" />
              Descargar PDF
            </button>
          </div>
          <span className="text-xs font-medium text-primary-foreground/30 uppercase tracking-[0.25em]">
            Portafolio Corporativo
          </span>
        </div>

        {/* Flechas de navegación */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 shadow-lg group"
          aria-label="Anterior"
        >
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">chevron_left</span>
        </button>
        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 shadow-lg group"
          aria-label="Siguiente"
        >
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">chevron_right</span>
        </button>

        {/* Puntos de progreso */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`progress-dot transition-all duration-300 ${i === current ? 'bg-emerald-400 w-8 h-2' : 'bg-white/20 w-2 h-2 hover:bg-white/50'}`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="absolute bottom-6 right-10 z-50 flex flex-col items-end gap-1">
          <span className="text-sm font-bold text-primary-foreground/40">
            {String(current + 1).padStart(2, "0")}{" "}
            <span className="text-primary-foreground/20">/</span>{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Vista de Impresión (Todas las diapositivas) */}
      <div className="hidden print:block bg-noir">
        {slides.map((Slide, index) => (
          <div key={index} className="print-slide-container">
            <Slide />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateSlider;
