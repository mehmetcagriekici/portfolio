//imports
import CardList from "../../components/CardList";
import FeaturePreviewCard from "../../components/FeaturePreviewCard";
import FeaturePreviewDisk from "../../components/FeaturePreviewDisk";
import HideBtn from "../../components/HideBtn";
import { CONVERT_LIST_TO_STR } from "../../utils/helpers";
import { useDetails } from "../details/useDetails";
import ExperienceDetails from "./ExperienceDetails";
import { useExperience } from "./useExperience";

function Experience() {
  //experience data from the app state
  const { experienceData, showExperienceDetails, error, isLoading } =
    useExperience();
  //details
  const { isDetailsOn, openPersonal } = useDetails();

  //set correct details
  function onClick(id: string) {
    showExperienceDetails(id);
  }

  function backToProfile() {
    openPersonal();
  }

  const cardsArray = Object.values(experienceData.cards);

  return (
    <FeaturePreviewDisk>
      {isDetailsOn || (
        <HideBtn onClick={backToProfile}>Back to profile</HideBtn>
      )}
      {isDetailsOn ||
        cardsArray.map((card, i) => (
          <FeaturePreviewCard
            key={i}
            isLoading={isLoading}
            error={error}
            onClick={() => onClick(card.id)}
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
      {isDetailsOn && <ExperienceDetails />}
    </FeaturePreviewDisk>
  );
}

export default Experience;
