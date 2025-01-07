//imports
import DetailsList from "../../components/DetailsList";
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import HideBtn from "../../components/HideBtn";
import Slider from "../../components/Slider";
import { CONVERT_LIST_TO_STR } from "../../utils/helpers";
import { useDetails } from "../details/useDetails";
import { useExperience } from "./useExperience";

function ExperienceDetails() {
  const { experienceData, isLoading, error } = useExperience();
  //updated onClick to the card
  //the key will be used to select the correct data piece from the screens object
  const { id } = useDetails();

  const { closeDetails, openPersonal } = useDetails();

  function onClick() {
    closeDetails();
  }

  function backToProfile() {
    closeDetails();
    openPersonal();
  }

  //current detail
  const current = experienceData.screens[id];

  return (
    <FeaturePreviewScreen isLoading={isLoading} error={error}>
      {/*images*/}
      <Slider imagesArray={current.images} />

      <div className="tracking-wide leading-relaxed text-base text-black font-orb md:text-2xl md:tracking-wider md:p-2 lg:text-3xl lg:tracking-widest xl:text-xl">
        <p>{current.summary}</p>
      </div>

      <DetailsList
        itemsArray={[
          { key: "project name:", value: current.name, link: false },
          { key: "project date:", value: current.date, link: false },
          {
            key: "project contributors:",
            value: CONVERT_LIST_TO_STR(current.contributers),
            link: false,
          },
          { key: "github", value: current.link, link: true },
          { key: "netlify", value: current.deploy, link: true },
        ]}
      />
      <HideBtn onClick={onClick}>hide details</HideBtn>
      <HideBtn onClick={backToProfile}>Back to profile</HideBtn>
    </FeaturePreviewScreen>
  );
}

export default ExperienceDetails;
