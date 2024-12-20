//imports
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useProfessionalData } from "./useProfessionalData";
import { setProfessionalData } from "./professionalSlice";
import { setId, showDetails } from "../details/detailsSlice";

export function useProfessional() {
  const dispatch = useAppDispatch();
  const { professionalData } = useAppSelector((state) => state.professional);

  const { data, isLoading, error } = useProfessionalData();

  useEffect(() => {
    if (data) dispatch(setProfessionalData(data));
  }, [data]);

  function showProfessionalDetails(id: string) {
    dispatch(setId(id));
    dispatch(showDetails());
  }

  return { professionalData, isLoading, error, showProfessionalDetails };
}
