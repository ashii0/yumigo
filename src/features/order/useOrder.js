import { useQuery } from "@tanstack/react-query";

import { getOrders } from "../../services/apiOrders";

export function useOrder(ordercode) {
  const { isPending, data: orders } = useQuery({
    queryKey: ["orders", ordercode],
    queryFn: () => getOrders(ordercode),
    retry: false,
  });

  return { isPending, orders };
}
