//imports
import DetailsList from "../../components/DetailsList";
import FeaturePreviewScreen from "../../components/FeaturePreviewScreen";
import {
  DEF_DETAILS_GRID_MD,
  DEF_DETAILS_GRID_SM,
  DEF_DETAILS_GRID_XL,
  DEF_DETAILS_HIDE_BTN_STYLES_MD,
  DEF_DETAILS_HIDE_BTN_STYLES_SM,
  DEF_DETAILS_HIDE_BTN_STYLES_XL,
} from "../../utils/constants";
import { useDetails } from "../details/useDetails";
import { useProfessional } from "./useProfessional";

function ProfessionalDetails() {
  const { professionalData, isLoading, error } = useProfessional();
  const { id, closeDetails } = useDetails();

  const current = professionalData.screens[id];

  function onClick() {
    closeDetails();
  }

  return (
    <FeaturePreviewScreen isLoading={isLoading} error={error}>
      <div
        className={`${DEF_DETAILS_GRID_SM} ${DEF_DETAILS_GRID_MD} ${DEF_DETAILS_GRID_XL}`}
      >
        <button
          onClick={onClick}
          className={`${DEF_DETAILS_HIDE_BTN_STYLES_SM} ${DEF_DETAILS_HIDE_BTN_STYLES_MD} ${DEF_DETAILS_HIDE_BTN_STYLES_XL}`}
        >
          hide details
        </button>

        <div>
          <p>{current.summary}</p>
        </div>

        <div>
          <DetailsList
            itemsArray={[
              { key: "job name: ", value: current.name, link: false },
              { key: "job type: ", value: current.type, link: false },
              { key: "customer: ", value: current.customer, link: false },
              { key: "job date: ", value: current.date, link: false },
              { key: "job link: ", value: current.link, link: true },
            ]}
            colors={{
              listBorder: "",
              anchorBorder: "",
              anchorBackground: "",
              text: "",
            }}
          />
        </div>
      </div>
    </FeaturePreviewScreen>
  );
}

export default ProfessionalDetails;
