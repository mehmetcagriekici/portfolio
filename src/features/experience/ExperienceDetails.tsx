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

  return (
    <FeaturePreviewScreen isLoading={isLoading} error={error}>
      <HideBtn onClick={onClick}>hide details</HideBtn>

      <div className="">
        <Slider imagesArray={current.images} />
      </div>

      <div className="">
        <p>{current.summary}</p>
      </div>

      <div className="">
        <DetailsList
          itemsArray={[
            { key: "project name: ", value: current.name, link: false },
            { key: "project date: ", value: current.date, link: false },
            {
              key: "project contributers: ",
              value: CONVERT_LIST_TO_STR(current.contributers),
              link: false,
            },
            { key: "project link: ", value: current.link, link: true },
          ]}
          colors={{
            listBorder: "border-yellow-300/50 xl:border-slate-500",
            anchorBorder: "border-yellow-700/30 xl:border-transparent",
            anchorBackground: "bg-yellow-200/40 bg-cyan-400/30",
            text: "text-slate-900",
          }}
        />
      </div>
    </FeaturePreviewScreen>
  );
}

export default ExperienceDetails;
