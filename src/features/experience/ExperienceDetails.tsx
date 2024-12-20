//imports
import DetailsList from "../../components/DetailsList";
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import Slider from "../../components/Slider";
import {
  DEF_DETAILS_GRID_MD,
  DEF_DETAILS_GRID_SM,
  DEF_DETAILS_GRID_XL,
  DEF_DETAILS_HIDE_BTN_STYLES_MD,
  DEF_DETAILS_HIDE_BTN_STYLES_SM,
  DEF_DETAILS_HIDE_BTN_STYLES_XL,
} from "../../utils/constants";
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

  const defaultContainerStyle =
    "overflow-y-auto bg-gradient-to-b from-yellow-700/20 to-yellow-300/30 shadow-lg border-2 border-yellow-300/50 rounded-md";

  return (
    <FeaturePreviewScreen isLoading={isLoading} error={error}>
      <div
        className={`${DEF_DETAILS_GRID_SM} ${DEF_DETAILS_GRID_MD} ${DEF_DETAILS_GRID_XL} bg-yellow-500 xl:bg-yellow-900/80`}
      >
        <button
          onClick={onClick}
          className={`${DEF_DETAILS_HIDE_BTN_STYLES_SM} ${DEF_DETAILS_HIDE_BTN_STYLES_MD} ${DEF_DETAILS_HIDE_BTN_STYLES_XL} bg-yellow-600 border-yellow-700 rounded-sm m-0 mr-2  md:bg-yellow-800/70 md:text-yellow-200 xl:bg-yellow-600/40 xl:hover:bg-yellow-400/60`}
        >
          hide details
        </button>

        <div className="row-start-2 row-span-3 col-span-8 overflow-hidden p-2 md:row-start-1 md:row-span-7 md:col-start-2 md:col-span-5 xl:row-start-1 xl:row-span-5 xl:col-start-1 xl:col-span-4">
          <Slider imagesArray={current.images} />
        </div>

        <div
          className={`row-start-5 row-span-3 col-span-8 ${defaultContainerStyle} p-1 md:row-start-8 md:row-span-2 md:col-start-3 md:col-span-8 xl:row-start-3 xl:col-start-5 xl:row-span-6 xl:col-span-5 xl:bg-lime-400 xl:text-slate-900 xl:tracking-wide xl:leading-relaxed xl:flex xl:justify-center xl:items-center xl:text-xl`}
        >
          <p>{current.summary}</p>
        </div>

        <div
          className={`row-start-8 row-span-4 col-span-8 overflow-hidden ${defaultContainerStyle} p-1 md:row-start-1 md:row-span-7 md:col-start-7 md:col-span-5 xl:row-start-6 xl:col-start-1 xl:col-span-4 xl:row-span-6 xl:ml-2 xl:mr-2 xl:bg-cyan-400`}
        >
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
      </div>
    </FeaturePreviewScreen>
  );
}

export default ExperienceDetails;
