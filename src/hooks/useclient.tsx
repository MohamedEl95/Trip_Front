import { useQuery } from "react-query";
import { getAllClientByFullName } from "../services/clientService";

export const useClientByFullName = (firstname:string, lastname:string) => {
  const {
    isLoading,
    error,
    data: clientData,
  } = useQuery(
    ["client", firstname, lastname],
    async () => getAllClientByFullName(firstname, lastname)
  );

  const getClientByFullName = () => {
    return {
      loading: isLoading,
      error,
      data: clientData ? clientData.data.getClientByFullName : null,
    };
  };

  return { getClientByFullName };
};


