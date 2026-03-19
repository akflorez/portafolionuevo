import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide2Bg from "@/assets/slide2-team.jpg";
import { PhoneCall, TrendingUp, Award, LayoutDashboard } from "lucide-react";
import { staggerContainer, fadeUp } from "./animations";

const cards = [
  { 
    icon: PhoneCall, 
    title: "1. Tasa de Contacto", 
    desc: "Mide la capacidad de lograr contacto efectivo con el deudor (llamada, mensaje, visita). Es la base de toda gestión, ya que sin contacto no hay recuperación." 
  },
  { 
    icon: TrendingUp, 
    title: "2. Tasa de Conversión", 
    desc: "Es el indicador que mide cuántos contactos directos efectivos con el deudor se transforman en acuerdos de pago. Refleja la capacidad de negociación del equipo." 
  },
  { 
    icon: Award, 
    title: "3. Efectividad", 
    desc: "Evalúa el desempeño del agente en términos de resultados reales: acuerdos cumplidos, pagos recibidos." 
  },
  { 
    icon: LayoutDashboard, 
    title: "4. Dashboard", 
    desc: "Es la herramienta que centraliza y visualiza los indicadores clave (conversión, contactabilidad, efectividad, recaudo, etc.) para facilitar el seguimiento, control y toma de decisiones." 
  },
];

const Slide2Importance = () => (
  <SlideLayout bgImage={slide2Bg} overlayStrong>
    <motion.div className="flex-1 flex flex-col justify-center px-20" variants={staggerContainer} initial="hidden" animate="show">
      <motion.p className="text-primary font-semibold text-lg uppercase tracking-[0.3em] mb-5" variants={fadeUp}>Importancia</motion.p>
      <motion.h2 className="text-7xl font-bold text-primary-foreground mb-8 leading-tight" variants={fadeUp}>
        ¿Por qué llenar el formato <span className="text-gradient-green">correctamente?</span>
      </motion.h2>
      <motion.p className="text-xl text-primary-foreground max-w-4xl mb-12 font-bold leading-relaxed shadow-sm" variants={fadeUp}>
        El llenado riguroso de este formato no es un simple paso administrativo, es el <span className="text-primary font-extrabold uppercase bg-primary/10 px-1 rounded">motor estratégico</span> que impulsa nuestra toma de decisiones. Cada dato que registras aquí se transforma en inteligencia de negocio vital. A través de este consolidado, medimos con absoluta precisión la <span className="text-primary font-extrabold underline decoration-primary/30">conversión real</span> de los contactos, evaluamos la <span className="text-primary font-extrabold">contactabilidad efectiva</span>, y dimensionamos el valor de cada interacción. Tu correcta tipificación alimenta de forma directa el <span className="text-gradient-green font-extrabold uppercase">tablero de control directivo (dashboard)</span>, reflejando fielmente tu efectividad como agente y permitiendo a la compañía escalar mejores estrategias. Eres una pieza fundamental en nuestra cadena de valor.
      </motion.p>
      <motion.div className="grid grid-cols-4 gap-6" variants={staggerContainer}>
        {cards.map((card) => (
          <motion.div key={card.title} className="card-glass rounded-xl p-8 flex flex-col items-start gap-5" variants={fadeUp}>
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
              <card.icon className="w-9 h-9 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground">{card.title}</h3>
            <p className="text-lg text-primary-foreground/90 font-medium leading-tight">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide2Importance;
