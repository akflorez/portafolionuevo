import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Scale, Headphones, BarChart3, Home, Layers } from "lucide-react";
import channelsBg from "@/assets/slide3-channels.jpg";
import { useLanguage } from "../../contexts/LanguageContext";

const Slide3Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: "contact",
      icon: Headphones,
      title: t("slide3Services.items.contact"),
      desc: t("slide3Services.items.contact_desc"),
    },
    {
      id: "data",
      icon: BarChart3,
      title: t("slide3Services.items.data"),
      desc: t("slide3Services.items.data_desc"),
    },
    {
      id: "legal",
      icon: Scale,
      title: t("slide3Services.items.legal"),
      desc: t("slide3Services.items.legal_desc"),
    },
    {
      id: "ph",
      icon: Home,
      title: t("slide3Services.items.ph"),
      desc: t("slide3Services.items.ph_desc"),
    },
    {
      id: "integration",
      icon: Layers,
      title: t("slide3Services.items.integration"),
      desc: t("slide3Services.items.integration_desc"),
    },
  ];

  // Divide services into two rows for an elegant grid structure
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <SlideLayout bgImage={channelsBg} overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-16 z-20 w-full max-w-[140rem] mx-auto py-12">
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-8 text-center"
        >
          <div className="inline-block px-5 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)] mx-auto">
            <p className="text-emerald-400 font-extrabold uppercase tracking-[0.3em] text-xs leading-none">
              {t("slide3Services.portfolio")}
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
            {t("slide3Services.title_main")} <span className="text-gradient-green">{t("slide3Services.title_gradient")}</span>
          </h2>
          <p className="text-white/75 font-semibold text-lg md:text-xl max-w-3xl mx-auto mt-3">
            {t("slide3Services.desc")}
          </p>
        </motion.div>
 
        {/* Row 1: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {firstRow.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card-glass p-8 rounded-[2rem] border border-white/5 group relative flex flex-col justify-between min-h-[16rem] transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-noir transition-all duration-300">
                    <service.icon className="w-7 h-7 text-emerald-400 group-hover:text-noir" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase leading-tight group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-white/90 font-semibold leading-relaxed">
                  {service.desc}
                </p>
              </div>
 
              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
 
        {/* Row 2: 2 Cards (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full mt-6">
          {secondRow.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card-glass p-8 rounded-[2rem] border border-white/5 group relative flex flex-col justify-between min-h-[16rem] transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-noir transition-all duration-300">
                    <service.icon className="w-7 h-7 text-emerald-400 group-hover:text-noir" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase leading-tight group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-white/90 font-semibold leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3Services;
