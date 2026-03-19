import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import slide3Bg from "@/assets/slide3-channels.jpg";
import { staggerContainer, fadeUp } from "./animations";

const columns = [
  { name: "PORTAFOLIO", value: "FNA" },
  { name: "FECHA DE GESTIÓN", value: "20/02/2026" },
  { name: "FECHA DE PROMESA", value: "10/03/2026" },
  { name: "EJECUTIVO", value: "BRIAN ESTEBAN DORADO" },
  { name: "OBLIGACIÓN", value: "8072472800" },
  { name: "TIPO DE ACUERDO", value: "ACUERDO DE NORMALIZACIÓN" },
  { name: "EFECTIVIDAD", value: "INCUMPLE", isStatus: true },
  { name: "DESCUENTO APLICADO", value: "No" },
  { name: "MONTO DEL ACUERDO", value: "$ 5.490.000,00" },
  { name: "VALOR CANCELADO", value: "$ 0,00" },
  { name: "MEDIO", value: "WHATSAPP" },
  { name: "DIAS MORA", value: "516" },
  { name: "HONORARIOS", value: "$ 0" },
];

const Slide7Process = () => (
  <SlideLayout bgImage={slide3Bg} overlayStrong>
    <motion.div className="flex-1 flex flex-col justify-center items-center px-6 relative w-full h-full" variants={staggerContainer} initial="hidden" animate="show">
      <motion.h2 className="text-5xl font-extrabold text-primary-foreground mb-12 mt-4" variants={fadeUp}>
        Visión Integral del <span className="text-gradient-green">Proceso</span>
      </motion.h2>
      
      <motion.div className="w-full max-w-[95vw] overflow-x-auto pb-4" variants={fadeUp}>
        <div className="min-w-[1400px] bg-[#1e1e1e]/90 border border-white/20 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="bg-[#107c41] px-4 py-2 flex items-center border-b border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-white text-xs font-semibold ml-2">SEGUIMIENTO ACUERDOS.xlsm</span>
            </div>
          </div>
          
          <div className="flex w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[1400px]">
              <thead>
                <tr className="bg-[#2b3c51] text-white text-[10px] font-bold uppercase tracking-wider">
                  {columns.map((col, i) => (
                    <motion.th 
                      key={i} 
                      className="border-r border-white/10 px-2 py-3 text-center last:border-r-0 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <motion.span 
                          className="bg-primary text-black font-extrabold px-3 py-1 rounded-full mb-1 text-sm shadow-md border-2 border-green-900"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                        >
                          {i + 1}
                        </motion.span>
                        {col.name}
                        <span className="text-[10px] opacity-40 mt-0.5">▼</span>
                      </div>
                    </motion.th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-black text-[11px] font-bold">
                  {columns.map((col, i) => (
                    <motion.td 
                      key={i} 
                      className={`border-r border-gray-200 px-3 py-4 text-center last:border-r-0 ${col.isStatus ? 'bg-[#ffd9d9] text-[#c00000] font-extrabold' : ''}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (i * 0.1) + 0.5, duration: 0.3 }}
                      whileHover={{ backgroundColor: "rgba(16, 124, 65, 0.05)" }}
                    >
                      {col.value}
                    </motion.td>
                  ))}
                </tr>
                {/* Add a few empty rows to emphasize the format */}
                {[1, 2].map((r) => (
                  <tr key={r} className="bg-white text-black text-[11px] h-8 border-t border-gray-100">
                    {columns.map((_, i) => (
                      <td key={i} className="border-r border-gray-100 px-3 py-1 text-center last:border-r-0 opacity-30 italic font-light">
                        ...
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        </div>
      </motion.div>
      
      <motion.div className="mt-8 max-w-4xl text-center" variants={fadeUp}>
        <p className="text-xl text-primary-foreground border-l-4 border-primary pl-4 text-left font-light bg-black/20 p-4 rounded-r-lg">
          Este ejemplo ilustra el diligenciamiento correcto de una gestión típica en el portafolio FNA.
        </p>
      </motion.div>
    </motion.div>
  </SlideLayout>
);

export default Slide7Process;
