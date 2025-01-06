//imports
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import HideBtn from "../../components/HideBtn";
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

  function onClick() {
    closeDetails();
    openExp();
  }

  return (
    <FeaturePreviewScreen isLoading={isLoading} error={error}>
      {/*Image Container*/}
      <div className="min-h-[30%] w-3/5 flex flex-row justify-center items-center gap-5 overflow-hidden rounded-full">
        <img
          src={me.photo}
          alt="photo"
          className="h-full w-full object-cover rounded-full"
        />
      </div>

      {/*Personal Information, name, age etc.*/}
      <div className="capitalize tracking-wide font-orb text-base flex flex-col justify-center items-center gap-1 w-full">
        {me.me.map((el, i) => (
          <p key={i}>
            <span>{el.key}: </span>
            <em>{el.value}</em>
          </p>
        ))}
      </div>

      {/*My coding skills*/}
      <ul className="w-4/5 flex flex-col justify-center items-center gap-2">
        {me.skills.map((skill, i) => (
          <li key={i} className="shadow-sm w-full">
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
