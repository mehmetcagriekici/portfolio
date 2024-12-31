//imports
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setId, showDetails } from "../details/detailsSlice";
import { usePersonalData } from "./usePersonalData";
import { setPersonalData } from "./personalSlice";

export function usePersonal() {
  const dispatch = useAppDispatch();
  const { personalData } = useAppSelector((state) => state.personal);

  //data coming from the services
  const { data, isLoading, error } = usePersonalData();

  //when data arrives, display data
  useEffect(() => {
    if (data) {
      dispatch(setPersonalData(data));
    }
  }, [data]);

  //send personal data to the details with the id
  function showPersonalDetails() {
    dispatch(setId(personalData.card.id));
    dispatch(showDetails());
  }

  return {
    personalData,
    isLoading,
    error,
    showPersonalDetails,
  };
}
