// useHotels.js
import { useQuery } from "react-query";
import { getAllHotels } from "../services/HotelService";

export const useHotels = () => {
  const { isLoading, error, data } = useQuery("hotels", getAllHotels);

  const getHotels = () => {
    return {
      loading: isLoading,
      error,
      data: data ? data.data.hotels : [],
    };
  };

  return { getHotels };
};
