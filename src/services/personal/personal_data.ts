import { PersonalData } from "../../utils/dataTypes";

//move this to the server
export const personal_data: PersonalData = {
  card: {
    name: "Mehmet Cagri Ekici",
    age: 25,
    country: "Turkey",
    id: "personal_data",
  },
  screen: {
    id: "personal_data",
    me: [
      { key: "name", value: "Mehmet Cagri Ekici" },
      { key: "age", value: "25" },
      { key: "country", value: "Turkey" },
      { key: "gender", value: "male" },
    ],
    skills: [
      { skill: "HTML", rating: 4 },
      { skill: "CSS", rating: 4 },
      { skill: "JavaScript", rating: 5 },
      { skill: "React", rating: 5 },
      { skill: "Tailwind", rating: 3 },
      { skill: "SASS", rating: 2 },
      { skill: "Redux", rating: 4 },
      { skill: "TypeScript", rating: 3 },
      { skill: "Vue", rating: 1 },
    ],
    spoken_languages: ["Turkish", "English"],
    hobbies: [
      "jogging",
      "listening to music",
      "reading",
      "writing",
      "playing video games",
      "playing guitar (finger style)",
      "swimming",
      "cooking",
      "coding",
      "binge watching tv series and watching movies",
    ],
    photo: "pp.jpg",
    socials: [
      { key: "gmail", value: "mehmetcagriekici@gmail.com" },
      {
        key: "codewars",
        value: "https://www.codewars.com/users/mehmetcagriekici",
      },
      { key: "github", value: "https://github.com/mehmetcagriekici" },
      {
        key: "linkedin",
        value:
          "https://www.linkedin.com/in/mehmet-%C3%A7a%C4%9Fr%C4%B1-ekici-3a0489221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
};
