import { Link } from "react-router-dom";
import { useOrders } from "../../order/useOrders";
import ViewEachOrderHistory from "./ViewEachOrderHistory";
import SortFilterOrderHistory from "./SortFilterOrderHistory";
import Pagination from "../../../components/Pagination";

function OrderHistory() {
  const { orders, count } = useOrders();

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="flex justify-center text-4xl text-akaccent-600 font-macondo font-bold sm:my-0 my-5 ">
          Order History
        </h1>
        <SortFilterOrderHistory />
      </div>

      <div className="mt-5 text-sm ">
        <ul className="sm:grid sm:grid-cols-[2fr_3fr_1fr_2fr] sm:gap-3 sm:p-3 sm:border sm:border-akaccent-600 sm:mt-3 sm:text-akaccent-600 sm:font-bold sm:shadow-md sm:rounded-md hidden">
          <li className="grid grid-cols-[1fr_1fr]">
            <p className="flex sm:justify-center sm:px-0 px-1">Order Id</p>
            <p>Restaurant Name</p>
          </li>

          <li className="grid grid-cols-[2fr_1fr]">
            <p className="">Ordered Items</p>
            <p className="flex justify-center">Item price</p>
          </li>
          <li className="flex justify-center">Total Amount</li>
        </ul>
        {orders?.map((order) => (
          <ul
            className="grid sm:grid-cols-[1fr_1fr_3fr_1fr_2fr] gap-3 p-3 border mb-1 border-akaccent-600 shadow-md rounded-md"
            key={order.id}
          >
            <li className="flex sm:justify-center">#{order.ordercode}</li>
            <li className="sm:font-normal font-bold">{order.restaurantname}</li>

            <li>
              {order.orderitems.map((items) => (
                <ul className="grid grid-cols-[2fr_1fr]" key={items.id}>
                  <li>
                    {items.quantity} x {items.namesnapshot}
                  </li>

                  <li className="flex sm:justify-center justify-end">
                    {items.totalprice}
                  </li>
                </ul>
              ))}
            </li>
            <li className="flex sm:justify-center justify-between">
              <p className="sm:hidden font-bold">Total:</p>
              <p className="sm:font-normal font-bold">{order.total_amount}</p>
            </li>
            <li className="flex sm:items-center justify-evenly">
              <Link
                to={`/restaurants/${order.restaurantid}/menus`}
                className="p-2 shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum rounded-md hover:bg-akaccent-500"
              >
                View Store
              </Link>
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

// {orders?.map((order) => (
//           <ul
//             className="grid sm:grid-cols-[1fr_1fr_3fr_1fr_1fr_1fr] gap-3 p-3 border-x border-b border-akaccent-600 shadow-md rounded-md"
//             key={order.id}
//           >
//             <li className="flex justify-center">#{order.ordercode}</li>
//             <li>{order.restaurantname}</li>

//             <li>
//               {order.orderitems.map((items) => (
//                 <ul className="grid grid-cols-[2fr_1fr]" key={items.id}>
//                   <li>
//                     {items.quantity} x {items.namesnapshot}
//                   </li>

//                   <li className="flex justify-center">{items.totalprice}</li>
//                 </ul>
//               ))}
//             </li>
//             <li className="flex justify-center">{order.total_amount}</li>
//             <li className="flex items-center">
//               <Link
//                 to={`/restaurants/${order.restaurantid}/menus`}
//                 className="p-2 shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum rounded-md hover:bg-akaccent-500"
//               >
//                 View Store
//               </Link>
//             </li>
//             <li className="flex items-center">
//               <ViewEachOrderHistory ordercodeProp={order.ordercode} />
//             </li>
//           </ul>
//         ))}
