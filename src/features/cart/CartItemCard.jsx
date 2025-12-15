import DeleteButton from "../../components/DeleteButton";
import UpdateItemQuantity from "../../components/UpdateItemQuantity";
import { useNavigate } from "react-router-dom";
import { useItem } from "../../context/ItemContext";
import Button from "../../components/Button";
import { RiDeleteBin5Line } from "react-icons/ri";

function CartItemCard({ item, cartCount }) {
  const {
    restaurantId,
    //restaurantName,
    menuId,
    image,
    item: itemname,
    itemCount: quantity,
    totalPrice,
  } = item;

  const { dispatch } = useItem();
  const navigate = useNavigate();

  // console.log("cartCount:", cartCount, typeof cartCount);
  // console.log("restaurantId", restaurantId);

  return (
    <>
      <div className="border-b bg-akoffwhitecream dark:bg-akcharcoal-1 border-akaccent-600 grid sm:grid-cols-[1fr_2fr_1fr_1fr_1fr] gap-2">
        <div className="flex p-1">
          <img
            className="sm:aspect-auto aspect-video object-cover"
            src={image}
            alt={menuId}
          />
        </div>

        <li className="flex justify-center items-center sm:p-5 sm:pl-10 text-lg font-lilita ">
          {itemname}
        </li>

        <li className="flex sm:justify-start justify-center items-center text-lg">
          Price: ${totalPrice}
        </li>

        <li className="flex sm:justify-start justify-center items-center sm:mt-0 mt-3">
          <UpdateItemQuantity
            id={menuId}
            restaurantId={restaurantId}
            itemCount={quantity}
          />
        </li>
        {cartCount === 1 ? (
          <div className="flex sm:justify-start justify-center items-center sm:mt-0 mt-3 mb-3">
            <button
              onClick={() => {
                dispatch({ type: "clearCart", payload: restaurantId });
                navigate("/cart");
              }}
              className="2xl:text-xl text-lg md:text-md sm:text-sm flex items-center gap-2 sm:gap-1 border-none p-3 md:p-2 sm:p-1 size-fit rounded-full bg-akdarkbrown-3 text-akbeige dark:bg-gray-700 dark:text-akaccent-100 hover:bg-red-500 hover:text-akaccent-300 transition-all"
            >
              {/* <HiEllipsisVertical /> */}
              <RiDeleteBin5Line />
              <span>Delete</span>
            </button>
          </div>
        ) : (
          <div className="flex sm:justify-start justify-center items-center sm:mt-0 mt-3 mb-3">
            <DeleteButton menuId={menuId} restaurantId={restaurantId} />
          </div>
        )}
      </div>
    </>
  );
}

export default CartItemCard;
