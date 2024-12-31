//imports
import { FeatureScreenProps } from "../utils/types";
import Error from "./Error";
import Loader from "./Loader";

function FeaturePreviewScreen({
  children,
  isLoading,
  error,
}: FeatureScreenProps) {
  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={error} />;
  //inner details container
  return (
    <div className="relative h-[94%] w-[90%] bg-indigo-900 border-4 border-indigo-500/50 rounded-lg overflow-hidden overflow-y-auto">
      {children}
    </div>
  );
}

export default FeaturePreviewScreen;
