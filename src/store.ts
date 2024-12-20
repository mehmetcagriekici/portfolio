import { configureStore } from "@reduxjs/toolkit";

import educationReducer from "./features/education/educationSlice";
import experienceReducer from "./features/experience/experienceSlice";
import professionalReducer from "./features/professional_experience/professionalSlice";
import personalReducer from "./features/personal_information/personalSlice";
import detailsReducer from "./features/details/detailsSlice";

export const store = configureStore({
  reducer: {
    education: educationReducer,
    experience: experienceReducer,
    professional: professionalReducer,
    personal: personalReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
