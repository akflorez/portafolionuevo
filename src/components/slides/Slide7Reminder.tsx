import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide7Bg from "@/assets/slide7-backup.jpg";
import { Mic, Phone, MessageCircle, ShieldCheck, FileCheck2 } from "lucide-react";
import { staggerContainer, fadeUp } from "./animations";

const reminders = [
  { icon: Mic, label: "Grabación" },
  { icon: Phone, label: "Llamadas" },
  { icon: FileCheck2, label: "Evidencia" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: ShieldCheck, label: "Cumplimiento" },
];

const Slide7Reminder = () => (
  <SlideLayout bgImage={slide7Bg}>
    <motion.div className="flex-1 flex flex-col items-center justify-center px-20 text-center" variants={staggerContainer} initial="hidden" animate="show">
      <motion.div className="w-28 h-28 rounded-3xl bg-primary/20 flex items-center justify-center mb-10 glow-green" variants={fadeUp}>
        <ShieldCheck className="w-16 h-16 text-primary" />
      </motion.div>
      <motion.h2 className="text-7xl font-extrabold text-primary-foreground mb-8" variants={fadeUp}>Recuerda</motion.h2>
      <motion.p className="text-3xl text-primary-foreground/70 max-w-4xl mb-16 font-light leading-relaxed" variants={fadeUp}>
        Debes garantizar que todas las llamadas estén <span className="text-primary font-semibold">grabadas</span> o cuenten con <span className="text-primary font-semibold">respaldo en WhatsApp</span>.
      </motion.p>
      <motion.div className="flex gap-8" variants={staggerContainer}>
        {reminders.map((r) => (
          <motion.div key={r.label} className="card-glass rounded-xl p-7 flex flex-col items-center gap-4 min-w-[140px]" variants={fadeUp}>
            <r.icon className="w-12 h-12 text-primary" />
            <span className="text-lg font-semibold text-primary-foreground/70">{r.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide7Reminder;
