//imports
import { getFileUrl } from "../../utils/helpers";
import { supabase } from "../../utils/supabaseClient";
import { AppExperienceCard, AppExperienceDetails, ExperienceCard, ExperinceDetails } from "../../utils/types";


//Supabase functions
export async function getExperienceData(): Promise<{
  cards: AppExperienceCard[]
  details: AppExperienceDetails[]
}> {
  //get the cards
  const { data: experience_card_data, error: cardError } = await supabase
    .from("experience_card_data")
    .select("*");

    if (cardError) throw new Error(cardError.message)

  //get the details
  const { data: experience_details_data, error: detailsError } = await supabase
    .from("experience_details_data")
    .select("*");

   
    if (detailsError) throw new Error(detailsError.message)
      
      //update cards
      const experienceCards: AppExperienceCard[] = experience_card_data.map((card: ExperienceCard) => ({...card, technologies: Object.values(card.technologies)}))
    
    //update details
    const experienceDetails: AppExperienceDetails[] = experience_details_data.map((details: ExperinceDetails) => 
      ({
      ...details, 
      technologies: Object.values(details.technologies),
      images: Object.values(details.images).map((src) => getFileUrl(src)),
      contributers: Object.values(details.contributers)

    }))

  
    return {
      cards: experienceCards,
      details: experienceDetails, 
    }
}
