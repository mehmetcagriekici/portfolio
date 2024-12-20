//imports
import { absolutePositions } from "./types";

//error messages
export const PERSONAL_DATA_FETCH_ERROR =
  "Personal data could not be fetched from the server";
export const EDUCATION_DATA_FETCH_ERROR =
  "An error occured while getting education data from the server";
export const EXPERIENCE_DATA_FETCH_ERROR =
  "Unexpected error! Server is unresponsive or fetch request is failed for another reason.";
export const PROFESSIOAL_DATA_FETCH_ERROR =
  "An unexpected error occured while fetching the professional data!";
export const DETAILS_DISPLAY_ERROR =
  "An error occured, trying to display the details. No Feature Found!";

export const SLIDER_NO_IMAGES_MESSAGE =
  "We are sorry to inform you that we are not able to show you any images for this item you've just opened. This is not an error, we've decided either the visual expression was not necessary, or we weren't able to find the images of this part.";

//styles
export const COMMON_RESPONSIVE_BORDER =
  "border-none md:border-4 lg:border-8 md:border-solid  md:rounded-t-full md:border-b-0 lg:border-b-0";

export const COMMON_SMALL_CARD_BORDER = "border-b-2 border-solid rounded-none";

export const COMMON_CARD_LIST_STYLES = "w-full flex flex-col justify-center";

export const COMMON_CARD_LIST_ELEMENT_STYLES =
  "w-full flex flex-col justify-center text-gray-900 tracking-tight font-semibold shadow-sm ";

export const SM_DEF_DISK_DISPLAY =
  "pt-2 pb-2 flex flex-col justify-safe-center items-safe-center gap-2";

export const DEF_CARD_BUTTON_CONTAINER_STYLES =
  "hidden md:flex justify-center items-center shadow-md rounded-full";

export const DEF_CARD_BUTTON_STYLES =
  "h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 hover:cursor-pointer";

export const DETAILS_ANIMATION_DURATION = 1500; //ms

export const DEF_DETAILS_FONT_STYLES =
  "text-gray-800 font-black tracking-tighter text-lg";

export const DEF_DETAILS_GRID_SM =
  "h-full w-full grid grid-rows-12 grid-cols-8 gap-1 text-gray-800 font-black tracking-tighter text-lg";

export const DEF_DETAILS_GRID_MD = "md:revCircleMd md:h-1/2 md:grid-cols-12";

export const DEF_DETAILS_GRID_XL =
  "xl:resetClip xl:h-full xl:w-full xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:p-0 xl:gap-0 xl:m-0";

export const DEF_DETAILS_HIDE_BTN_STYLES_SM =
  "row-start-1 row-span-1 col-span-8 shadow-sm border-b-2 capitalize tracking-wide font-bold text-xl text-black ml-2 mt-1";

export const DEF_DETAILS_HIDE_BTN_STYLES_MD =
  "md:row-start-10 md:row-span-3 md:col-start-3 md:col-span-8 md:text-center md:circle md:text-3xl md:font-bold md:uppercase md:tracking-wider md:translate-y-3";

export const DEF_DETAILS_HIDE_BTN_STYLES_XL =
  "xl:row-start-4 xl:row-span-6 xl:col-start-11 xl:col-span-1 xl:rounded-none xl:circleXl xl:m-0 xl:mt-0 xl:border-none xl:clipHideBtn xl:select-none xl:text-transparent xl:hover:clipHideBtn-hover duration-700";

export const DEF_IMG_STYLES = "h-full w-full object-cover select-none";

//Refactored Tailwind
//Use only for hard to read tailwind code
//PersonalDetails
export const COMMON_PERSONAL_HOBBIES_AND_LANGUAGES =
  "col-span-8 m-1 bg-gradient-to-b shadow-md text-xl text-center tracking-wide font-black leading-relaxed md:col-span-12 md:flex md:overflow-hidden md:overflow-x-auto md:shadow-none md:bg-none lg:text-2xl from-purple-600/60 to-purple-400/30";
export const COMMON_PERSONAL_IMG_AND_PERSONAL_INF =
  "row-start-2 row-span-3 rounded-md md:row-start-5 md:row-span-5";
export const COMMON_PERSONAL_UL_AND_LI =
  "flex justify-safe-center items-safe-center p-1 md:bg-transparent md:border-none";

//positions for card placement on the disk on different screens
//bottom and left -> css values
//transform -> tailwind style, to fix
//all values are hard coded, these are the places that are available for card buttons to stay on, reserved places on the disks.
//add more with more data added to the application
//when disk capacity is reached, implement arc scroll feature
export const EDUCATION_DISK_CARD_POSITIONS: absolutePositions[] = [
  {
    bottom: "1%",
    left: "1%",
    transform: "xl:translate-x-[20%]",
  },
  {
    bottom: "28%",
    left: "5%",
    transform: "xl:translate-x-[20%] xl:translate-y-[-10%]",
  },
  {
    bottom: "52%",
    left: "15%",
    transform: "xl:translate-x-[30%] xl:translate-y-[-10%]",
  },
  {
    bottom: "68%",
    left: "30%",
    transform: "xl:translate-x-[30%] xl:translate-y-[4%]",
  },
];

export const EXPERIENCE_DISK_CARD_POSITIONS: absolutePositions[] = [
  { bottom: "1%", left: "1%", transform: "" },
  { bottom: "23%", left: "3%", transform: "xl:translate-x-[6%]" },
  { bottom: "44%", left: "8%", transform: "xl:translate-x-[16%]" },
  { bottom: "62%", left: "18%", transform: "xl:translate-x-[10%]" },
  { bottom: "73%", left: "30%", transform: "" },
  { bottom: "78%", left: "42%", transform: "xl:translate-y-[4%]" },
  { bottom: "76%", left: "54%", transform: "" },
];

export const PROFESSIONAL_DISK_CARD_POSITIONS: absolutePositions[] = [
  { bottom: "", left: "", transform: "" },
];
