//imports
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setId, showDetails } from "../details/detailsSlice";

export function useExperience() {
  const dispatch = useAppDispatch();

  //show details
  function showExperienceDetails(id: string) {
    dispatch(setId(id));
    dispatch(showDetails());
  }

  return { showExperienceDetails };
}
