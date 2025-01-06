//imports
import FeaturePreviewDisk from "../../components/FeaturePreviewDisk";
import PersonalDetails from "./PersonalDetails";

function Personal() {
  return (
    <FeaturePreviewDisk>
      {/*Details for personal is always true*/}
      <PersonalDetails />
    </FeaturePreviewDisk>
  );
}

export default Personal;
