import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideLayoutProps {
  bgImage?: string;
  children: ReactNode;
  overlayStrong?: boolean;
}

const SlideLayout = ({ 
  bgImage, 
  children, 
  overlayStrong = false 
}: SlideLayoutProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-noir">
      {bgImage && (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: overlayStrong ? 0.4 : 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
      <div className={`absolute inset-0 ${overlayStrong ? 'bg-noir/80' : 'bg-noir/50'}`} />
      <div className="absolute inset-0 bg-gradient-to-tr from-noir via-transparent to-emerald-500/10" />
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
