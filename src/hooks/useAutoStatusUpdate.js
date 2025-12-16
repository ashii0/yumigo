import { useEffect } from "react";
import { useOrders } from "../features/order/useOrders";
import { useUpdateOrderStatus } from "../features/order/useUpdateOrderStatus";
import { getOrderStatus } from "../utils/helpers";

function useAutoStatusUpdate() {
  const { orders } = useOrders();
  const { mutateStatus } = useUpdateOrderStatus();

  useEffect(() => {
    if (!orders || orders?.length === 0) return;

    const interval = setInterval(() => {
      orders.forEach((order) => {
        if (!order.estimateddelivery) return;

        const newStatus = getOrderStatus(order.estimateddelivery);

        if (!newStatus) return;

        if (order.status !== newStatus) {
          // console.log(
          //   `Updating ${order.ordercode}:${order.status} -> ${newStatus}`
          // );
          mutateStatus({
            id: order.id,
            status: newStatus,
            ordercode: order.ordercode,
          });
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [orders, mutateStatus]);
}

export default useAutoStatusUpdate;
