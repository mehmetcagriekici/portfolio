//imports
import Error from "../../components/Error";
import { DETAILS_DISPLAY_ERROR } from "../../utils/constants";
import ExperienceDetails from "../experience/ExperienceDetails";
import PersonalDetails from "../personal_information/PersonalDetails";
import { useDetails } from "./useDetails";

function Details() {
  //id to get the correct feature name
  //each element has a unique id, grouped under the feature names
  //ex: education_data__0
  //    feature   x     unique number
  const { id, isDetailsOn, isAboutToLeave } = useDetails();

  //correct feature name, decisive for displaying the details which will be displayed
  const [feature] = id.split("_");

  return (
    //animation and positioning, full screen
    //center the inner container
    <div
      className={`${
        isAboutToLeave
          ? "details-leave xl:details-leave--xl"
          : isDetailsOn
          ? "details-enter xl:details-enter--xl"
          : ""
      } absolute top-0 left-0 z-50 h-dvh w-dvw flex justify-center items-center bg-black/85`}
    >
      {feature === "personal" ? (
        <PersonalDetails />
      ) : feature === "experience" ? (
        <ExperienceDetails />
      ) : (
        <Error errorMessage={DETAILS_DISPLAY_ERROR} />
      )}
    </div>
  );
}

export default Details;
