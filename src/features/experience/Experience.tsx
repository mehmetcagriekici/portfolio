//imports
import CardList from "../../components/CardList";
import FeaturePreviewCard from "../../components/FeaturePreviewCard";
import FeaturePreviewDisk from "../../components/FeaturePreviewDisk";
import {
  COMMON_CARD_LIST_ELEMENT_STYLES,
  COMMON_CARD_LIST_STYLES,
  COMMON_RESPONSIVE_BORDER,
  COMMON_SMALL_CARD_BORDER,
  SM_DEF_DISK_DISPLAY,
} from "../../utils/constants";
import { CALC_POSITIONS, CONVERT_LIST_TO_STR } from "../../utils/helpers";
import { absolutePositions } from "../../utils/types";
import { useExperience } from "./useExperience";

function Experience() {
  //experience data from the app state
  const { experienceData, showExperienceDetails, error, isLoading } =
    useExperience();

  //set correct details
  function onClick(id: string) {
    showExperienceDetails(id);
  }

  const cardsArray = Object.values(experienceData.cards);
  const positions: absolutePositions[] = CALC_POSITIONS(cardsArray);

  const styles = {
    bg: "bg-yellow-500",
    z: "z-20",
    bottom: "bottom-[29%]",
    responsive_height: "h-[16%] md:h-[32%] xl:h-[48%]",
    responsive_width: "w-full md:w-[78%] xl:w-[48%]",
    responsive_border: `${COMMON_RESPONSIVE_BORDER} md:border-orange-500`,
    display: `${SM_DEF_DISK_DISPLAY}`,
  };

  //multiple
  const cardStyles = {
    bg: "bg-amber-200/30 md:hidden",
    height: "min-h-[98%]",
    width: "w-[90%]",
    display: "flex flex-col justify-center items-center gap-3",
    border: `${COMMON_SMALL_CARD_BORDER} border-2 border-yellow-400`,
  };

  return (
    <FeaturePreviewDisk styles={styles}>
      {cardsArray.map((card, i) => (
        <FeaturePreviewCard
          key={i}
          isLoading={isLoading}
          error={error}
          onClick={() => onClick(card.id)}
          styles={{ ...cardStyles, position: positions[i] }}
          feature="experience"
        >
          <CardList
            itemsArray={[
              card.name,
              CONVERT_LIST_TO_STR(card.technologies),
              card.date,
            ]}
            styles={{
              ul: COMMON_CARD_LIST_STYLES,
              li: COMMON_CARD_LIST_ELEMENT_STYLES,
            }}
          />
        </FeaturePreviewCard>
      ))}
    </FeaturePreviewDisk>
  );
}

export default Experience;
