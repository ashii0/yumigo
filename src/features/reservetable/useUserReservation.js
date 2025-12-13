import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../services/apiReservations";

function useUserReservation(reservationcode) {
  const { isPending, data } = useQuery({
    queryKey: ["reservation", reservationcode],
    queryFn: () => getReservations(reservationcode),
    enabled: !!reservationcode,
    retry: false,
  });

  return { isPending, data };
}

export default useUserReservation;
