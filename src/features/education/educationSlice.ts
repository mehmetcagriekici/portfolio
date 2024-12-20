//imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EducationData, EducationState } from "../../utils/types";

//initial state
const initialState: EducationState = {
  educationData: {
    cards: {},
    screens: {},
  },
};

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    //entire education data
    setEducationData: (state, action: PayloadAction<EducationData>) => {
      state.educationData = action.payload;
    },
  },
});

export const { setEducationData } = educationSlice.actions;
export default educationSlice.reducer;
