import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../services/apiRestaurants";

export function useRestaurant() {
  const { restaurantId } = useParams();

  const {
    isPending,
    data: restaurant,
    error,
  } = useQuery({
    queryKey: [("restaurant", restaurantId)],
    queryFn: () => getRestaurant(restaurantId),
    retry: false,
  });

  return { isPending, restaurant, error, restaurantId };
}
