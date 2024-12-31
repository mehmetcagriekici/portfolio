//imports
import { FeatureCardProps } from "../utils/types";
import Error from "./Error";
import Loader from "./Loader";

function FeaturePreviewCard({
  children,
  onClick,
  isLoading,
  error,
  styles,
  cardIndex,
}: FeatureCardProps) {
  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={error} />;

  return (
    <div
      className={`w-full border-b-2 border-stone-800/20 hover:cursor xl:border-none ${styles} ${
        cardIndex % 2 === 0
          ? "lg:animate-lgCardEnterTop"
          : "lg:animate-lgCardEnterBot"
      }`}
      style={{ animationDelay: `${cardIndex * 50}ms` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default FeaturePreviewCard;
