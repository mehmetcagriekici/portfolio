//imports
import { FeatureDiskProps } from "../utils/types";

//some styles depend on the feature
//parent container component to place, and to position feature cards
function FeaturePreviewDisk({
  children,
  styles: { outerContainer, innerContainer },
}: FeatureDiskProps) {
  return (
    <div
      className={`absolute diskBgSm w-full xl:m-2 xl:rounded-lg xl:diskBgXl ${outerContainer}`}
    >
      <div
        className={`relative w-full h-full flex flex-col justify-safe-center items-safe-center gap-3 ${innerContainer}`}
      >
        {children}
      </div>
    </div>
  );
}

export default FeaturePreviewDisk;
