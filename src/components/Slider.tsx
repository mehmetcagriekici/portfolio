//imports
import { useAppSelector } from "../hooks/reduxHooks";
import { SliderProps } from "../utils/types";
import ImgModal from "./ImgModal";
import LazyImage from "./LazyImage";

//on click increase img size
function Slider({ imagesArray }: SliderProps) {
  //image details
  const { isImgOn, currSrc } = useAppSelector((state) => state.details);
  //current src for details

  return imagesArray.length ? (
    <ul className="min-h-[33%] w-full flex flex-row justify-safe-center items-safe-center gap-5 overflow-auto rounded-lg">
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
