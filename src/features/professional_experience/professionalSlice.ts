//imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfessionalData, ProfessionalState } from "../../utils/types";

const initialState: ProfessionalState = {
  professionalData: {
    cards: {},
    screens: {},
  },
};

export const professionalSlice = createSlice({
  name: "professional",
  initialState,
  reducers: {
    setProfessionalData: (state, action: PayloadAction<ProfessionalData>) => {
      state.professionalData = action.payload;
    },
  },
});

export const { setProfessionalData } = professionalSlice.actions;
export default professionalSlice.reducer;
