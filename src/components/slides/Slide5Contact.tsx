import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram } from "lucide-react";
import contactBg from "@/assets/slide4-contact.jpg";

const Slide5Contact = () => {
  const contactInfo = [
    { icon: MapPin, label: "Dirección", value: "Cra. 19 #15 Norte-40, Armenia, Quindío", extra: "" },
    { icon: Mail, label: "Correo", value: "gerencia@emdecob.com", extra: "direccionejecutiva@emdecob.com" },
    { icon: Globe, label: "Sitio Web", value: "www.emdecob.com", extra: "Portal de Analítica" }
  ];

  return (
    <SlideLayout bgImage={contactBg} overlayStrong>
      <div className="flex-1 flex items-center px-20 gap-20">
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">¿Hablamos?</p>
            <h2 className="text-8xl font-black text-white mb-12">Contacto</h2>
            
            <div className="space-y-10">
              {contactInfo.map((info, i) => (
                <motion.div 
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <info.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-500 font-bold uppercase tracking-tighter mb-1">{info.label}</p>
                    <p className="text-2xl text-white font-bold mb-1">{info.value}</p>
                    {info.extra && (
                      <p className={info.label === "Correo" ? "text-2xl text-white font-bold" : "text-lg text-white/40"}>
                        {info.extra}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-6 mt-16">
              <a 
                href="https://www.linkedin.com/in/emdecob-s-a-s-42a54520b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-noir font-bold rounded-2xl hover:bg-emerald-400 transition-all group"
              >
                <Linkedin className="w-6 h-6" />
                Síguenos en LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/emdecob_sas?igsh=MTVwZTlxZHA4ZW81cQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="w-1/2 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="card-glass p-8 rounded-[40px] border border-white/10 w-full relative overflow-hidden text-center">
             <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
             <p className="text-emerald-400 font-bold uppercase tracking-widest mb-8">Escanea para conectar</p>
             
             <div className="flex justify-center gap-12 mb-12">
               <div className="space-y-4">
                 <div className="w-48 h-48 bg-white p-4 rounded-3xl">
                   <img src="/qr-gerencia.png" alt="QR Gerencia" className="w-full h-full object-contain" />
                 </div>
                 <p className="text-white font-bold">Gerencia General</p>
               </div>
               <div className="space-y-4">
                 <div className="w-48 h-48 bg-white p-4 rounded-3xl">
                   <img src="/qr-direccion.png" alt="QR Dirección" className="w-full h-full object-contain" />
                 </div>
                 <p className="text-white font-bold">Dirección Ejecutiva</p>
               </div>
             </div>

             <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 inline-block">
                <p className="text-emerald-400 text-lg font-medium italic">
                  "Soluciones efectivas para los retos de hoy y mañana"
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide5Contact;
