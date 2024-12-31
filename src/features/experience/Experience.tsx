//imports
import CardList from "../../components/CardList";
import FeaturePreviewCard from "../../components/FeaturePreviewCard";
import FeaturePreviewDisk from "../../components/FeaturePreviewDisk";
import { CONVERT_LIST_TO_STR } from "../../utils/helpers";
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

  //disk (2 nested divs)
  const styles = {
    outerContainer:
      "bottom-0 h-[75%] experienceCardEnter z-10 lg:bottom-1/2 lg:translate-y-[60%] lg:animate-lgDiskEnter xl:right-0 xl:top-1/2 xl:-translate-y-1/2 xl:h-4/5 xl:w-1/2 xl:border-4 xl:border-slate-300/20",
    innerContainer:
      "overflow-auto flex justify-safe-center items-safe-center lg:flex-row lg:flex-nowrap xl:overflow-hidden xl:overflow-y-auto xl:flex-col",
  };

  //card (1 div)
  const cardStyles =
    "min-h-[30%] flex justify-safe-center items-safe-center lg:h-[80%] lg:min-w-[45%] lg:gap-3";

  return (
    <FeaturePreviewDisk styles={styles}>
      {cardsArray.map((card, i) => (
        <FeaturePreviewCard
          key={i}
          isLoading={isLoading}
          error={error}
          onClick={() => onClick(card.id)}
          styles={cardStyles}
          cardIndex={i}
        >
          <CardList
            itemsArray={[
              card.name,
              CONVERT_LIST_TO_STR(card.technologies),
              card.date,
            ]}
          />
        </FeaturePreviewCard>
      ))}
    </FeaturePreviewDisk>
  );
}

export default Experience;
