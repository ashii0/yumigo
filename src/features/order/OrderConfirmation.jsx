import { Link, useParams } from "react-router-dom";
import { useBlockNavigation } from "../../hooks/useBlockNavigation";
import { useOrder } from "./useOrder";
import { calcMinutesLeft, formatDate } from "../../utils/helpers";
// import { useUpdateOrderStatus } from "./useUpdateOrderStatus";
// import { useEffect, useRef, useState } from "react";

function OrderConfirmation({ ordercodeProp }) {
  useBlockNavigation();
  const { ordercode: ordercodeFromURL } = useParams();
  const ordercode = ordercodeProp || ordercodeFromURL;
  const { orders } = useOrder(ordercode, { enabled: !!ordercode });
  const order = orders?.order;
  const items = orders?.items;

  //Estimated time left for delivery
  const deliveryIn = calcMinutesLeft(order?.estimateddelivery);

  return (
    <div className="flex justify-center items-center">
      <div className="w-3xl bg-white text-akcharcoal dark:bg-akslatebluegray/30 dark:text-aksoftplatinum p-6 mt-6">
        <h1 className="text-akaccent-600 text-3xl items-center font-macondo font-bold">
          {order?.restaurantname}
        </h1>

        <div className="flex justify-between gap-5 p-2 my-5">
          <p>order# {order?.ordercode}</p>
          <p>
            <span>status:</span> <span className="">{order?.status}</span>
          </p>
        </div>

        <div className="flex justify-between gap-5 p-3 my-5 bg-black/20">
          <p className="text-sm">
            {deliveryIn >= 0
              ? `Only ⏰ ${calcMinutesLeft(
                  order?.estimateddelivery
                )} minutes left`
              : "Order Delivered"}
          </p>
          <p className="text-xs">
            (Estimated delivery: {formatDate(order?.estimateddelivery)})
          </p>
        </div>

        <ul className="border-y p-2">
          {items?.map((item) => (
            <li className="flex justify-between py-3" key={item.id}>
              <p>
                {item.quantity}x {item.namesnapshot}
              </p>
              <p className="">${item.totalprice}</p>
            </li>
          ))}
        </ul>

        <div className="flex justify-between gap-5 p-3 my-5 bg-black/20">
          <p>
            <span>Total Price </span>{" "}
            <span className="text-xs">(Pay on Delivery)</span>
          </p>
          <p>${order?.total_amount}</p>
        </div>

        {ordercodeFromURL && (
          <div className="flex justify-end">
            <Link
              to="/dashboard"
              className="p-2 rounded shadow-xl dark:shadow-sm shadow-akaccent-400 bg-white text-akcharcoal dark:bg-akslatebluegray/80 border
        dark:text-aksoftplatinum hover:bg-black/20"
            >
              Go to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderConfirmation;
