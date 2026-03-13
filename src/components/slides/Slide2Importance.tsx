import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide2Bg from "@/assets/slide2-team.jpg";
import { Search, GitBranch, Users, ArrowRightLeft } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cards = [
  { icon: Search, title: "Control", desc: "Seguimiento claro de cada interacción" },
  { icon: GitBranch, title: "Trazabilidad", desc: "Historial completo y auditable" },
  { icon: ArrowRightLeft, title: "Continuidad", desc: "Sin perder el hilo entre gestiones" },
  { icon: Users, title: "Trabajo en equipo", desc: "Información disponible para todos" },
];

const Slide2Importance = () => (
  <SlideLayout bgImage={slide2Bg} overlayStrong>
    <motion.div
      className="flex-1 flex flex-col justify-center px-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-4" variants={item}>
        Importancia
      </motion.p>
      <motion.h2 className="text-5xl font-bold text-primary-foreground mb-6 leading-tight" variants={item}>
        ¿Por qué es clave registrar{" "}
        <span className="text-gradient-green">cada gestión?</span>
      </motion.h2>
      <motion.p className="text-lg text-primary-foreground/60 max-w-2xl mb-12 font-light" variants={item}>
        Registrar todas las gestiones en el CRM permite mantener un control claro, organizado y trazable de cada interacción.
      </motion.p>
      <motion.div className="grid grid-cols-4 gap-6" variants={container}>
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className="card-glass rounded-xl p-6 flex flex-col items-start gap-4 hover:scale-[1.02] transition-transform"
            variants={item}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <card.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary-foreground">{card.title}</h3>
            <p className="text-sm text-primary-foreground/50 font-light">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide2Importance;
