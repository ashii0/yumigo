import { Link } from "react-router-dom";
import { useOrders } from "../../order/useOrders";
import ViewEachOrderHistory from "./ViewEachOrderHistory";
import SortFilterOrderHistory from "./SortFilterOrderHistory";
import Pagination from "../../../components/Pagination";

function OrderHistory() {
  const { orders, count } = useOrders();

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1 className="flex justify-center text-3xl text-akaccent-600 font-bold">
          Order History
        </h1>
        <SortFilterOrderHistory />
      </div>

      <div className="mt-5">
        <ul className="grid grid-cols-[1fr_1fr_3fr_1fr_1fr_1fr] gap-3 p-3 border border-akaccent-600 mt-3 text-akaccent-600 font-bold shadow-md rounded-md">
          <li className="flex justify-center">Order Id</li>
          <li>Restaurant Name</li>
          <li className="grid grid-cols-[2fr_1fr]">
            <p className="flex justify-center">Ordered Items</p>
            <p className="flex justify-center">Item price</p>
          </li>
          <li className="flex justify-center">Total Amount</li>
        </ul>
        {orders?.map((order) => (
          <ul
            className="grid grid-cols-[1fr_1fr_3fr_1fr_1fr_1fr] gap-3 p-3 border-x border-b border-akaccent-600 shadow-md rounded-md"
            key={order.id}
          >
            <li className="flex justify-center">#{order.ordercode}</li>
            <li>{order.restaurantname}</li>

            <li>
              {order.orderitems.map((items) => (
                <ul className="grid grid-cols-[2fr_1fr]" key={items.id}>
                  <li>
                    {items.quantity} x {items.namesnapshot}
                  </li>

                  <li className="flex justify-center">{items.totalprice}</li>
                </ul>
              ))}
            </li>
            <li className="flex justify-center">{order.total_amount}</li>
            <li className="flex items-center">
              <Link
                to={`/restaurants/${order.restaurantid}/menus`}
                className="p-2 shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum rounded-md hover:bg-akaccent-500"
              >
                View Store
              </Link>
            </li>
            <li className="flex items-center">
              <ViewEachOrderHistory ordercodeProp={order.ordercode} />
            </li>
          </ul>
        ))}
        <footer>
          <Pagination count={count} />
        </footer>
      </div>
    </div>
  );
}

export default OrderHistory;
