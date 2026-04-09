import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, BarChart3, Binary } from "lucide-react";
import teamBg from "@/assets/slide2-team.jpg";

const Slide2Purpose = () => {
  const pillars = [
    {
      icon: Binary,
      title: "BPS & Tecnología",
      desc: "Combinamos la ejecución de procesos operativos con el desarrollo de soluciones tecnológicas basadas en datos e IA."
    },
    {
      icon: BarChart3,
      title: "Analítica Estratégica",
      desc: "Diseñamos soluciones que optimizan procesos, automatizan operaciones y convierten los datos en herramientas de decisión."
    },
    {
      icon: Zap,
      title: "Evolución Digital",
      desc: "Desarrollamos soluciones independientes de automatización e IA para modelos eficientes, escalables y en tiempo real."
    }
  ];

  return (
    <SlideLayout bgImage={teamBg} overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">Nuestra Esencia</p>
          <h2 className="text-7xl font-black text-white mb-8 leading-tight">
            Propósito <span className="text-gradient-green">Institucional</span>
          </h2>
          
          <div className="space-y-6 mb-16">
            <p className="text-2xl text-white/90 font-medium leading-relaxed max-w-4xl">
              EMDECOB es una empresa de **Business Process Services (BPS)** y transformación digital que combina la ejecución de procesos operativos con el desarrollo de soluciones tecnológicas basadas en datos, analítica e inteligencia artificial.
            </p>
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-4xl">
              Contamos con experiencia en la gestión integral de cartera y servicios jurídicos, lo que nos permite comprender a profundidad los retos operativos de las organizaciones. A partir de ese conocimiento, diseñamos e implementamos soluciones de transformación digital que optimizan procesos, automatizan operaciones y convierten los datos en herramientas estratégicas para la toma de decisiones.
            </p>
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-4xl">
              Como línea independiente, desarrollamos tableros de datos, portales digitales con IA y soluciones de automatización orientadas a diversos sectores, permitiéndoles evolucionar hacia modelos eficientes, escalables y basados en información en tiempo real.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="card-glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
                <pillar.icon className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-base text-white/50 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2Purpose;
