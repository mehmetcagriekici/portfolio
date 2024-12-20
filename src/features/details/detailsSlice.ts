//imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailsState } from "../../utils/types";

//initial state
const initialState: DetailsState = {
  id: "-1",
  isDetailsOn: false,
  isAboutToLeave: false,
};

//id will be used to display the correct details
export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    showDetails: (state) => {
      state.isDetailsOn = true;
    },
    hideDetails: (state) => {
      state.isDetailsOn = false;
      state.isAboutToLeave = false;
    },
    displayLeaveAnimation: (state) => {
      state.isAboutToLeave = true;
    },
  },
});

export const { setId, showDetails, hideDetails, displayLeaveAnimation } =
  detailsSlice.actions;
export default detailsSlice.reducer;
