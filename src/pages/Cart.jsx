import { Link } from "react-router-dom";
import { useItem } from "../context/ItemContext";

function Cart() {
  const { cart, dispatch } = useItem();

  const restaurantIds = Object?.keys(cart);

  if (restaurantIds?.length === 0)
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="/emptycart.svg"
          alt="Empty Cart"
          className="w-70 h-70 opacity-80"
        />
        <h1 className="p-5 text-2xl font-macondo text-akaccent-600">
          Your Cart is empty
        </h1>
      </div>
    );

  return (
    <>
      <h1 className="flex justify-center text-4xl font-bold font-macondo">
        Carts
      </h1>
      <div className="p-4 space-y-5">
        {restaurantIds?.map((restaurantId) => {
          const items = cart[restaurantId];

          if (items.length === 0)
            return (
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/emptycart.svg"
                  alt="Empty Cart"
                  className="w-70 h-70 opacity-80"
                />
                <h1 className="p-5 text-2xl font-macondo text-akaccent-600">
                  Your Cart is empty
                </h1>
              </div>
            );

          // restaurant name from any item (all items contain same restaurantName)
          const restaurantName = items[0]?.restaurantName;

          const totalCartPrice = items.reduce(
            (sum, item) => sum + Number(item.totalPrice),
            0
          );

          return (
            <div
              key={restaurantId}
              className="grid sm:grid-cols-[1fr_1fr_1fr_1fr_1fr] sm:gap-0 gap-3 border rounded-lg p-4 sm:m-0 m-3 bg-akoffwhitecream shadow-sm dark:bg-akprimary-900"
            >
              {/* Restaurant Header */}
              <div className="flex justify-center items-center">
                <h2 className="2xl:text-2xl text-lg font-semibold text-akdarkbrown p-3">
                  {restaurantName}
                </h2>
              </div>
              <div className="flex justify-center items-center">
                <p className="2xl:text-xl text-lg md:text-md sm:text-sm sm:p-1">
                  Items added: {items.length}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <p className="2xl:text-xl text-lg md:text-md sm:text-sm">
                  Total before Tax: ${totalCartPrice}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  to={`${restaurantId}`}
                  className="2xl:text-xl text-lg md:text-md sm:text-sm border-none p-2 sm:p-1 rounded-lg bg-akdarkbrown-3 text-akbeige dark:bg-akprimary-800 dark:text-akaccent-100 hover:bg-akaccent-600 hover:text-akprimary-900 transition-all"
                >
                  View Cart
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() =>
                    dispatch({ type: "clearCart", payload: restaurantId })
                  }
                  className="2xl:text-xl text-lg md:text-md sm:text-sm border-none p-2 sm:p-1 rounded-lg bg-akdarkbrown-3 text-akbeige dark:bg-akprimary-800 dark:text-akaccent-100 hover:bg-akaccent-600 hover:text-akprimary-900 transition-all"
                >
                  {/* <HiEllipsisVertical /> */}
                  Clear Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
