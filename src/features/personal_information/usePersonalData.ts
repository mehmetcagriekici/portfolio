//imports
import { useQuery } from "@tanstack/react-query";
import { getPersonalData } from "../../services/personal/getPersonalData";

//tanstack
export function usePersonalData() {
  const {data, error, isLoading} = useQuery({
    queryKey: ["personal_data"],
    queryFn: getPersonalData
  })

  return {data, error, isLoading}
}
