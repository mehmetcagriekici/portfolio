//imports
import { useQuery } from "@tanstack/react-query";
import { getExperienceData } from "../../services/experience/getExperienceData";

//app data management
//tanstack query
export function useExperienceData() {
  const{ data, error, isLoading } = useQuery(
     { queryKey: ["experience_data"],
       queryFn: getExperienceData 
   })

   return { data, error, isLoading }
}
