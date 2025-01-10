//imports
import React from "react";

///FEATURE EXPERIENCE
export interface ExperienceCard {
  key: string;
  name: string;
  date: string;
  technologies: { [key: string]: string };
}

export interface AppExperienceCard {
  key: string;
  name: string;
  date: string;
  technologies: string[];
}

export interface ExperinceDetails extends ExperienceCard {
  images: { [key: string]: string };
  summary: string;
  contributers: { [key: string]: string };
  link: string;
  deploy: string;
}

export interface AppExperienceDetails extends AppExperienceCard {
  images: string[];
  summary: string;
  contributers: string[];
  link: string;
  deploy: string;

}

export interface ExperienceData {
  cards: ExperienceCard[] | null;
  details: ExperinceDetails[] | undefined;
}

export interface ExperienceState {
  experienceData: ExperienceData;
}

///FEATURE PERSONAL
export interface PersonalData {
  name: string;
  age: number;
  country: string;
  feature: string;
  skills: { skill: string; rating: number }[];
  spoken_languages: string[];
  avatar: string;
  socials: { key: string; value: string }[]
}

export interface PersonalState {
  personalData: PersonalData;
}

///FEATURE DETAILS
export interface DetailsState {
  id: string;
  isDetailsOn: boolean;
  isImgOn: boolean;
  currSrc: string;
  isExpOn: boolean;
}

///COMPONENT PROPS

export interface FeatureScreenProps {
  children: React.ReactNode;
}

export interface FeatureDiskProps {
  //JSX.Element only in Personal
  children: React.ReactNode;
}

export interface FeatureCardProps {
  children: React.ReactNode;
  onClick: () => void;
  //index
  cardIndex: number;
}

export interface ProgressChartProps {
  progress: string;
}

export interface DetailsListProps {
  itemsArray: { key: string; value: string; link: boolean }[];
}

export interface CardListProps {
  itemsArray: string[];
}

export interface SliderProps {
  imagesArray: string[];
}

export interface StarRatingProps {
  skill: {
    skill: string;
    rating: number;
  };
}

export interface ErrorProps {
  errorMessage: string;
}

export interface CardButtonProps {
  feature: string;
  onClick: () => void;
}

export interface HideBtnProps {
  onClick: () => void;
  children: React.ReactNode;
}
