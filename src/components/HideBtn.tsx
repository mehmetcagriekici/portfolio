import { HideBtnProps } from "../utils/types";
import { motion } from "motion/react";

export default function HideBtn({ onClick, children }: HideBtnProps) {
  return (
    <motion.button
      onClick={onClick}
      className="font-orb capitalize tracking-widest text-base bg-gray-300 rounded-full p-3 border-2 border-black hover:cursor-pointer hover:bg-gray-200 md:border-4 md:text-3xl lg:text-4xl lg:p-5 xl:text-xl xl:p-3"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
}
