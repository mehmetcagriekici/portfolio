//imports
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import HideBtn from "../../components/HideBtn";
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
      <div className="absolute rounded-full top-0 left-0 translate-x-1/2 translate-y-1/4 w-1/2 h-1/4 border-2 border-indigo-300/50">
        <img
          src={me.photo}
          alt="photo"
          className={`${DEF_IMG_STYLES} rounded-full`}
        />
      </div>

      {/*rest flex box*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 h-2/3 w-full overflow-y-auto flex flex-col justify-safe-center items-safe-center bg-gradient-to-b from-indigo-900/40 to-indigo-300/50 border-t-2 border-indigo-900/90">
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
        <ul className="w-4/5">
          {me.skills.map((skill, i) => (
            <li key={i} className="flex">
              <span className="">{skill.skill}</span>
              <StarRating rating={skill.rating} />
            </li>
          ))}
        </ul>

        {/*My hobbies*/}
        <p className="">My hobbies are {CONVERT_LIST_TO_STR(me.hobbies)}</p>

        {/*Spoken Languages*/}
        <p className="">I speak {CONVERT_LIST_TO_STR(me.spoken_languages)}</p>
        {/* !!! ADD SOCIALS !!! */}
        <div className="">My Socials</div>
      </div>
    </FeaturePreviewScreen>
  );
}

export default PersonalDetails;
