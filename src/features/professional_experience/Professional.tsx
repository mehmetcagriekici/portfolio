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
import { useProfessional } from "./useProfessional";

function Professional() {
  const { professionalData, showProfessionalDetails, isLoading, error } =
    useProfessional();

  function onClick(id: string) {
    showProfessionalDetails(id);
  }

  const cardsArray = Object.values(professionalData.cards);
  const positions: absolutePositions[] = CALC_POSITIONS(cardsArray);

  const styles = {
    bg: "bg-red-500",
    z: "z-10",
    bottom: "bottom-[45%]",
    responsive_height: "h-[15%] md:h-[40%] xl:h-[60%]",
    responsive_width: "w-full md:w-[96%] xl:w-[60%]",
    responsive_border: `${COMMON_RESPONSIVE_BORDER} border-transparent`,
    display: `${SM_DEF_DISK_DISPLAY}`,
  };

  //multiple
  const cardStyles = {
    bg: "bg-orange-200/20 md:hidden",
    height: "min-h[98%]",
    width: "w-[90%]",
    display: "flex flex-col justify-center items-center gap-3",
    border: `${COMMON_SMALL_CARD_BORDER} border-red-400`,
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
          feature="professional"
        >
          <CardList
            itemsArray={[card.name, card.customer, card.type, card.date]}
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

export default Professional;
