import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide7Bg from "@/assets/slide7-backup.jpg";
import { Mic, Phone, MessageCircle, ShieldCheck, FileCheck2 } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const reminders = [
  { icon: Mic, label: "Grabación" },
  { icon: Phone, label: "Llamadas" },
  { icon: FileCheck2, label: "Evidencia" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: ShieldCheck, label: "Cumplimiento" },
];

const Slide7Reminder = () => (
  <SlideLayout bgImage={slide7Bg}>
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-20 text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="w-24 h-24 rounded-3xl bg-primary/20 flex items-center justify-center mb-8 glow-green"
        variants={item}
      >
        <ShieldCheck className="w-12 h-12 text-primary" />
      </motion.div>
      <motion.h2 className="text-5xl font-extrabold text-primary-foreground mb-6" variants={item}>
        Recuerda
      </motion.h2>
      <motion.p className="text-2xl text-primary-foreground/70 max-w-3xl mb-14 font-light leading-relaxed" variants={item}>
        Debes garantizar que todas las llamadas estén <span className="text-primary font-semibold">grabadas</span> o cuenten con <span className="text-primary font-semibold">respaldo en WhatsApp</span>.
      </motion.p>
      <motion.div className="flex gap-6" variants={container}>
        {reminders.map((r) => (
          <motion.div
            key={r.label}
            className="card-glass rounded-xl p-5 flex flex-col items-center gap-3 min-w-[120px]"
            variants={item}
          >
            <r.icon className="w-8 h-8 text-primary" />
            <span className="text-sm font-semibold text-primary-foreground/70">{r.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide7Reminder;
