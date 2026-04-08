import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Shield, BarChart3, Users } from "lucide-react";
import teamBg from "@/assets/slide2-team.jpg";

const Slide2Purpose = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Firmeza del derecho",
      desc: "Actuamos con la rigurosidad legal necesaria para proteger el patrimonio de nuestros clientes."
    },
    {
      icon: BarChart3,
      title: "Precisión de la analítica",
      desc: "Convertimos datos en decisiones estratégicas y resultados auditables."
    },
    {
      icon: Users,
      title: "Empatía humana",
      desc: "Atención personalizada que fortalece las relaciones comerciales a largo plazo."
    }
  ];

  return (
    <SlideLayout bgImage={teamBg} overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">Nuestra Esencia</p>
          <h2 className="text-7xl font-black text-white mb-8 leading-tight">
            Propósito <span className="text-gradient-green">Institucional</span>
          </h2>
          <p className="text-2xl text-white/70 font-light leading-relaxed mb-16 max-w-3xl">
            Protegemos el patrimonio de nuestros clientes, fortalecemos sus relaciones comerciales 
            y entregamos resultados auditables a través de procesos críticos integrados.
          </p>
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
              <p className="text-lg text-white/50 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2Purpose;
