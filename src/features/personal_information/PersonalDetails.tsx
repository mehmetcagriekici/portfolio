//imports
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import HideBtn from "../../components/HideBtn";
import LazyImage from "../../components/LazyImage";
import PersonalText from "../../components/PersonalText";
import Socials from "../../components/Socials";
import StarRating from "../../components/StarRating";
import { CONVERT_LIST_TO_STR } from "../../utils/helpers";
import { useDetails } from "../details/useDetails";
import { usePersonal } from "./usePersonal";

function PersonalDetails() {
  //global state variables
  //already uploaded from the server (after it is built) with the initiation of the app
  const { personalData, isLoading, error } = usePersonal();

  //current data (for personal there is only one data)
  const me = personalData.screen;

  const { closeDetails, openExp } = useDetails();

  //hide details, precaussion
  //open experiences
  function onClick() {
    closeDetails();
    openExp();
  }

  return (
    <FeaturePreviewScreen isLoading={isLoading} error={error}>
      {/*Image Container*/}
      <div className="min-h-[30%] w-3/5 flex flex-row justify-center items-center gap-5 overflow-hidden rounded-full md:min-h-[35%] md:w-1/2 xl:w-1/3 xl:min-h-[30%] 2xl:min-h-[40%]">
        <LazyImage src={me.photo} />
      </div>

      {/*Personal Information, name, age etc.*/}
      <div className="capitalize tracking-wide font-orb text-base flex flex-col justify-center items-center gap-1 w-full md:text-2xl md:tracking-widest md:gap-2 xl:text-xl">
        {me.me.map((el, i) => (
          <p key={i}>
            <span>{el.key}: </span>
            <em>{el.value}</em>
          </p>
        ))}
      </div>

      {/*My coding skills*/}
      <ul className="w-4/5 flex flex-col justify-center items-center gap-2 md:gap-4">
        {me.skills.map((skill, i) => (
          <li key={i} className="w-full flex justify-center items-center">
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
      {/* Socials*/}
      <Socials socials={personalData.screen.socials} />

      <HideBtn onClick={onClick}>Show Projects</HideBtn>
    </FeaturePreviewScreen>
  );
}

export default PersonalDetails;
