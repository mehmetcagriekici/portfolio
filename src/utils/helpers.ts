//imports
import {
  EDUCATION_DISK_CARD_POSITIONS,
  EXPERIENCE_DISK_CARD_POSITIONS,
  PROFESSIONAL_DISK_CARD_POSITIONS,
} from "./constants";
import {
  absolutePositions,
  EducationCard,
  ExperienceCard,
  ProfessionalCard,
} from "./types";

//convert given array to a string in the format "el_0, el_1, ..., el_[arr.length-2] and el_[arr.length-1]"
export const CONVERT_LIST_TO_STR = (arr: string[]) =>
  arr.reduce(
    (acc, el, i) =>
      el
        ? acc +
          `${
            arr.length === 1
              ? el + "."
              : i === arr.length - 2
              ? `${el} and `
              : `${i !== arr.length - 1 ? `${el}, ` : `${el}.`}`
          }`
        : "",
    ""
  );

//calculate the positions of the card buttons on the disk, using their indexes
export const CALC_POSITIONS = (
  arr: EducationCard[] | ExperienceCard[] | ProfessionalCard[]
) =>
  arr.map((card, i) => {
    const [feature] = card.id.split("_"); //feature_type__index -> card.id

    let positions: absolutePositions[] = [];

    if (feature === "education") positions = EDUCATION_DISK_CARD_POSITIONS;

    if (feature === "experience") positions = EXPERIENCE_DISK_CARD_POSITIONS;

    if (feature === "professional")
      positions = PROFESSIONAL_DISK_CARD_POSITIONS;

    if (positions[i]) return positions[i];

    return { bottom: "", left: "", transform: "" };
  });
