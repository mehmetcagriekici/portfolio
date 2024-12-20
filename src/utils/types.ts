interface DataCore {
  id: string;
  name: string;
  date: string;
}

///FEATURE EDUCATION
export interface EducationCard extends DataCore {
  owner: string;
  platform: string;
}

interface EducationScreen extends EducationCard {
  progress: string;
  link: string;
  summary: string;
}

export interface EducationData {
  cards: { [key: string]: EducationCard };
  screens: { [key: string]: EducationScreen };
}

export interface EducationState {
  educationData: EducationData;
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
}

export interface ExperienceData {
  cards: { [key: string]: ExperienceCard };
  screens: { [key: string]: ExperinceScreen };
}

export interface ExperienceState {
  experienceData: ExperienceData;
}

///FEATURE PROFESIONAL
export interface ProfessionalCard extends DataCore {
  customer: string;
  type: string;
}

interface ProfessionalScreen extends ProfessionalCard {
  summary: string;
  link: string;
}

export interface ProfessionalData {
  cards: { [key: string]: ProfessionalCard };
  screens: { [key: string]: ProfessionalScreen };
}

export interface ProfessionalState {
  professionalData: ProfessionalData;
}

///FEATURE PERSONAL
interface PersonalCard {
  name: string;
  age: number;
  country: string;
  gender: string;
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
  children: JSX.Element;
  isLoading: boolean;
  error: string;
}

export interface FeatureDiskProps {
  //JSX.Element only in Personal
  children: JSX.Element[] | JSX.Element;
  //styles
  styles: {
    bg: string;
    z: string;
    bottom: string;
    responsive_width: string;
    responsive_height: string;
    responsive_border: string;
    display: string;
  };
}

export interface FeatureCardProps {
  children: JSX.Element;
  onClick: () => void;
  //data
  isLoading: boolean;
  error: string;
  //styles
  styles: {
    bg: string;
    height: string;
    width: string;
    display: string;
    border: string;
    position: absolutePositions;
  };
  //card shape
  feature: string;
}

export interface ProgressChartProps {
  progress: string;
}

export interface DetailsListProps {
  itemsArray: { key: string; value: string; link: boolean }[];
  colors: {
    listBorder: string;
    anchorBorder: string;
    anchorBackground: string;
    text: string;
  };
}

export interface CardListProps {
  itemsArray: string[];
  styles: {
    ul: string;
    li: string;
  };
}

export interface SliderProps {
  imagesArray: string[];
}

export interface StarRatingProps {
  rating: number;
}

export interface ErrorProps {
  errorMessage: string;
}

export interface CardButtonProps {
  feature: string;
  position: absolutePositions;
  onClick: () => void;
}
