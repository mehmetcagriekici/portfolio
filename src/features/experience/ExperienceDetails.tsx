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
  const { id, closeDetails } = useDetails();

  //current detail
  const current = experienceData.screens[id];

  function onClick() {
    closeDetails();
  }

  //hide images container if there are no images
  const noImages = current.images.length ? "" : "hidden";

  return (
    <FeaturePreviewScreen isLoading={isLoading} error={error}>
      {/*absolute*/}
      <HideBtn onClick={onClick}>hide details</HideBtn>

      {/*flexbox*/}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-full flex flex-col justify-safe-center items-safe-center bg-gradient-to-b from-indigo-900/40 to-indigo-300/50 border-t-2 border-indigo-900/90 overflow-y-auto lg:h-[90%]">
        {/*images*/}
        <div
          className={`${noImages} w-5/6 border-b-2 border-indigo-600 lg:h-1/2`}
        >
          <Slider imagesArray={current.images} />
        </div>

        <div className="w-4/5 text-indigo-100 tracking-widest leading-relaxed p-2 border-b-2 border-indigo-600 md:text-xl lg:text-2xl">
          <p>{current.summary}</p>
        </div>

        {/*Link to github link to netlify*/}
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
      </div>
    </FeaturePreviewScreen>
  );
}

export default ExperienceDetails;
