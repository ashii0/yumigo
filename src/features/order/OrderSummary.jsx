import { useNavigate, useParams } from "react-router-dom";
import { useItem } from "../../context/ItemContext";
import OrderCalculation from "../../features/order/OrderCalculation";
import OrderedItems from "../../features/order/OrderedItems";
import { useUser } from "../user/login/useUser";
import { createOrders } from "../../services/apiOrders";
import { useRestaurant } from "../restaurants/useRestaurant";

function generateOrderId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return id;
}

function OrderSummary({ onEdit }) {
  const { restaurantId } = useParams();
  const { restaurant } = useRestaurant();
  const { cart, dispatch } = useItem();
  const { user } = useUser();

  const userId = user?.id;
  const navigate = useNavigate();
  const items = cart[restaurantId] || [];
  //const estimateddelivery = new Date().toISOString();
  const estimateddelivery = new Date(Date.now() + 30 * 60 * 1000).toISOString();
  const totalCartPrice = items.reduce(
    (sum, item) => sum + Number(item.totalPrice),
    0
  );
  const promotion = (totalCartPrice * 2) / 100;
  const taxes = (totalCartPrice * 5) / 100;
  const deliveryFee = 2.99;
  const serviceFee = 2.99;
  const total = (
    totalCartPrice +
    taxes +
    deliveryFee +
    serviceFee -
    promotion
  ).toFixed(2);

  async function handleConfirmOrder() {
    try {
      const order_code = generateOrderId();

      // console.log(totalCartPrice, typeof totalCartPrice);

      const orderData = {
        userid: userId,
        restaurantid: Number(restaurantId),
        restaurantname: restaurant.name,
        ordercode: order_code,
        status: "Preparing",
        total_amount: total,
        estimateddelivery,
      };

      const orderItems = items.map((item) => ({
        menuitemid: item.menuId,
        namesnapshot: item.item,
        pricesnapshot: Number(item.price),
        quantity: item.itemCount,
        totalprice: Number(item.totalPrice),
      }));

      const newOrder = await createOrders(orderData, orderItems);

      dispatch({ type: "clearCart", payload: restaurantId });

      onEdit();
      navigate(`/orderconfirmation/${newOrder.ordercode}`, { replace: true });
    } catch (err) {
      console.error(err.message);
      alert("Failed to place order");
    }
  }

  return (
    <>
      <h1 className="flex justify-center items-center text-2xl font-bold font-macondo text-akaccent-600 bg-akslatebluegray/90 p-1 mt-5">
        Order Summary
      </h1>

      <h2 className="text-2xl font-bold font-macondo my-4">Items</h2>

      <div className="border sm:p-5 flex flex-col gap-4 py-6 sm:px-8 px-2 rounded-lg shadow-xl dark:shadow-sm shadow-akaccent-300">
        {items.map((item) => (
          <OrderedItems key={item.menuId} item={item} />
        ))}

        <div className="grid grid-cols-2 text-aksoftplatinum bg-akslatebluegray/80 px-6 py-3 rounded-lg shadow-xl dark:shadow-sm">
          <span className="flex justify-start">Subtotal:</span>
          <span className="flex justify-end">${totalCartPrice}</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold font-macondo my-4">Price Breakdown</h2>
      <OrderCalculation
        totalCartPrice={totalCartPrice}
        taxes={taxes}
        deliveryFee={deliveryFee}
        serviceFee={serviceFee}
        promotion={promotion}
        total={total}
      />

      <div className="flex justify-end p-2 my-4 gap-5">
        <button
          onClick={handleConfirmOrder}
          className="p-2 rounded shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum"
        >
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
