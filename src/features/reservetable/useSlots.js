import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSlots } from "../../services/apiSlots";

function useSlots() {
  const { restaurantId } = useParams();

  const {
    isPending,
    data: slots,
    error,
  } = useQuery({
    queryKey: ["slots", restaurantId],
    queryFn: () => getSlots(restaurantId),
    enabled: !!restaurantId,
    retry: false,
  });

  return { isPending, slots, error };
}

export default useSlots;
