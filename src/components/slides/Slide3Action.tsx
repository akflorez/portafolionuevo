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
      <motion.div className="flex items-center gap-4 mb-5" variants={fadeUp}>
        <span className="text-lg font-bold text-noir-foreground bg-primary/20 px-5 py-2 rounded-full border-glow">PASO 1</span>
      </motion.div>
      <motion.h2 className="text-7xl font-bold text-primary-foreground mb-5" variants={fadeUp}>Acción</motion.h2>
      <motion.p className="text-2xl text-primary-foreground/60 mb-16 font-light max-w-2xl" variants={fadeUp}>
        Selecciona el medio de comunicación usado para contactar al deudor.
      </motion.p>
      <motion.div className="grid grid-cols-3 gap-6 max-w-4xl" variants={staggerContainer}>
        {channels.map((ch) => (
          <motion.div key={ch.label} className="card-glass-strong rounded-xl p-7 flex items-center gap-6" variants={scaleIn}>
            <div className="w-18 h-18 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 glow-green" style={{width: '4.5rem', height: '4.5rem'}}>
              <ch.icon className="w-10 h-10 text-primary" />
            </div>
            <span className="text-2xl font-semibold text-primary-foreground">{ch.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide3Action;
