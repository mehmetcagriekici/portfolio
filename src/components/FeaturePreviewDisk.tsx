//imports
import { FeatureDiskProps } from "../utils/types";

//some styles depend on the feature
//parent container component to place, and to position feature cards
function FeaturePreviewDisk({ children }: FeatureDiskProps) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full overflow-hidden">
      <div className="relative h-full w-full flex justify-safe-center items-safe-center flex-col gap-8 overflow-y-auto p-3 ">
        {children}
      </div>
    </div>
  );
}

export default FeaturePreviewDisk;
