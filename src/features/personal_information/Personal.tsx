//imports
import FeaturePreviewCard from "../../components/FeaturePreviewCard";
import FeaturePreviewDisk from "../../components/FeaturePreviewDisk";
import {
  COMMON_RESPONSIVE_BORDER,
  COMMON_SMALL_CARD_BORDER,
} from "../../utils/constants";
import { usePersonal } from "./usePersonal";

function Personal() {
  const { personalData, showPersonalDetails, isLoading, error } = usePersonal();

  function onClick() {
    showPersonalDetails();
  }

  //styles for the disk
  const styles = {
    bg: "bg-purple-500",
    z: "z-40",
    bottom: "bottom-0",
    responsive_height: "h-[12%] md:h-[16%] xl:h-[22%]",
    responsive_width: "w-full md:w-[38%] xl:w-[22%]",
    responsive_border: `${COMMON_RESPONSIVE_BORDER} md:border-indigo-500`,
    display: "flex justify-center items-center md:items-end md:pb-3",
  };

  //styles for the card
  //single
  const cardStyles = {
    bg: "bg-transparent md:hidden",
    height: "h-[60%] md:h-[72%]",
    width: "w-[88%] md:w-[62%]",
    display: "flex flex-col justify-center items-center pb-2",
    border: `${COMMON_SMALL_CARD_BORDER} border-purple-400 shadow-md`,
    position: {
      bottom: "52%",
      left: "50%",
      transform: "translate(-50%, 50%)",
    },
  };

  return (
    <FeaturePreviewDisk styles={styles}>
      <FeaturePreviewCard
        onClick={onClick}
        isLoading={isLoading}
        error={error}
        styles={cardStyles}
        feature="personal"
      >
        <div className="">
          <h3 className="text-gray-800 text-xl md:text-2xl tracking-tighter font-bold">
            {personalData.card.name}
          </h3>
          <h5 className="hidden md:flex justify-center">
            {personalData.card.age}
          </h5>
          <p className="hidden md:flex justify-center">
            {personalData.card.country}
          </p>
        </div>
      </FeaturePreviewCard>
    </FeaturePreviewDisk>
  );
}

export default Personal;
