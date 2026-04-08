import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";

const clients = [
  { name: "Efigas", logo: "/Efigas.png" },
  { name: "CrediOrbe", logo: "/CrediOrbe.webp" },
  { name: "Camacol", logo: "/Camacol.png" },
  { name: "Claro", logo: "/claro.png" },
  { name: "Auteco", logo: "/auteco.png" },
  { name: "Cofincafe", logo: "/cofincafe.png" },
  { name: "Fenalco Quindío", logo: "/fenalco.png" }
];

const Slide4Clients = () => {
  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col justify-center px-20">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">Confianza que rinde frutos</p>
          <h2 className="text-7xl font-black text-white mb-6">Casos de <span className="text-gradient-green">Éxito</span></h2>
          <p className="text-2xl text-white/50 font-light max-w-4xl mx-auto">
            Empresas líderes de diferentes sectores confían en EMDECOB para optimizar sus procesos, 
            fortalecer su cartera y mejorar la experiencia de sus clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="w-full aspect-[3/2] bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center p-4 hover:bg-white/20 hover:border-emerald-500/40 transition-all group shadow-xl"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-[85%] max-h-[80%] object-contain brightness-110 drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.1))" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide4Clients;
