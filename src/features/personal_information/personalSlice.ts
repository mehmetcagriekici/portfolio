//imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonalData, PersonalState } from "../../utils/types";

//personal data is different than other feature datas, there is only one person
const initialState: PersonalState = {
  personalData: {
    card: {
      id: "",
      name: "",
      age: -1,
      country: "",
    },
    screen: {
      id: "",
      photo: "",
      me: [],
      skills: [],
      spoken_languages: [],
      hobbies: [],
      socials: [],
    },
  },
};

export const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    setPersonalData: (state, action: PayloadAction<PersonalData>) => {
      state.personalData = action.payload;
    },
  },
});

export const { setPersonalData } = personalSlice.actions;
export default personalSlice.reducer;
