import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../../services/apiRestaurants";

export function useRestaurants() {
  const {
    isPending,
    data: restaurants,
    error,
  } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getRestaurants,
  });

  return { isPending, restaurants, error };
}
