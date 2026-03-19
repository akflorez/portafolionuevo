import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide1Hero from "./Slide1Hero";
import Slide2Importance from "./Slide2Importance";
import Slide3FormatoP1 from "./Slide3FormatoP1";
import Slide4FormatoP2 from "./Slide4FormatoP2";
import Slide5FormatoP3 from "./Slide5FormatoP3";
import Slide6Reminder from "./Slide6Reminder";
import Slide7Process from "./Slide7Process";
import logo from "@/assets/emdecob-logo-wide.png";
import Slide8Restrictions from "./Slide8Restrictions";

const slides = [
  Slide1Hero,
  Slide2Importance,
  Slide3FormatoP1,
  Slide4FormatoP2,
  Slide5FormatoP3,
  Slide7Process,
  Slide8Restrictions,
  Slide6Reminder,
];

const CorporateSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Keyboard navigation
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

  const CurrentSlide = slides[current];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-noir font-montserrat">
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

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5">
        <img src={logo} alt="EMDECOB" className="h-8 brightness-0 invert opacity-60" />
        <span className="text-xs font-medium text-primary-foreground/30 uppercase tracking-[0.25em]">
          Seguimiento de Acuerdos
        </span>
      </div>

      {/* Navigation cues (Left / Right invisible buttons) */}
      <button onClick={prev} className="absolute left-0 top-0 bottom-0 w-24 z-40 cursor-pointer opacity-0" aria-label="Anterior" />
      <button onClick={next} className="absolute right-0 top-0 bottom-0 w-24 z-40 cursor-pointer opacity-0" aria-label="Siguiente" />

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`progress-dot transition-all duration-300 ${i === current ? 'bg-primary w-8 h-2' : 'bg-primary/20 w-2 h-2 hover:bg-primary/50'}`}
          />
        ))}
      </div>

      {/* Credit and Slide counter */}
      <div className="absolute bottom-6 right-10 z-50 flex flex-col items-end gap-1">
        <span className="text-sm font-bold text-primary-foreground/40">
          {String(current + 1).padStart(2, "0")}{" "}
          <span className="text-primary-foreground/20">/</span>{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
        <span className="text-[10px] uppercase font-semibold text-primary/60 tracking-wider">
          Realizado por el área de analítica
        </span>
      </div>
    </div>
  );
};

export default CorporateSlider;
