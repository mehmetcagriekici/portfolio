//imports
import { FeatureCardProps } from "../utils/types";
import CardButton from "./CardButton";
import Error from "./Error";
import Loader from "./Loader";

function FeaturePreviewCard({
  children,
  onClick,
  isLoading,
  error,
  feature,
  styles: { bg, height, width, display, border, position },
}: FeatureCardProps) {
  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={error} />;

  return (
    <>
      <CardButton feature={feature} onClick={onClick} position={position} />
      <div
        className={`rounded-md hover:cursor-pointer ${bg} ${height} ${width} ${border} ${display}`}
        onClick={onClick}
      >
        {children}
        <p className="text-black uppercase tracking-tighter font-black">
          Click here to see the details
        </p>
      </div>
    </>
  );
}

export default FeaturePreviewCard;
