//imports
import { useEffect, useState } from "react";
import { EducationData } from "../../utils/types";
import { getEducationData } from "../../services/education/getEducationData";
import { EDUCATION_DATA_FETCH_ERROR } from "../../utils/constants";

export function useEducationData() {
  //local state to send data to the app
  const [data, setData] = useState<null | EducationData>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //get data from the server
  //save the result, which will be used in the app state
  //update this with tanstack
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await getEducationData();
        if (result) {
          setData(result);
        } else {
          setError(EDUCATION_DATA_FETCH_ERROR);
          throw new Error(EDUCATION_DATA_FETCH_ERROR);
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
