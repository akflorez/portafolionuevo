import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide1Hero from "./Slide1Hero";
import Slide2Importance from "./Slide2Importance";
import Slide3Action from "./Slide3Action";
import Slide4Contact from "./Slide4Contact";
import Slide5Profiles from "./Slide5Profiles";
import Slide6ProfileDetails from "./Slide6ProfileDetails";
import Slide7Reminder from "./Slide7Reminder";
import logo from "@/assets/emdecob-logo-wide.png";

const slides = [
  Slide1Hero,
  Slide2Importance,
  Slide3Action,
  Slide4Contact,
  Slide5Profiles,
  Slide6ProfileDetails,
  Slide7Reminder,
];

const INTERVAL = 20000;

const CorporateSlider = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 100 / (INTERVAL / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [next]);

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
          Capacitación CRM
        </span>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setProgress(0); }}
            className={`progress-dot ${i === current ? 'progress-dot-active' : 'progress-dot-inactive'}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-50 h-1 bg-primary-foreground/5">
        <motion.div
          className="h-full bg-primary/60"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-10 z-50">
        <span className="text-sm font-bold text-primary-foreground/20">
          {String(current + 1).padStart(2, "0")}{" "}
          <span className="text-primary-foreground/10">/</span>{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default CorporateSlider;
