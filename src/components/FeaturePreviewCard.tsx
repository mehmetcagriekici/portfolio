//imports
import { FeatureCardProps } from "../utils/types";
import Error from "./Error";
import Loader from "./Loader";
import { motion } from "motion/react";

function FeaturePreviewCard({
  children,
  onClick,
  isLoading,
  cardIndex,
  error,
}: FeatureCardProps) {
  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={error} />;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: cardIndex * 0.3 }}
      className={`flex justify-safe-center items-safe-center flex-col h-1/6 w-full shrink-0 rounded-xl md:w-4/5 md:h-1/5 md:rounded-full xl:w-2/5 xl:h-1/4 hover:cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export default FeaturePreviewCard;
