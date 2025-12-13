import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBookedSlots } from "../../services/apiReservations";

function useBookedSlots(selectedDate) {
  const { restaurantId } = useParams();
  const restaurantIdNum = Number(restaurantId);

  const formattedDate = selectedDate
    ? selectedDate.toISOString().split("T")[0]
    : null;

  const { data, isPending, error } = useQuery({
    queryKey: ["bookedSlots", restaurantIdNum, formattedDate],
    queryFn: () => getBookedSlots(restaurantIdNum, formattedDate),
    enabled: !!restaurantIdNum && !!formattedDate,
  });

  return {
    disabledSlots: data || [],
    isPending,
    error,
  };
}

export default useBookedSlots;
