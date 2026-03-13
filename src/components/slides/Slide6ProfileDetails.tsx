import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide6Bg from "@/assets/slide6-analysis.jpg";
import { staggerContainer, staggerFast, fadeUp, fadeUpSmall } from "./animations";

const profiles = [
  { title: "Pago total", desc: "Confirma pago completo de la obligación", dot: "bg-emerald-500/40" },
  { title: "Abono / cuota", desc: "Pago parcial o compromiso parcial", dot: "bg-teal-500/40" },
  { title: "Acuerdo de pago", desc: "Negociación con fechas y valores específicos", dot: "bg-cyan-500/40" },
  { title: "Volver a llamar", desc: "Cliente dispuesto a continuar luego", dot: "bg-blue-500/40" },
  { title: "Renuente", desc: "No muestra intención de acuerdo", dot: "bg-orange-500/40" },
  { title: "Contacto con tercero", desc: "No es el titular, sin negociación directa", dot: "bg-amber-500/40" },
  { title: "Ilocalizado", desc: "No se puede ubicar o no existe data", dot: "bg-red-500/40" },
  { title: "Retirado de gestión", desc: "El caso sale del proceso activo", dot: "bg-gray-500/40" },
];

const Slide6ProfileDetails = () => (
  <SlideLayout bgImage={slide6Bg} overlayStrong>
    <motion.div className="flex-1 flex flex-col justify-center px-20" variants={staggerContainer} initial="hidden" animate="show">
      <motion.h2 className="text-4xl font-bold text-primary-foreground mb-10" variants={fadeUp}>
        Perfiles de <span className="text-gradient-green">gestión</span>
      </motion.h2>
      <motion.div className="grid grid-cols-2 gap-4 max-w-5xl" variants={staggerFast}>
        {profiles.map((p) => (
          <motion.div key={p.title} className="card-glass rounded-xl p-5 flex items-start gap-4" variants={fadeUpSmall}>
            <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${p.dot}`} />
            <div>
              <h3 className="text-lg font-bold text-primary-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-primary-foreground/50 font-light">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide6ProfileDetails;
