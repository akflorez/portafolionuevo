import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { BarChart3, Zap } from "lucide-react";
import channelsBg from "@/assets/slide3-channels.jpg";

const service = {
  icon: BarChart3,
  title: "Transformación Digital & Analítica",
  desc: "Dashboards estratégicos en tiempo real para decisiones basadas en evidencia. Integración total de servicios 360.",
  details: ["Power BI Enterprise", "Dashboards Ejecutivos", "Reportes en Tiempo Real"],
  link: "https://bi.emdecob.com/",
  linkText: "Ver Portafolio BI",
  image: "/assets/apps/bi_dashboard.png"
};

const Slide3Services = () => {
  return (
    <SlideLayout bgImage={channelsBg} overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-16 z-20">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-12"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">Nuestro Portafolio</p>
          <h2 className="text-7xl font-black text-white">Servicios <span className="text-gradient-green">Estratégicos</span></h2>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card-glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all group overflow-hidden relative max-w-5xl mx-auto"
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-all mb-6">
                  <service.icon className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors tracking-tight">{service.title}</h3>
                <p className="text-xl text-white/60 leading-relaxed mb-6">{service.desc}</p>
                
                <div className="grid grid-cols-1 gap-y-3 mb-8">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-emerald-400">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      {detail}
                    </div>
                  ))}
                </div>

                {service.link && (
                  <motion.a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-emerald-500 text-noir font-bold hover:bg-emerald-400 transition-all shadow-lg"
                  >
                    <Zap className="w-5 h-5" />
                    {service.linkText}
                  </motion.a>
                )}
              </div>
              
              {service.image && (
                <div className="flex-1 relative">
                  <motion.div 
                    className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
                    initial={{ rotateY: 20, rotateX: 10 }}
                    whileHover={{ rotateY: 0, rotateX: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={service.image} alt="Dashboard Screenshot" className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent pointer-events-none"></div>
                  </motion.div>
                  {/* Elementos decorativos de la aplicación */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>
              )}
            </div>
            
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3Services;
