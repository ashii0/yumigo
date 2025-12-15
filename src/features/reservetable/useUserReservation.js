import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../services/apiReservations";
import { useUser } from "../user/login/useUser";

function useUserReservation(reservationcode) {
  const { user, isLoading: authLoading } = useUser();
  const { isPending, data } = useQuery({
    queryKey: ["reservations", reservationcode],
    queryFn: () => getReservations(reservationcode),
    enabled: !!reservationcode && !authLoading && !!user?.id,
    retry: false,
  });

  return { isPending, data };
}

export default useUserReservation;
