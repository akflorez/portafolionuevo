import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideLayoutProps {
  bgImage: string;
  children: ReactNode;
  overlayStrong?: boolean;
}

const SlideLayout = ({ bgImage, children, overlayStrong = false }: SlideLayoutProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlayStrong ? 'slide-overlay-strong' : 'slide-overlay'}`} />
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
