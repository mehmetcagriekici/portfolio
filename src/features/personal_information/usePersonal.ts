//imports
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setId, showDetails } from "../details/detailsSlice";
import { usePersonalData } from "./usePersonalData";
import { setPersonalData } from "./personalSlice";

export function usePersonal() {
  const dispatch = useAppDispatch();
  const { personalData } = useAppSelector((state) => state.personal);

  const { data, isLoading, error } = usePersonalData();

  useEffect(() => {
    if (data) {
      dispatch(setPersonalData(data));
    }
  }, [data]);

  function showPersonalDetails() {
    dispatch(setId(personalData.card.id));
    dispatch(showDetails());
  }

  return { personalData, isLoading, error, showPersonalDetails };
}
