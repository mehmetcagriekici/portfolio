//imports
import { getFileUrl } from "../../utils/helpers";
import { supabase } from "../../utils/supabaseClient";
import { PersonalData } from "../../utils/types";

//Supabase functions
export async function getPersonalData(): Promise<{
  personalData: PersonalData;
}> {
  //get personal data from the server
  //only one row
  const { data: personal_data, error} = await supabase
    .from("personal_data")
    .select("*")
    .single();

  //throw the error
  if (error) throw new Error(error.message)

  //get file src from the server
  const src = getFileUrl(personal_data.avatar);

  //update personalData
  //update the image
  //convert json objects to array
  const personalData:PersonalData = {...personal_data, 
    avatar: src, 
    skills: Object.values(personal_data.skills),
    spoken_languages: Object.values(personal_data.spoken_languages),
    socials: Object.values(personal_data.socials)
  }


  
  return { personalData };
}
