//imports
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { useDetails } from "../features/details/useDetails";

//for multiple images
export default function LazyImage({ src }: { src: string }) {
  //image modal
  const { openImg } = useDetails();

  //check if image is loaded
  const [isLoaded, setIsLoaded] = useState(false);
  //react-intersection-observer
  //load only once, trigger after 10% of the image is loaded
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  //list element
  return (
    <motion.li
      ref={ref}
      className="flex justify-center items-center h-full min-w-[100%] rounded hover:cursor-pointer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {inView ? (
        <img
          src={src}
          className={`${
            isLoaded ? "opacity-100" : "opacity-0"
          } h-full w-full object-cover`}
          onLoad={() => setIsLoaded(true)}
          onClick={() => openImg(src)}
        />
      ) : (
        <CircularProgress color="inherit" className={`h-full w-full `} />
      )}
    </motion.li>
  );
}
