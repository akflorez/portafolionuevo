import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";

const clients = [
  "FNA (Ahorro)", "Efigas", "CrediOrbe", "CAMACOL",
  "Federación Nacional de Cafeteros", "Financiera COFINCAFE",
  "Actuar", "Auteco", "La Crónica del Quindío", "Claro"
];

const capabilities = [
  "Humanización: cobranza con dignidad y trato ético",
  "Decisión basada en datos e indicadores en tiempo real",
  "Socio estratégico: acompañamiento integral",
  "Trayectoria desde 2009 en BPS y recuperación",
  "Respaldo jurídico sólido y especializado",
  "Propiedad Horizontal como especialidad de gestión"
];

const Slide4Capabilities = () => {
  return (
    <SlideLayout bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" overlayStrong>
      <div className="flex-1 flex flex-col justify-center px-20 z-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-14 drop-shadow-md text-center"
        >
          Diferenciadores y Casos de Éxito
        </motion.h2>

        <div className="grid grid-cols-2 gap-16">
          {/* Diferenciadores */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-blue-300 font-bold mb-4 uppercase tracking-widest">Ventajas Competitivas</h3>
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                className="flex items-center gap-4 bg-gradient-to-r from-blue-900/40 to-transparent p-4 rounded-lg border-l-4 border-blue-500"
              >
                <span className="material-symbols-outlined text-blue-400">check_circle</span>
                <span className="text-lg font-medium text-white">{cap}</span>
              </motion.div>
            ))}
          </div>

          {/* Casos de éxito */}
          <div>
            <h3 className="text-2xl text-emerald-300 font-bold mb-6 uppercase tracking-widest">Empresas que Confían en Nosotros</h3>
            <div className="grid grid-cols-2 gap-4">
              {clients.map((client, idx) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.06 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center"
                >
                  <span className="text-white font-semibold text-lg">{client}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide4Capabilities;
