// useReservation.js
import { useQuery } from "react-query";
import { getAllReservations } from "../services/HotelService";

export const useReservations = () => {
  const { isLoading, error, data } = useQuery("reservations", getAllReservations);

  const getReservations = () => {
    return {
      loading: isLoading,
      error,
      data: data ? data.data.reservations : [],
    };
  };

  return { getReservations };
};
