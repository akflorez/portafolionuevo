import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Headphones, BarChart3, Home, Zap } from "lucide-react";
import channelsBg from "@/assets/slide3-channels.jpg";

const services = [
  {
    icon: Headphones,
    title: "Contact Center Multicanal",
    desc: "Operamos campañas de atención, ventas y soporte en diversos canales.",
    details: ["WhatsApp & Chat", "IVR & Voz", "Mail & SMS"],
    moreInfo: "Cobro administrativo, pre-jurídico, agendamiento de citas y servicios de fidelización."
  },
  {
    icon: BarChart3,
    title: "Analítica de Datos",
    desc: "Dashboards estratégicos en tiempo real para decisiones basadas en evidencia.",
    details: ["Power BI Enterprise", "Reportes dinámicos"],
    link: "https://bi.emdecob.com/",
    linkText: "Ver Portafolio BI"
  },
  {
    icon: Home,
    title: "Gestión Propiedad Horizontal",
    desc: "Recuperación de cartera para copropiedades con enfoque humano y firme.",
    details: ["Cobro administrativo", "Conciliación efectiva", "Trazabilidad Total"]
  },
  {
    icon: Zap,
    title: "Integración de Servicios 360",
    desc: "Soluciones a medida que integran tecnología, talento y procesos.",
    details: ["BPO Personalizado"]
  }
];

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

        <div className="grid grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all group overflow-hidden relative"
            >
              <div className="relative z-10 flex gap-8">
                <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-all">
                  <service.icon className="w-10 h-10 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors tracking-tight">{service.title}</h3>
                  <p className="text-base text-white/50 leading-relaxed mb-4">{service.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-500/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        {detail}
                      </div>
                    ))}
                  </div>

                  {service.moreInfo && (
                    <p className="text-sm text-emerald-100/30 italic border-t border-white/5 pt-3 mt-2">
                      {service.moreInfo}
                    </p>
                  )}

                  {service.link && (
                    <motion.a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold hover:bg-emerald-500 hover:text-noir transition-all"
                    >
                      <Zap className="w-4 h-4" />
                      {service.linkText}
                    </motion.a>
                  )}
                </div>
              </div>
              
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3Services;
