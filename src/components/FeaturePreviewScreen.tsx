//imports
import { FeatureScreenProps } from "../utils/types";
import { motion } from "motion/react";

function FeaturePreviewScreen({ children }: FeatureScreenProps) {
  //details container
  //under the FeaturePreviewDisk
  return (
    <motion.div
      className="bg-yellow-500/90 relative h-full w-full flex flex-col justify-safe-center items-safe-center gap-5 overflow-auto p-2 rounded-lg xl:w-3/5"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default FeaturePreviewScreen;
