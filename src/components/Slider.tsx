//imports
import { useAppSelector } from "../hooks/reduxHooks";
import { SliderProps } from "../utils/types";
import ImgModal from "./ImgModal";
import LazyImage from "./LazyImage";

//on click increase img size
function Slider({ imagesArray }: SliderProps) {
  //image details
  //current src for details
  const { isImgOn, currSrc } = useAppSelector((state) => state.details);

  return imagesArray.length ? (
    <ul className="min-h-[33%] w-full flex flex-row justify-safe-center items-safe-center gap-5 overflow-auto rounded-lg md:w-4/5 md:mt-5 xl:w-3/5 xl:min-h-[40%]">
      {imagesArray.map((src, i) =>
        isImgOn ? (
          <ImgModal src={currSrc} key={i} />
        ) : (
          <LazyImage src={src} key={i} />
        )
      )}
    </ul>
  ) : (
    ""
  );
}

export default Slider;
