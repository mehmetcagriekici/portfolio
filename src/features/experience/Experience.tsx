//imports
import CardList from "../../components/CardList";
import Error from "../../components/Error";
import FeaturePreviewCard from "../../components/FeaturePreviewCard";
import FeaturePreviewDisk from "../../components/FeaturePreviewDisk";
import HideBtn from "../../components/HideBtn";
import Loader from "../../components/Loader";
import { CONVERT_LIST_TO_STR } from "../../utils/helpers";
import { useDetails } from "../details/useDetails";
import ExperienceDetails from "./ExperienceDetails";
import { useExperience } from "./useExperience";
import { useExperienceData } from "./useExperienceData";

function Experience() {
  //experience data
  const { data, error, isLoading } = useExperienceData();

  //ui experience app state
  const { showExperienceDetails } = useExperience();

  //details
  const { isDetailsOn, openPersonal } = useDetails();

  //set correct details
  function onClick(id: string) {
    showExperienceDetails(id);
  }

  function backToProfile() {
    openPersonal();
  }

  if (error) return <Error errorMessage={error.message} />;
  if (isLoading) return <Loader />;

  if (data) {
    //destructure data
    const { cards } = data;

    return (
      <FeaturePreviewDisk>
        {isDetailsOn || (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <HideBtn onClick={backToProfile}>Back to profile</HideBtn>
          </div>
        )}
        {isDetailsOn ||
          cards.map((card, i) => (
            <FeaturePreviewCard
              key={i}
              onClick={() => onClick(card.key)}
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
}

export default Experience;
