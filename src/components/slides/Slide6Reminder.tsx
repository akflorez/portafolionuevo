import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide7Bg from "@/assets/slide7-backup.jpg";
import { Search, Database, Bell } from "lucide-react";
import { staggerContainer, fadeUp } from "./animations";

const reminders = [
  { icon: Search, label: "Calidad" },
  { icon: Database, label: "Confiabilidad de los datos" },
];

const phrases = [
  "Una gestión sin registro es una gestión perdida.",
  "La calidad de la información define la calidad de las decisiones.",
  "Diligenciar bien hoy evita reprocesos mañana.",
  "Cada dato correcto es un respaldo para tu gestión.",
];

const Slide6Reminder = () => (
  <SlideLayout bgImage={slide7Bg}>
    <motion.div className="flex-1 flex flex-col items-center justify-center px-20 text-center" variants={staggerContainer} initial="hidden" animate="show">
      <motion.div className="w-28 h-28 rounded-3xl bg-primary/20 flex items-center justify-center mb-10 glow-green" variants={fadeUp}>
        <Bell className="w-16 h-16 text-primary" />
      </motion.div>
      <motion.h2 className="text-6xl font-extrabold text-primary-foreground mb-10" variants={fadeUp}>Nunca lo olvides...</motion.h2>
      <motion.div className="grid grid-cols-2 gap-6 max-w-5xl mb-12" variants={staggerContainer}>
        {phrases.map((phrase, i) => (
          <motion.div 
            key={i} 
            className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex items-center justify-center min-h-[100px]"
            variants={fadeUp}
          >
            <p className="text-2xl text-primary-foreground font-bold leading-snug italic">
              "{phrase}"
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="flex gap-8 justify-center" variants={staggerContainer}>
        {reminders.map((r) => (
          <motion.div key={r.label} className="card-glass rounded-xl p-7 flex flex-col items-center gap-4 min-w-[240px]" variants={fadeUp}>
            <r.icon className="w-12 h-12 text-primary" />
            <span className="text-xl font-bold text-primary-foreground/80">{r.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide6Reminder;
