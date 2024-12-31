//This file will be removed from the app, after V1 (server)
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
