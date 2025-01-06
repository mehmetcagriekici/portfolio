//imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailsState } from "../../utils/types";

//initial state
const initialState: DetailsState = {
  id: "-1",
  isDetailsOn: false,
  isImgOn: false,
  currSrc: "",
  isExpOn: false,
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
    },
    showImageModal: (state, action: PayloadAction<string>) => {
      state.isImgOn = true;
      state.currSrc = action.payload;
    },
    hideImageModal: (state) => {
      state.isImgOn = false;
    },
    showExp: (state) => {
      state.isExpOn = true;
    },
    hideExp: (state) => {
      state.isExpOn = false;
    },
  },
});

export const {
  setId,
  showDetails,
  hideDetails,
  showImageModal,
  hideImageModal,
  showExp,
  hideExp,
} = detailsSlice.actions;
export default detailsSlice.reducer;
