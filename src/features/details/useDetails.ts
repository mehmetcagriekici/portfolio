//imports
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  hideDetails,
  hideImageModal,
  hideExp,
  showExp,
  showImageModal,
} from "./detailsSlice";

//only used to display the details, and
//which details to display
export function useDetails() {
  const { id, isDetailsOn } = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();

  //open details, on feature custom hooks: useExperience, usePersonal
  function closeDetails() {
    dispatch(hideDetails());
  }

  //show image modal
  function openImg(currSrc: string) {
    dispatch(showImageModal(currSrc));
  }

  //close img modal
  function closeImg() {
    dispatch(hideImageModal());
  }

  //to toggle between personal and experience
  function openExp() {
    dispatch(showExp());
  }

  function openPersonal() {
    dispatch(hideExp());
  }

  return {
    id,
    isDetailsOn,
    closeDetails,
    openImg,
    closeImg,
    openExp,
    openPersonal,
  };
}
