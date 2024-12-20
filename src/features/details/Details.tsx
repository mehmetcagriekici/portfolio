//imports
import Error from "../../components/Error";
import { DETAILS_DISPLAY_ERROR } from "../../utils/constants";
import EducationDetails from "../education/EducationDetails";
import ExperienceDetails from "../experience/ExperienceDetails";
import PersonalDetails from "../personal_information/PersonalDetails";
import ProfessionalDetails from "../professional_experience/ProfessionalDetails";
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
    <div
      className={`absolute z-50 top-0 left-1/2 -translate-x-1/2 h-full w-full ${
        isAboutToLeave
          ? "details-leave xl:details-leave--xl"
          : isDetailsOn
          ? "details-enter xl:details-enter--xl"
          : ""
      } md:z-0 xl:z-50`}
    >
      {feature === "personal" ? (
        <PersonalDetails />
      ) : feature === "education" ? (
        <EducationDetails />
      ) : feature === "experience" ? (
        <ExperienceDetails />
      ) : feature === "professional" ? (
        <ProfessionalDetails />
      ) : (
        <Error errorMessage={DETAILS_DISPLAY_ERROR} />
      )}
    </div>
  );
}

export default Details;
