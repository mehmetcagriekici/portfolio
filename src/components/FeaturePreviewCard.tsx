//imports
import { FeatureCardProps } from "../utils/types";
import { motion } from "motion/react";

function FeaturePreviewCard({
  children,
  onClick,

  cardIndex,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: cardIndex * 0.3 }}
      className="flex justify-safe-center items-safe-center flex-col h-1/6 w-full shrink-0 rounded-xl md:w-4/5 md:h-1/5 md:rounded-full hover:cursor-pointer xl:h-1/3 xl:w-1/5"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export default FeaturePreviewCard;
