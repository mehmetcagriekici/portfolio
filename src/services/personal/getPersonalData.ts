import { PersonalData } from "../../utils/types";
import { personal_data } from "./personal_data";

export async function getPersonalData() {
  const personalData: PersonalData = personal_data;

  if (personalData) return personalData;

  return null;
}
