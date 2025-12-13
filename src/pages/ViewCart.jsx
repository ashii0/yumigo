import { Link, useNavigate, useParams } from "react-router-dom";
import { useItem } from "../context/ItemContext";
import CartItemCard from "../features/cart/CartItemCard";
import Button from "../components/Button";

function ViewCart() {
  const { restaurantId } = useParams();
  const { cart } = useItem();

  const items = cart[restaurantId] || [];

  const restaurantName = items[0]?.restaurantName;

  const { dispatch } = useItem();
  const navigate = useNavigate();

  const totalCartPrice = items.reduce(
    (sum, item) => sum + Number(item.totalPrice),
    0
  );

  return (
    <div className="p-4">
      {restaurantName && (
        <h2 className="border-2 p-3 flex justify-center items-center text-4xl font-bold text-akaccent-600 bg-akcharcoal mb-4 font-macondo">
          {restaurantName}
        </h2>
      )}
      {/* <p className="border border-akaccent-600" /> */}
      {items.map((item) => (
        <CartItemCard key={item.menuId} item={item} cartCount={items.length} />
      ))}

      {items.length > 0 && (
        <div className="flex justify-between items-center p-4">
          <h2 className="2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm">
            Total before Tax: ${totalCartPrice}
          </h2>
          <div className="flex gap-3">
            <Link
              to={`/restaurants/${restaurantId}/menus`}
              className="2xl:text-xl text-lg md:text-md sm:text-sm border-none p-3 md:p-2 sm:p-1 rounded-full bg-akdarkbrown-3 text-akbeige dark:bg-gray-700 dark:text-akaccent-100 hover:bg-akaccent-600 hover:text-akprimary-900 transition-all"
            >
              View Store
            </Link>

            <Link
              to={`/order/${restaurantId}/ordersummary`}
              className="2xl:text-xl text-lg md:text-md sm:text-sm border-none p-3 md:p-2 sm:p-1 rounded-full bg-akdarkbrown-3 text-akbeige dark:bg-gray-700 dark:text-akaccent-100 hover:bg-akaccent-600 hover:text-akprimary-900 transition-all"
            >
              Continue to Order Summary
            </Link>
            <Button
              onClick={() => {
                dispatch({ type: "clearCart", payload: restaurantId });
                navigate("/cart");
              }}
            >
              {/* <HiEllipsisVertical /> */}
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewCart;
