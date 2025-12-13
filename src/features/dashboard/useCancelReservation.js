import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCancelReservation } from "../../services/apiReservations";

function useCancelReservation() {
  const queryClient = useQueryClient();

  const { mutate: cancelReservation, isPending } = useMutation({
    mutationFn: updateCancelReservation,

    onSuccess: () => {
      queryClient.invalidateQueries(["reservations"]);
    },
  });
  return { cancelReservation, isPending };
}

export default useCancelReservation;
