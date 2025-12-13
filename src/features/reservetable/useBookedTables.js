import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBookedTables } from "../../services/apiReservations";

function useBookedTables(selectedDate, selectedSlot) {
  const { restaurantId } = useParams();
  const restaurantIdNum = Number(restaurantId);

  const formattedDate = selectedDate
    ? selectedDate.toISOString().split("T")[0]
    : null;

  const { data, isPending, error } = useQuery({
    queryKey: ["bookedTables", restaurantIdNum, formattedDate, selectedSlot],
    queryFn: () =>
      getBookedTables(restaurantIdNum, formattedDate, selectedSlot),
    enabled: !!restaurantIdNum && !!formattedDate && !!selectedSlot,
  });

  return {
    bookedTables: data || [],
    isPending,
    error,
  };
}

export default useBookedTables;
