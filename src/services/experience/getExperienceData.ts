import { experience_data } from "./experience_data";

export async function getExperienceData() {
  const experienceData = experience_data;

  if (experienceData) return experienceData;

  return null;
}
