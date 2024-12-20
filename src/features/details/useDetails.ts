//imports
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { DETAILS_ANIMATION_DURATION } from "../../utils/constants";
import { displayLeaveAnimation, hideDetails } from "./detailsSlice";

//only used to display the details, and
//which details to display
export function useDetails() {
  const { id, isDetailsOn, isAboutToLeave } = useAppSelector(
    (state) => state.details
  );
  const dispatch = useAppDispatch();

  function closeDetails() {
    dispatch(displayLeaveAnimation());

    setTimeout(() => {
      dispatch(hideDetails());
    }, DETAILS_ANIMATION_DURATION);
  }

  return { id, isDetailsOn, closeDetails, isAboutToLeave };
}
