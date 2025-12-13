import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reserveTable } from "../../services/apiReservations";

function useReserveTable() {
  const queryClient = useQueryClient();

  const {
    mutate: reserve,
    isPending,
    error,
  } = useMutation({
    mutationFn: reserveTable,

    onError: (error) => {
      console.error("Reservation failed:", error.message);
      alert("This table is already booked for this time slot.");
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookedSlots"] });
      queryClient.invalidateQueries({ queryKey: ["bookedTables"] });
    },
  });

  return { reserve, isPending, error };
}

export default useReserveTable;
