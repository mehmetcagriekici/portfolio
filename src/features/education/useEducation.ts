//imports
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEducationData } from "./useEducationData";
import { setEducationData } from "./educationSlice";
import { setId, showDetails } from "../details/detailsSlice";

export function useEducation() {
  const dispatch = useAppDispatch();
  const { educationData } = useAppSelector((state) => state.education);

  const { data, isLoading, error } = useEducationData();

  //update app state, initially and each time data changes
  useEffect(() => {
    if (data) dispatch(setEducationData(data));
  }, [data]);

  //select current details for screen from the app state
  //show screen
  function showEducationDetails(id: string) {
    dispatch(setId(id));
    dispatch(showDetails());
  }

  return { educationData, isLoading, error, showEducationDetails };
}
