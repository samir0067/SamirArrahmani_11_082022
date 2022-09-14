import { useEffect, useState } from "react";
import { ApartmentDataProps } from "../interface";

export function useFetchAll(url: string) {
  const [allData, setAllData] = useState<ApartmentDataProps[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    async function fetchAllData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllData(data);
      } catch (error) {
        setError(true);
        throw new Error("error useFetchAll =>" + error);
      } finally {
        setLoading(false);
      }
    }

    fetchAllData().then();
  }, [url]);

  return { isLoading, allData, error };
}
