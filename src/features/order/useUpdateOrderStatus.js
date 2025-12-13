import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus } from "../../services/apiOrders";

export function useUpdateOrderStatus() {
  const queryClient = useQueryClient();

  const { mutate: mutateStatus } = useMutation({
    mutationFn: ({ id, status }) => updateStatus({ id, status }),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(["orders", variables.ordercode]);

      queryClient.invalidateQueries(["orders"]);
    },
  });

  return { mutateStatus };
}
