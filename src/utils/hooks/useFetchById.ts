import { useEffect, useState } from "react";
import { ApartmentDataProps } from "../interface";

export function useFetchById(url: string, id: string) {
  const [data, setData] = useState<ApartmentDataProps>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const allData = await response.json();
        const dataFilter = allData.filter((apartment) => apartment.id === id)[0];
        setData(dataFilter);
      } catch (error) {
        setError(true);
        throw new Error("error useFetchById =>" + error);
      } finally {
        setLoading(false);
      }
    }

    fetchData().then();
  }, [url, id]);

  return { isLoading, data, error };
}
