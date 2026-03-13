import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide6Bg from "@/assets/slide6-analysis.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const profiles = [
  { title: "Pago total", desc: "Confirma pago completo de la obligación", color: "bg-emerald-500/20 text-emerald-400" },
  { title: "Abono / cuota", desc: "Pago parcial o compromiso parcial", color: "bg-teal-500/20 text-teal-400" },
  { title: "Acuerdo de pago", desc: "Negociación con fechas y valores específicos", color: "bg-cyan-500/20 text-cyan-400" },
  { title: "Volver a llamar", desc: "Cliente dispuesto a continuar luego", color: "bg-blue-500/20 text-blue-400" },
  { title: "Renuente", desc: "No muestra intención de acuerdo", color: "bg-orange-500/20 text-orange-400" },
  { title: "Contacto con tercero", desc: "No es el titular, sin negociación directa", color: "bg-amber-500/20 text-amber-400" },
  { title: "Ilocalizado", desc: "No se puede ubicar o no existe data", color: "bg-red-500/20 text-red-400" },
  { title: "Retirado de gestión", desc: "El caso sale del proceso activo", color: "bg-gray-500/20 text-gray-400" },
];

const Slide6ProfileDetails = () => (
  <SlideLayout bgImage={slide6Bg} overlayStrong>
    <motion.div
      className="flex-1 flex flex-col justify-center px-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2 className="text-4xl font-bold text-primary-foreground mb-10" variants={item}>
        Perfiles de <span className="text-gradient-green">gestión</span>
      </motion.h2>
      <motion.div className="grid grid-cols-2 gap-4 max-w-5xl" variants={container}>
        {profiles.map((p) => (
          <motion.div
            key={p.title}
            className="card-glass rounded-xl p-5 flex items-start gap-4"
            variants={item}
          >
            <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${p.color.split(' ')[0]}`}>
              <div className={`w-3 h-3 rounded-full ${p.color.split(' ')[0]}`} />
            </div>
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
