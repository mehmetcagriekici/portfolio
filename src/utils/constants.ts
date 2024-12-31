//imports
import { absolutePositions } from "./types";

//error messages
export const PERSONAL_DATA_FETCH_ERROR =
  "Personal data could not be fetched from the server";
export const EXPERIENCE_DATA_FETCH_ERROR =
  "Unexpected error! Server is unresponsive or fetch request is failed for another reason.";
export const DETAILS_DISPLAY_ERROR =
  "An error occured, trying to display the details. No Feature Found!";

export const SLIDER_NO_IMAGES_MESSAGE =
  "We are sorry to inform you that we are not able to show you any images for this item you've just opened. This is not an error, we've decided either the visual expression was not necessary, or we weren't able to find the images of this part.";

export const DETAILS_ANIMATION_DURATION = 1500; //ms

//styles
export const DEF_IMG_STYLES = "h-full w-full object-cover select-none";

//positions for card placement on the disk on different screens
//bottom and left -> css values
//transform -> tailwind style, to fix
//all values are hard coded, these are the places that are available for card buttons to stay on, reserved places on the disks.
//add more with more data added to the application
//when disk capacity is reached, implement arc scroll feature
export const EXPERIENCE_DISK_CARD_POSITIONS: absolutePositions[] = [
  { bottom: "1%", left: "1%", transform: "" },
  { bottom: "23%", left: "3%", transform: "xl:translate-x-[6%]" },
  { bottom: "44%", left: "8%", transform: "xl:translate-x-[16%]" },
  { bottom: "62%", left: "18%", transform: "xl:translate-x-[10%]" },
  { bottom: "73%", left: "30%", transform: "" },
  { bottom: "78%", left: "42%", transform: "xl:translate-y-[4%]" },
  { bottom: "76%", left: "54%", transform: "" },
];
