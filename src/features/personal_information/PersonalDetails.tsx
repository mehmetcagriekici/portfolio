//imports
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import HideBtn from "../../components/HideBtn";
import PersonalText from "../../components/PersonalText";
import Socials from "../../components/Socials";
import StarRating from "../../components/StarRating";
import { DEF_IMG_STYLES } from "../../utils/constants";
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
      {/*Close button*/}
      <HideBtn onClick={onClick}>hide details</HideBtn>

      {/*Image Container*/}
      <div className="absolute rounded-full top-0 left-0 translate-x-1/2 translate-y-1/4 w-1/2 h-1/4 border-2 border-indigo-300/50 md:w-2/5 md:left-1/2 md:-translate-x-1/2 xl:top-1/2 xl:left-2 xl:-translate-y-1/2 xl:translate-x-0 xl:w-1/4 xl:h-1/3 2xl:h-1/2">
        <img
          src={me.photo}
          alt="photo"
          className={`${DEF_IMG_STYLES} rounded-full`}
        />
      </div>

      {/*rest flex box*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 h-2/3 w-full overflow-y-auto flex flex-col justify-safe-center items-safe-center bg-gradient-to-b from-indigo-900/40 to-indigo-300/50 border-t-2 border-indigo-900/90 lg:text-3xl xl:w-4/5 xl:h-[90%] xl:right-0 xl:top-1/2 xl:-translate-x-1/4 xl:-translate-y-1/2 xl:mt-10 xl:bg-none">
        {/*Personal Information, name, age etc.*/}
        <div className=" w-4/5 border-b-2 border-indigo-600/60 flex flex-col gap-1 p-3">
          {me.me.map((el, i) => (
            <p
              key={i}
              className="flex justify-center items-center gap-3 tracking-wider"
            >
              <span className="capitalize text-indigo-100">{el.key}: </span>
              <em className="text-indigo-200">{el.value}</em>
            </p>
          ))}
        </div>

        {/*My coding skills*/}
        <ul className="w-4/5 mt-1 p-2 border-b-2 flex flex-col gap-2 border-indigo-600">
          {me.skills.map((skill, i) => (
            <li key={i} className="shadow-sm">
              <StarRating skill={skill} />
            </li>
          ))}
        </ul>

        {/*My hobbies*/}
        <PersonalText>
          My hobbies are {CONVERT_LIST_TO_STR(me.hobbies)}
        </PersonalText>

        {/*Spoken Languages*/}
        <PersonalText>
          I speak {CONVERT_LIST_TO_STR(me.spoken_languages)}
        </PersonalText>
        {/* !!! ADD SOCIALS !!! */}
        <Socials socials={personalData.screen.socials} />
      </div>
    </FeaturePreviewScreen>
  );
}

export default PersonalDetails;
