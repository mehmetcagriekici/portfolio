//imports
import { useEffect, useState } from "react";
import { ExperienceData } from "../../utils/types";
import { getExperienceData } from "../../services/experience/getExperienceData";
import { EXPERIENCE_DATA_FETCH_ERROR } from "../../utils/constants";

//will be updated with tanstack
//afer v1 (the server is built)
export function useExperienceData() {
  const [data, setData] = useState<null | ExperienceData>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await getExperienceData();
        if (result) {
          setData(result);
        } else {
          setError(EXPERIENCE_DATA_FETCH_ERROR);
          throw new Error(EXPERIENCE_DATA_FETCH_ERROR);
        }
      } catch (err) {
        throw new Error(`${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return { data, isLoading, error };
}
