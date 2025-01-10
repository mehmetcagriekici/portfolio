//imports
import { supabaseUrl } from "./supabaseClient";

//convert given array to a string in the format "el_0, el_1, ..., el_[arr.length-2] and el_[arr.length-1]"
export const CONVERT_LIST_TO_STR = (arr: string[]) =>
  arr.reduce(
    (acc, el, i) =>
      el
        ? acc +
          `${
            arr.length === 1
              ? el + "."
              : i === arr.length - 2
              ? `${el} and `
              : `${i !== arr.length - 1 ? `${el}, ` : `${el}.`}`
          }`
        : "",
    ""
  );

//to get the image from the server
//get the avatar image
export function getFileUrl(file_address: string) {
  return `${supabaseUrl}/storage/v1/object/public/portfolio_images/${file_address}`;
}
