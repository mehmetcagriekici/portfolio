//imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExperienceData, ExperienceState } from "../../utils/types";

//initial state
const initialState: ExperienceState = {
  experienceData: {
    cards: {},
    screens: {},
  },
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setExperienceData: (state, action: PayloadAction<ExperienceData>) => {
      state.experienceData = action.payload;
    },
  },
});

export const { setExperienceData } = experienceSlice.actions;
export default experienceSlice.reducer;
