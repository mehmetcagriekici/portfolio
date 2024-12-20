//imports
import DetailsList from "../../components/DetailsList";
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import ProgressChart from "../../components/ProgressChart";
import {
  DEF_DETAILS_GRID_MD,
  DEF_DETAILS_GRID_SM,
  DEF_DETAILS_GRID_XL,
  DEF_DETAILS_HIDE_BTN_STYLES_MD,
  DEF_DETAILS_HIDE_BTN_STYLES_SM,
  DEF_DETAILS_HIDE_BTN_STYLES_XL,
} from "../../utils/constants";
import { useDetails } from "../details/useDetails";
import { useEducation } from "./useEducation";

function EducationDetails() {
  const { educationData, isLoading, error } = useEducation();
  const { id, closeDetails } = useDetails();

  const current = educationData.screens[id];

  function onClick() {
    closeDetails();
  }

  const defaultContainerStyle =
    "overflow-y-auto bg-gradient-to-b from-sky-700/20 to-sky-300/30 shadow-lg border-2 border-sky-300/50 rounded-md";

  return (
    <FeaturePreviewScreen isLoading={isLoading} error={error}>
      <div
        className={`${DEF_DETAILS_GRID_SM} ${DEF_DETAILS_GRID_MD} ${DEF_DETAILS_GRID_XL} bg-sky-500 p-2 xl:bg-sky-900/80`}
      >
        <button
          onClick={onClick}
          className={`${DEF_DETAILS_HIDE_BTN_STYLES_SM} ${DEF_DETAILS_HIDE_BTN_STYLES_MD} ${DEF_DETAILS_HIDE_BTN_STYLES_XL} bg-sky-600 border-sky-700 m-0 mr-2 rounded-md md:bg-sky-900/60 md:text-sky-100 xl:bg-sky-600/40 xl:hover:bg-sky-400/60`}
        >
          hide details
        </button>

        <div
          className={`row-start-2 row-span-4 col-span-8 ${defaultContainerStyle} md:row-start-1 md:row-span-3 md:col-start-2 md:col-span-10 md:mt-1 xl:row-start-2 xl:col-start-1 xl:row-span-4 xl:col-span-8 xl:ml-2`}
        >
          {current.summary && (
            <p className="leading-relaxed tracking-tight font-black text-lg text-gray-900 md:text-xl lg:text-2xl">
              {current.summary}
            </p>
          )}
          {current.progress && <ProgressChart progress={current.progress} />}
          {current.date && (
            <p className="text-2xl font-semibold tracking-wide">
              {current.date}
            </p>
          )}
        </div>

        <div
          className={`row-start-6 row-span-4 col-span-8 overflow-hidden ${defaultContainerStyle} md:row-start-4 md:row-span-3 md:col-start-2 md:col-span-10 md:ml-5 md:mr-5 md:mt-1 xl:col-start-1 xl:ml-2 xl:col-span-4 xl:row-start-6 xl:row-span-5 xl:mt-4`}
        >
          <DetailsList
            itemsArray={[
              { key: "course name: ", value: current.name, link: false },
              {
                key: "course owner: ",
                value: current.owner,
                link: false,
              },
              {
                key: "course platform: ",
                value: current.platform,
                link: false,
              },
              { key: "course link: ", value: current.link, link: true },
            ]}
            colors={{
              listBorder: "border-sky-300/70",
              anchorBorder: "border-sky-800/60",
              anchorBackground: "bg-sky-300/50",
              text: "text-stone-800",
            }}
          />
        </div>
        {/*Certificate*/}
      </div>
    </FeaturePreviewScreen>
  );
}

export default EducationDetails;
