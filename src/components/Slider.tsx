//imports
import { DEF_IMG_STYLES } from "../utils/constants";
import { SliderProps } from "../utils/types";

function Slider({ imagesArray }: SliderProps) {
  return (
    <div className="h-full w-full flex flex-row justify-safe-center items-safe-center gap-2 p-2 rounded-md overflow-auto shadow-lg">
      {imagesArray.map((src, i) => (
        <img key={i} src={src} className={`${DEF_IMG_STYLES}`} />
      ))}
    </div>
  );
}

export default Slider;
