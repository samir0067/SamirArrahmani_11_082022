import { useEffect, useState } from "react";
import { ApartmentDataProps } from "../interface";

export function useFetchAll(url: string) {
  const [allData, setAllData] = useState<ApartmentDataProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllData(data);
      } catch (error) {
        console.log("error useFetchAll =>", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { isLoading, allData, error };
}
