import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Headphones, CheckCircle2, Zap } from "lucide-react";
import contactBg from "@/assets/slide4-contact.jpg";
import { useLanguage } from "../../contexts/LanguageContext";

const Slide3ServicesContact = () => {
  const { t } = useLanguage();

  const coreServices = [
    t("slide3Contact.services.appointments"),
    t("slide3Contact.services.customer_service"),
    t("slide3Contact.services.remote_sales")
  ];

  const techCapabilities = [
    t("slide3Contact.services.automated_emails"),
    t("slide3Contact.services.whatsapp"),
    t("slide3Contact.services.ivr"),
    t("slide3Contact.services.sms"),
    t("slide3Contact.services.tracking")
  ];

  return (
    <SlideLayout bgImage={contactBg} overlayStrong>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-16 gap-12 z-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                <Headphones className="w-7 h-7 text-emerald-500" />
              </div>
              <p className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs font-black">{t("slide3Contact.strategic_comm")}</p>
            </div>
            <h2 className="text-8xl font-black text-white leading-[0.8] mb-6 tracking-tighter">
              {t("slide3Contact.title_main")} <br />
              <span className="text-gradient-green">{t("slide3Contact.title_gradient")}</span>
            </h2>
            <p className="text-2xl text-white/85 font-medium leading-relaxed">
              {t("slide3Contact.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
             <div className="space-y-4">
                <p className="text-sm text-emerald-400 uppercase font-black tracking-widest mb-4 px-4 py-2 bg-emerald-500/10 rounded-xl inline-block border border-emerald-500/20">{t("slide3Contact.core_services")}</p>
                {coreServices.map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-xl text-white/95 group-hover:text-white transition-colors font-semibold">{item}</span>
                  </div>
                ))}
             </div>
             <div className="space-y-4 pt-0">
                <p className="text-sm text-emerald-400 uppercase font-black tracking-widest mb-4 px-4 py-2 bg-emerald-500/10 rounded-xl inline-block border border-emerald-500/20">{t("slide3Contact.capabilities")}</p>
                {techCapabilities.map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <Zap className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-xl text-white/90 group-hover:text-white transition-colors font-semibold">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] bg-noir/20">
              <img 
                src="/contact-center-bg.jpg" 
                alt="Contact Center Operations" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-noir/40 via-transparent to-noir/5"></div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide3ServicesContact;
