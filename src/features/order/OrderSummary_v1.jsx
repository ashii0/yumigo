import { useParams } from "react-router-dom";
import { useItem } from "../../context/ItemContext";
import OrderCalculation from "./OrderCalculation";
import OrderedItems from "./OrderedItems";

function OrderSummary() {
  const { restaurantId } = useParams();
  const { cart } = useItem();

  const items = cart[restaurantId] || [];

  const totalCartPrice = items.reduce(
    (sum, item) => sum + Number(item.totalPrice),
    0
  );
  return (
    <>
      <h1 className="flex justify-center items-center text-2xl font-bold font-macondo text-akaccent-600 bg-akslatebluegray/90 p-1 mt-5">
        Order Summary
      </h1>

      <h2 className="text-2xl font-bold font-macondo my-4">Items</h2>

      <div className="border p-5 flex flex-col gap-4 py-6 px-8 rounded-lg shadow-xl dark:shadow-sm shadow-akaccent-300">
        {items.map((item) => (
          <OrderedItems key={item.menuId} item={item} />
        ))}

        <div className="grid grid-cols-2 text-aksoftplatinum bg-akslatebluegray/80 px-6 py-3 rounded-lg shadow-xl dark:shadow-sm">
          <span className="flex justify-start">Subtotal:</span>
          <span className="flex justify-end">${totalCartPrice}</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold font-macondo my-4">Price Breakdown</h2>
      <OrderCalculation totalCartPrice={totalCartPrice} />

      <div className="flex justify-end p-2 my-4 gap-5">
        <button className="p-2 rounded shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum ">
          Confirm Order
        </button>
        <button className="p-2 rounded shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum">
          Cancel
        </button>
      </div>
    </>
  );
}

export default OrderSummary;
