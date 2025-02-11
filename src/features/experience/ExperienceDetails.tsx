//imports
import DetailsList from "../../components/DetailsList";
import Error from "../../components/Error";
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import HideBtn from "../../components/HideBtn";
import Loader from "../../components/Loader";
import Slider from "../../components/Slider";
import { CONVERT_LIST_TO_STR } from "../../utils/helpers";
import { useDetails } from "../details/useDetails";
import { useExperienceData } from "./useExperienceData";

function ExperienceDetails() {
  //get data
  const { data, error, isLoading } = useExperienceData();
  //updated onClick to the card
  //the key will be used to select the correct data piece from the screens object
  const { id } = useDetails();

  const { closeDetails, openPersonal } = useDetails();

  function onClick() {
    closeDetails();
  }

  function backToProfile() {
    closeDetails();
    openPersonal();
  }

  if (error) return <Error errorMessage={error.message} />;
  if (isLoading) return <Loader />;

  if (data) {
    //destructure data
    const { details } = data;

    //current with the key
    const current = details.find((curr) => curr.key === id);

    if (current)
      return (
        <FeaturePreviewScreen>
          {/*images*/}
          <Slider imagesArray={current.images} />

          <div className="tracking-wide leading-relaxed text-base text-black font-orb md:text-2xl md:tracking-wider md:p-2 lg:text-3xl lg:tracking-widest xl:text-xl">
            <p>{current.summary}</p>
          </div>

          <DetailsList
            itemsArray={[
              { key: "project name:", value: current.name, link: false },
              { key: "project date:", value: current.date, link: false },
              {
                key: "project contributors:",
                value: CONVERT_LIST_TO_STR(current.contributers),
                link: false,
              },
              { key: "github", value: current.link, link: true },
              { key: "hosting", value: current.deploy, link: true },
            ]}
          />
          <HideBtn onClick={onClick}>hide details</HideBtn>
          <HideBtn onClick={backToProfile}>Back to profile</HideBtn>
        </FeaturePreviewScreen>
      );
  }

  return "";
}

export default ExperienceDetails;
