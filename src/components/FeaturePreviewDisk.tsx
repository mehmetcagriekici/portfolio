//imports
import { FeatureDiskProps } from "../utils/types";

//some styles depend on the feature
//parent container component to place, and to position feature cards
function FeaturePreviewDisk({
  children,
  styles: {
    bg,
    responsive_width,
    responsive_height,
    z,
    responsive_border,
    display,
    bottom,
  },
}: FeatureDiskProps) {
  return (
    <div
      className={`absolute left-1/2 md:bottom-0 -translate-x-1/2 overflow-y-auto md:overflow-hidden md:circle ${bottom} ${responsive_border} ${responsive_height} ${z} ${bg} ${responsive_width}`}
    >
      <div className={`relative w-full h-full ${display}`}>{children}</div>
    </div>
  );
}

export default FeaturePreviewDisk;
