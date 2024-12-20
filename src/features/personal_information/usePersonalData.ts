//imports
import { useEffect, useState } from "react";
import { getPersonalData } from "../../services/personal/getPersonalData";
import { PERSONAL_DATA_FETCH_ERROR } from "../../utils/constants";
import { PersonalData } from "../../utils/types";

export function usePersonalData() {
  const [data, setData] = useState<null | PersonalData>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await getPersonalData();
        if (!result) {
          setError(PERSONAL_DATA_FETCH_ERROR);
          throw new Error(PERSONAL_DATA_FETCH_ERROR);
        } else {
          setData(result);
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
