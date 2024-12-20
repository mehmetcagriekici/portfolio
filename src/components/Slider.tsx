//imports
import { DEF_IMG_STYLES, SLIDER_NO_IMAGES_MESSAGE } from "../utils/constants";
import { SliderProps } from "../utils/types";

function Slider({ imagesArray }: SliderProps) {
  if (!imagesArray.length)
    return (
      <div className="h-full w-full flex justify-safe-center items-safe-center text-2xl font-bold leading-relaxed tracking-wide overflow-auto">
        {SLIDER_NO_IMAGES_MESSAGE}
      </div>
    );

  return (
    <div className="h-full w-full flex flex-row justify-safe-center items-safe-center gap-2 p-2 rounded-md  overflow-auto bg-gradient-to-r from-yellow-800/60 to-yellow-200/30 border-2 border-yellow-300 shadow-lg">
      {imagesArray.map((src, i) => (
        <img key={i} src={src} className={`${DEF_IMG_STYLES}`} />
      ))}
    </div>
  );
}

export default Slider;
