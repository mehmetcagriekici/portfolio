import { PersonalData } from "../../utils/dataTypes";

//move this to the server
export const personal_data: PersonalData = {
  card: {
    name: "Mehmet Cagri Ekici",
    age: 25,
    country: "Turkey",
    gender: "male",
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
      { skill: "HTML", rating: 6 },
      { skill: "CSS", rating: 8 },
      { skill: "JavaScript", rating: 8.5 },
      { skill: "React", rating: 7.5 },
      { skill: "Tailwind", rating: 6 },
      { skill: "SASS", rating: 5 },
      { skill: "Redux", rating: 6 },
      { skill: "TypeScript", rating: 6.5 },
      { skill: "Vue", rating: 4 },
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
    photo: "fake_pp.png",
    socials: [
      { key: "gmail", value: "mehmetcagriekici@gmail.com" },
      {
        key: "codewars",
        value: "https://www.codewars.com/users/mehmetcagriekici",
      },
      { key: "github", value: "" },
      { key: "linkedin", value: "" },
    ],
  },
};
