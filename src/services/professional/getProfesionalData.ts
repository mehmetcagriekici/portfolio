import { professional_data } from "./professional_data";

export async function getProfessionalData() {
  const professionalData = professional_data;

  if (professionalData) return professionalData;

  return null;
}
