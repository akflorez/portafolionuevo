import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide3Bg from "@/assets/slide3-channels.jpg";
import { Phone, PhoneIncoming, MessageCircle, Mail, Building2, MapPin } from "lucide-react";
import { staggerContainer, scaleIn } from "./animations";
import { fadeUp } from "./animations";

const channels = [
  { icon: Phone, label: "Hacer llamada" },
  { icon: PhoneIncoming, label: "Recibir llamada" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Mail, label: "E-mail" },
  { icon: Building2, label: "Presencial" },
  { icon: MapPin, label: "Visita" },
];

const Slide3Action = () => (
  <SlideLayout bgImage={slide3Bg} overlayStrong>
    <motion.div className="flex-1 flex flex-col justify-center px-20" variants={staggerContainer} initial="hidden" animate="show">
      <motion.div className="flex items-center gap-4 mb-4" variants={fadeUp}>
        <span className="text-sm font-bold text-noir-foreground bg-primary/20 px-4 py-1.5 rounded-full border-glow">PASO 1</span>
      </motion.div>
      <motion.h2 className="text-5xl font-bold text-primary-foreground mb-4" variants={fadeUp}>Acción</motion.h2>
      <motion.p className="text-xl text-primary-foreground/60 mb-14 font-light max-w-xl" variants={fadeUp}>
        Selecciona el medio de comunicación usado para contactar al deudor.
      </motion.p>
      <motion.div className="grid grid-cols-3 gap-5 max-w-3xl" variants={staggerContainer}>
        {channels.map((ch) => (
          <motion.div key={ch.label} className="card-glass-strong rounded-xl p-6 flex items-center gap-5" variants={scaleIn}>
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 glow-green">
              <ch.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-lg font-semibold text-primary-foreground">{ch.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide3Action;
