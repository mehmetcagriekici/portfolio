//This file will be removed from the app, after V1 (server)
//education data
interface EducationCardData {
  id: string;
  name: string;
  date: string;
  owner: string;
  platform: string;
}

interface EducationScreenData extends EducationCardData {
  progress: string;
  certificate: string;
  link: string;
  summary: string;
}
export interface EducationData {
  cards: {
    [key: string]: EducationCardData;
  };
  screens: { [key: string]: EducationScreenData };
}

//experience data
interface ExperienceCardData {
  id: string;
  name: string;
  date: string;
  technologies: string[];
}

interface ExperienceScreenData extends ExperienceCardData {
  images: string[];
  summary: string;
  contributers: string[];
  link: string;
}

export interface ExperienceData {
  cards: {
    [key: string]: ExperienceCardData;
  };

  screens: {
    [key: string]: ExperienceScreenData;
  };
}

//personal data type
type personalKeyValueData = { key: string; value: string };
export interface PersonalData {
  card: {
    name: string;
    age: number;
    country: string;
    gender: string;
    id: string;
  };
  screen: {
    id: string;
    me: personalKeyValueData[];
    skills: { skill: string; rating: number }[];
    spoken_languages: string[];
    hobbies: string[];
    photo: string;
    socials: personalKeyValueData[];
  };
}

//professional data type
interface ProfessionalCard {
  id: string;
  name: string;
  date: string;
  customer: string;
  type: string;
}

interface ProfessionalScreen extends ProfessionalCard {
  summary: string;
  link: string;
}

export interface ProfessionalData {
  cards: {
    [key: string]: ProfessionalCard;
  };

  screens: {
    [key: string]: ProfessionalScreen;
  };
}
