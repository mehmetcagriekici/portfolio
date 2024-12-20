//imports
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import StarRating from "../../components/StarRating";
import {
  COMMON_PERSONAL_HOBBIES_AND_LANGUAGES,
  COMMON_PERSONAL_IMG_AND_PERSONAL_INF,
  COMMON_PERSONAL_UL_AND_LI,
  DEF_DETAILS_GRID_MD,
  DEF_DETAILS_GRID_SM,
  DEF_DETAILS_GRID_XL,
  DEF_DETAILS_HIDE_BTN_STYLES_MD,
  DEF_DETAILS_HIDE_BTN_STYLES_SM,
  DEF_DETAILS_HIDE_BTN_STYLES_XL,
  DEF_IMG_STYLES,
} from "../../utils/constants";
import { CONVERT_LIST_TO_STR } from "../../utils/helpers";
import { useDetails } from "../details/useDetails";
import { usePersonal } from "./usePersonal";

function PersonalDetails() {
  //global state variables
  //already uploaded from the server (after it is built) with the initiation of the app
  const { personalData, isLoading, error } = usePersonal();
  const { closeDetails } = useDetails();

  //current data (for personal there is only one data)
  const me = personalData.screen;

  function onClick() {
    closeDetails();
  }

  return (
    <FeaturePreviewScreen isLoading={isLoading} error={error}>
      <div
        className={`${DEF_DETAILS_GRID_SM} ${DEF_DETAILS_GRID_MD} ${DEF_DETAILS_GRID_XL} bg-purple-500 xl:bg-purple-950/80`}
      >
        {/*Close button*/}
        <button
          onClick={onClick}
          className={`${DEF_DETAILS_HIDE_BTN_STYLES_SM} ${DEF_DETAILS_HIDE_BTN_STYLES_MD} ${DEF_DETAILS_HIDE_BTN_STYLES_XL} bg-purple-600 border-purple-700 md:bg-purple-900/80 md:text-purple-100 xl:bg-purple-900/20 xl:hover:bg-purple-300/60`}
        >
          hide details
        </button>

        {/*Image Container*/}
        <div
          className={`${COMMON_PERSONAL_IMG_AND_PERSONAL_INF} col-start-1 col-span-3 border-2 shadow-lg bg-gradient-to-tr m-2 mb-0 md:col-start-3 md:col-span-4 md:circle md:revCircleMd md:rounded-full from-amber-600/80 to-sky-800/90 border-purple-800 xl:border-none xl:resetClip xl:row-start-1 xl:row-span-4 xl:col-start-1 xl:col-end-4`}
        >
          <img
            src={me.photo}
            alt="photo"
            className={`${DEF_IMG_STYLES} opacity-90 rounded-md md:rounded-full xl:rounded-md`}
          />
        </div>

        {/*Personal Information, name, age etc.*/}
        <div
          className={`${COMMON_PERSONAL_IMG_AND_PERSONAL_INF} col-start-3 col-span-7 flex flex-col justify-center items-end text-lg pr-4 pt-3 capitalize text-nowrap font-black shadow-sm border-b-2 md:col-start-7 md:col-span-5 md:text-xl md:tracking-tighter md:items-center md:rounded-br-full lg:text-2xl border-purple-700 xl:row-start-1 xl:row-span-4 xl:col-start-4 xl:col-span-3 xl:mt-2 xl:border-none xl:items-start xl:justify-around xl:pl-2 xl:text-3xl xl:bg-amber-600 xl:text-slate-900 xl:tracking-wider`}
        >
          {me.me.map((el, i) => (
            <p key={i}>
              <span>{el.key}: </span>
              <em>{el.value}</em>
            </p>
          ))}
        </div>

        {/*My coding skills*/}
        <ul
          className={`${COMMON_PERSONAL_UL_AND_LI} row-start-5 row-span-2 col-span-8 flex-wrap gap-5 overflow-auto rounded-md shadow-md ml-2 md:row-start-3 md:row-span-1 md:col-span-12 md:overflow-hidden md:overflow-x-auto md:shadow-none lg:text-2xl bg-purple-600/30 xl:row-start-5 xl:row-span-4 xl:col-start-6 xl:col-span-4 xl:mt-2 xl:overflow-x-hidden xl:overflow-y-auto xl:bg-cyan-600 xl:text-slate-300`}
        >
          {me.skills.map((skill, i) => (
            <li
              key={i}
              className={`${COMMON_PERSONAL_UL_AND_LI} common border-2 rounded-sm shadow-sm font-black flex-col select-none md:flex-row md:gap-2 border-purple-800 bg-purple-600`}
            >
              <span
                className={`tracking-wide underline text-gray-800 xl:text-slate-100`}
              >
                {skill.skill}
              </span>
              <StarRating rating={skill.rating} />
            </li>
          ))}
        </ul>

        {/*My hobbies*/}
        <p
          className={`${COMMON_PERSONAL_HOBBIES_AND_LANGUAGES} row-start-7 row-span-4 mt-2 mb-0 overflow-auto md:row-start-1 md:row-span-2 md:justify-safe-center md:items-safe-center md:text-nowrap md:pb-1 xl:row-start-6 xl:row-span-4 xl:col-start-1 xl:col-span-4 xl:overflow-x-hidden xl:text-wrap xl:leading-relaxed xl:bg-gray-200 xl:text-slate-950`}
        >
          My hobbies are {CONVERT_LIST_TO_STR(me.hobbies)}
        </p>

        {/*Spoken Languages*/}
        <p
          className={`${COMMON_PERSONAL_HOBBIES_AND_LANGUAGES} row-start-11 row-span-3 md:row-start-4 md:row-span-1 md:p-1 md:justify-center md:items-center xl:row-start-11 xl:row-span-1 xl:col-start-4 xl:col-span-3 xl:bg-lime-400 xl:tracking-wide`}
        >
          I speak {CONVERT_LIST_TO_STR(me.spoken_languages)}
        </p>
        {/* !!! ADD SOCIALS !!! */}
      </div>
    </FeaturePreviewScreen>
  );
}

export default PersonalDetails;
