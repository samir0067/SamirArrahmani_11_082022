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

//import { ApartmentDataProps } from "../utils/interface";
//
// const findById = async (id: string): Promise<ApartmentDataProps> => {
//   let response: any;
//   let allData: ApartmentDataProps[];
//   let data: ApartmentDataProps;
//
//   try {
//     response = await fetch("/data.json");
//     allData = await response.json();
//     data = allData.filter((housing) => housing.id === id)[0];
//   } catch (err: any) {
//     throw new Error("Erreur lors de la requete API :" + err);
//   }
//
//   return data;
// };
//
// const HousingService = { findById };
//
// export default HousingService;
