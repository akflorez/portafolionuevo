import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { useLanguage } from "../../contexts/LanguageContext";

const clientsRow1 = [
  { name: "Efigas", logo: "/Efigas.png" },
  { name: "CrediOrbe", logo: "/CrediOrbe.webp" },
  { name: "Camacol", logo: "/Camacol.png" },
  { name: "Claro", logo: "/claro.png" },
  { name: "Federación de Cafeteros", logo: "/FEDERACION_CAFETEROS.png" },
  { name: "Fondo Nacional del Ahorro", logo: "/FNA.png" }
];

const clientsRow2 = [
  { name: "Auteco", logo: "/auteco.png" },
  { name: "Cofincafe", logo: "/cofincafe.png" },
  { name: "Fenalco Quindío", logo: "/fenalco.png" },
  { name: "Serfinanza", logo: "/SERFINANZA.jpg" },
  { name: "Hospital", logo: "/logo_hospital.png" }
];

const Slide4Clients = () => {
  const { t } = useLanguage();
  
  const duplicatedRow1 = [...clientsRow1, ...clientsRow1];
  const duplicatedRow2 = [...clientsRow2, ...clientsRow2];

  return (
    <SlideLayout bgImage="/casos-exito-bg.png" overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-20 py-12">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-center mb-10"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">
            Confianza que rinde frutos
          </p>
          <h2 className="text-7xl font-black text-white mb-6">
            Casos de <span className="text-gradient-green">Éxito</span>
          </h2>
          <p className="text-2xl text-white/85 font-medium max-w-4xl mx-auto leading-relaxed">
            Empresas líderes de diferentes sectores confían en EMDECOB para optimizar sus procesos, 
            fortalecer su cartera y mejorar la experiencia de sus clientes.
          </p>
        </motion.div>

        {/* Marquee Containers */}
        <div className="relative w-full overflow-hidden flex flex-col gap-6 max-w-6xl mx-auto py-4">
          
          {/* Glassy gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-noir via-noir/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-noir via-noir/60 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Scrolling Left */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              }}
              style={{ width: "max-content" }}
            >
              {duplicatedRow1.map((client, index) => (
                <div
                  key={`r1-${index}`}
                  className="w-72 h-36 card-glass rounded-2xl flex items-center justify-center p-8 hover:border-emerald-500/30 transition-all duration-300 group shadow-lg shrink-0"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-w-[90%] max-h-[85%] object-contain filter brightness-110 drop-shadow-md group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex gap-8"
              initial={{ x: "-50%" }}
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 22,
                repeat: Infinity,
              }}
              style={{ width: "max-content" }}
            >
              {duplicatedRow2.map((client, index) => (
                <div
                  key={`r2-${index}`}
                  className="w-72 h-36 card-glass rounded-2xl flex items-center justify-center p-8 hover:border-emerald-500/30 transition-all duration-300 group shadow-lg shrink-0"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-w-[90%] max-h-[85%] object-contain filter brightness-110 drop-shadow-md group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide4Clients;
