import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide5Bg from "@/assets/slide5-profiles.jpg";
import { CheckCircle2, Coins, Handshake, PhoneCall, XCircle, UserX, HelpCircle, LogOut } from "lucide-react";
import { staggerContainer, staggerFast, fadeUp, fadeUpSmall } from "./animations";

const profiles = [
  { icon: CheckCircle2, label: "Pago total" },
  { icon: Coins, label: "Abono / cuota" },
  { icon: Handshake, label: "Acuerdo de pago" },
  { icon: PhoneCall, label: "Volver a llamar" },
  { icon: XCircle, label: "Renuente" },
  { icon: UserX, label: "Contacto con tercero" },
  { icon: HelpCircle, label: "Ilocalizado" },
  { icon: LogOut, label: "Retirado de gestión" },
];

const Slide5Profiles = () => (
  <SlideLayout bgImage={slide5Bg} overlayStrong>
    <motion.div className="flex-1 flex flex-col justify-center px-20" variants={staggerContainer} initial="hidden" animate="show">
      <motion.div className="flex items-center gap-4 mb-4" variants={fadeUp}>
        <span className="text-sm font-bold text-noir-foreground bg-primary/20 px-4 py-1.5 rounded-full border-glow">PASO 3</span>
      </motion.div>
      <motion.h2 className="text-5xl font-bold text-primary-foreground mb-4" variants={fadeUp}>Perfil de gestión</motion.h2>
      <motion.p className="text-xl text-primary-foreground/60 mb-12 font-light" variants={fadeUp}>
        Selecciona el tipo de gestión realizada.
      </motion.p>
      <motion.div className="grid grid-cols-4 gap-4 max-w-5xl" variants={staggerFast}>
        {profiles.map((p) => (
          <motion.div key={p.label} className="card-glass rounded-xl p-5 flex items-center gap-4" variants={fadeUpSmall}>
            <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-base font-semibold text-primary-foreground">{p.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide5Profiles;
