//imports
import { useState } from "react";
import { useDetails } from "../features/details/useDetails";
import { useInView } from "react-intersection-observer";
import { CircularProgress } from "@mui/material";
import { motion } from "motion/react";

export default function ImgModal({ src }: { src: string }) {
  //image loaded
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  //image modal
  const { closeImg } = useDetails();

  return (
    <motion.div
      className="fixed top-0 left-0 h-dvh w-dvw flex flex-col justify-center gap-10 items-center bg-gray-900/70"
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
    >
      {inView ? (
        <img
          src={src}
          className={`${
            isLoaded ? "opacity-100" : "opacity-0"
          } h-3/5 w-4/5 object-cover border-2 rounded-xl border-gray-300 p-2`}
          onLoad={() => setIsLoaded(true)}
        />
      ) : (
        <CircularProgress color="inherit" className={`h-full w-full `} />
      )}

      <button
        onClick={() => closeImg()}
        className="text-gray-200 text-xl tracking-widest capitalize border-2 rounded-full border-gray-300 p-3 bg-gray-800 hover:cursor-pointer"
      >
        close image
      </button>
    </motion.div>
  );
}
