//imports
import React from "react";

interface DataCore {
  id: string;
  name: string;
  date: string;
}

///FEATURE EXPERIENCE
export interface ExperienceCard extends DataCore {
  technologies: string[];
}

interface ExperinceScreen extends ExperienceCard {
  images: string[];
  summary: string;
  contributers: string[];
  link: string;
  deploy: string;
}

export interface ExperienceData {
  cards: { [key: string]: ExperienceCard };
  screens: { [key: string]: ExperinceScreen };
}

export interface ExperienceState {
  experienceData: ExperienceData;
}

///FEATURE PERSONAL
interface PersonalCard {
  name: string;
  age: number;
  country: string;
  id: string;
}

interface PersonalScreen {
  id: string;
  photo: string;
  me: { key: string; value: string }[];
  skills: { skill: string; rating: number }[];
  spoken_languages: string[];
  hobbies: string[];
  socials: { key: string; value: string }[];
}

export interface PersonalData {
  card: PersonalCard;
  screen: PersonalScreen;
}

export interface PersonalState {
  personalData: PersonalData;
}

///FEATURE DETAILS
export interface DetailsState {
  id: string;
  isDetailsOn: boolean;
  isAboutToLeave: boolean;
}

///COMPONENT PROPS
export type absolutePositions = {
  bottom: string;
  left: string;
  transform: string;
};

export interface FeatureScreenProps {
  children: React.ReactNode;
  isLoading: boolean;
  error: string;
}

export interface FeatureDiskProps {
  //JSX.Element only in Personal
  children: React.ReactNode;
  //styles
  styles: { outerContainer: string; innerContainer: string };
}

export interface FeatureCardProps {
  children: React.ReactNode;
  onClick: () => void;
  //data
  isLoading: boolean;
  error: string;
  //styles
  styles: string;
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
  position: absolutePositions;
  onClick: () => void;
}

export interface HideBtnProps {
  onClick: () => void;
  children: React.ReactNode;
}
