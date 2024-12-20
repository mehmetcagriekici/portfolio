//imports
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useExperienceData } from "./useExperienceData";
import { setExperienceData } from "./experienceSlice";
import { setId, showDetails } from "../details/detailsSlice";

export function useExperience() {
  const dispatch = useAppDispatch();
  const { experienceData } = useAppSelector((state) => state.experience);

  //from the server
  const { data, isLoading, error } = useExperienceData();

  //update app state
  useEffect(() => {
    if (data) dispatch(setExperienceData(data));
  }, [data]);

  //show details
  function showExperienceDetails(id: string) {
    dispatch(setId(id));
    dispatch(showDetails());
  }

  return { experienceData, isLoading, error, showExperienceDetails };
}
