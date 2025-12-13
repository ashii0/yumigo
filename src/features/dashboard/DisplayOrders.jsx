import { calcMinutesLeft, formatTime } from "../../utils/helpers";
import { useOrders } from "../order/useOrders";

function DisplayOrders() {
  const { orders } = useOrders();
  const activeOrders = orders?.filter((order) => order.status !== "Delivered");

  if (activeOrders?.length === 0)
    return (
      <div className="flex flex-col items-center justify-center text-center mt-5">
        <img
          src="/deliveries_yellow.svg"
          alt="No Reservations"
          className="w-50 h-28 opacity-80"
        />
        <h1 className="p-5 text-xl font-macondo text-akaccent-600 font-bold">
          No orders placed!
        </h1>
      </div>
    );

  return (
    <div>
      <ul className="mb-1 p-2 grid grid-cols-[1.5fr_2fr_1.5fr] gap-4 font-bold text-akaccent-600">
        <li className="border-r-2 flex justify-center">Restaurant</li>
        <li className="border-r-2 flex justify-center">Delivery By</li>
        <li className="flex justify-center">Status</li>
      </ul>

      <hr />
      {activeOrders?.map((order) => (
        <ul
          key={order.id}
          className="mb-1 p-2 grid grid-cols-[1.5fr_2fr_1.5fr] justify-center gap-4 items-center"
        >
          <li className="border-r-2">
            {/* <p className="font-bold text-akaccent-600">Restaurant:</p> */}
            <p>{order.restaurantname}</p>
          </li>

          <li key={order.id} className="border-r-2 flex justify-center">
            {/* <p className="font-bold text-akaccent-600">Delivery by:</p> */}
            {calcMinutesLeft(order?.estimateddelivery) >= 0 && (
              <p>
                {formatTime(order?.estimateddelivery)}(
                {calcMinutesLeft(order?.estimateddelivery)} mins left)
              </p>
            )}
          </li>
          <li className="bg-akaccent-600 text-aksoftplatinum rounded-lg p-1 flex justify-center">
            {order.status}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default DisplayOrders;
