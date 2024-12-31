import { configureStore } from "@reduxjs/toolkit";

import experienceReducer from "./features/experience/experienceSlice";
import personalReducer from "./features/personal_information/personalSlice";
import detailsReducer from "./features/details/detailsSlice";

export const store = configureStore({
  reducer: {
    experience: experienceReducer,
    personal: personalReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
