import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMenus } from "../../services/apiMenus";

export function useMenus() {
  const { restaurantId } = useParams();
  //   console.log("🚀 Route param restaurantId:", restaurantId);

  const {
    isPending,
    data: menus,
    error,
  } = useQuery({
    queryKey: ["menus", restaurantId],
    queryFn: () => getMenus(restaurantId),
    retry: false,
  });

  return { isPending, menus, error };
}
