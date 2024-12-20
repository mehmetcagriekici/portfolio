//imports
import { useDetails } from "../features/details/useDetails";
import { FeatureScreenProps } from "../utils/types";
import Error from "./Error";
import Loader from "./Loader";

function FeaturePreviewScreen({
  children,
  isLoading,
  error,
}: FeatureScreenProps) {
  const { id } = useDetails();
  const [feature] = id.split("_");

  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={error} />;

  let bg = "";

  if (feature === "personal") bg = "bg-purple-500/80 xl:bg-purple-900/90";
  if (feature === "education") bg = "bg-sky-500/80";
  if (feature === "experience") bg = "bg-yellow-500/80";
  if (feature === "professional") bg = "";

  return (
    <div className={`h-full w-full relative radius-sm shadow-sm ${bg}`}>
      {children}
    </div>
  );
}

export default FeaturePreviewScreen;
