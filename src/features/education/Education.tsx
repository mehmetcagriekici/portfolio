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
import { CALC_POSITIONS } from "../../utils/helpers";
import { absolutePositions } from "../../utils/types";
import { useEducation } from "./useEducation";

function Education() {
  //education hook
  //returns data
  //and updates current details
  const { educationData, showEducationDetails, error, isLoading } =
    useEducation();

  function onClick(id: string) {
    //update the current detail
    showEducationDetails(id);
  }

  //will be used to position cards according to their indexes
  const cardsArray = Object.values(educationData.cards);
  const positions: absolutePositions[] = CALC_POSITIONS(cardsArray);

  const styles = {
    bg: "bg-blue-500",
    z: "z-30",
    bottom: "bottom-[12%]",
    responsive_height: "h-[17%] md:h-[24%] xl:h-[36%]",
    responsive_width: "w-full md:w-[58%] xl:w-[36%]",
    responsive_border: `${COMMON_RESPONSIVE_BORDER} md:border-green-500`,
    display: `${SM_DEF_DISK_DISPLAY} pt-1 pb-1`,
  };

  const cardStyles = {
    bg: "bg-cyan-300/20 md:hidden",
    height: "h-[98%]",
    width: "w-[90%]",
    display: "flex flex-col justify-center items-center",
    border: `${COMMON_SMALL_CARD_BORDER} border-2 border-blue-300 shadow-md`,
  };

  //multiple
  return (
    <FeaturePreviewDisk styles={styles}>
      {cardsArray.map((card, i) => (
        <FeaturePreviewCard
          key={i}
          isLoading={isLoading}
          error={error}
          onClick={() => onClick(card.id)}
          styles={{ ...cardStyles, position: positions[i] }}
          feature="education"
        >
          <CardList
            itemsArray={[card.name, card.owner, card.platform, card.date]}
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

export default Education;
