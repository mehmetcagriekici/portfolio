//imports
import { useEffect, useState } from "react";
import { ProfessionalData } from "../../utils/types";
import { getProfessionalData } from "../../services/professional/getProfesionalData";
import { PROFESSIOAL_DATA_FETCH_ERROR } from "../../utils/constants";

export function useProfessionalData() {
  const [data, setData] = useState<null | ProfessionalData>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await getProfessionalData();
        if (result) {
          setData(result);
        } else {
          setError(PROFESSIOAL_DATA_FETCH_ERROR);
          throw new Error(PROFESSIOAL_DATA_FETCH_ERROR);
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
