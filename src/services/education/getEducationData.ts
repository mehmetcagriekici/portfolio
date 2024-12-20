import { EducationData } from "../../utils/types";
import { education_data } from "./education_data";

export async function getEducationData() {
  const educationData: EducationData = education_data;
  if (educationData) return educationData;
  return null;
}
