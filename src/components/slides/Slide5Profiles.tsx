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
      <motion.div className="flex items-center gap-4 mb-5" variants={fadeUp}>
        <span className="text-lg font-bold text-noir-foreground bg-primary/20 px-5 py-2 rounded-full border-glow">PASO 3</span>
      </motion.div>
      <motion.h2 className="text-7xl font-bold text-primary-foreground mb-5" variants={fadeUp}>Perfil de gestión</motion.h2>
      <motion.p className="text-2xl text-primary-foreground/60 mb-14 font-light" variants={fadeUp}>
        Selecciona el tipo de gestión realizada.
      </motion.p>
      <motion.div className="grid grid-cols-4 gap-5 max-w-6xl" variants={staggerFast}>
        {profiles.map((p) => (
          <motion.div key={p.label} className="card-glass rounded-xl p-6 flex items-center gap-5" variants={fadeUpSmall}>
            <div className="w-14 h-14 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
              <p.icon className="w-8 h-8 text-primary" />
            </div>
            <span className="text-xl font-semibold text-primary-foreground">{p.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide5Profiles;
