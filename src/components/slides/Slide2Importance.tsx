import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide2Bg from "@/assets/slide2-team.jpg";
import { Search, GitBranch, Users, ArrowRightLeft } from "lucide-react";
import { staggerContainer, fadeUp } from "./animations";

const cards = [
  { icon: Search, title: "Control", desc: "Seguimiento claro de cada interacción" },
  { icon: GitBranch, title: "Trazabilidad", desc: "Historial completo y auditable" },
  { icon: ArrowRightLeft, title: "Continuidad", desc: "Sin perder el hilo entre gestiones" },
  { icon: Users, title: "Trabajo en equipo", desc: "Información disponible para todos" },
];

const Slide2Importance = () => (
  <SlideLayout bgImage={slide2Bg} overlayStrong>
    <motion.div className="flex-1 flex flex-col justify-center px-20" variants={staggerContainer} initial="hidden" animate="show">
      <motion.p className="text-primary font-semibold text-lg uppercase tracking-[0.3em] mb-5" variants={fadeUp}>Importancia</motion.p>
      <motion.h2 className="text-7xl font-bold text-primary-foreground mb-8 leading-tight" variants={fadeUp}>
        ¿Por qué es clave registrar <span className="text-gradient-green">cada gestión?</span>
      </motion.h2>
      <motion.p className="text-2xl text-primary-foreground/60 max-w-3xl mb-14 font-light" variants={fadeUp}>
        Registrar todas las gestiones en el CRM permite mantener un control claro, organizado y trazable de cada interacción.
      </motion.p>
      <motion.div className="grid grid-cols-4 gap-8" variants={staggerContainer}>
        {cards.map((card) => (
          <motion.div key={card.title} className="card-glass rounded-xl p-8 flex flex-col items-start gap-5" variants={fadeUp}>
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
              <card.icon className="w-9 h-9 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground">{card.title}</h3>
            <p className="text-lg text-primary-foreground/50 font-light">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide2Importance;
