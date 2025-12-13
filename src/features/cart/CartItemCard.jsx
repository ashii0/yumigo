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
      <div className="border-b bg-akoffwhitecream dark:bg-akcharcoal-1 border-akaccent-600 grid grid-cols-[1fr_2fr_1fr_1fr_1fr] gap-2 sm:gap-1">
        <div className="flex p-1">
          <img className="aspect-auto object-cover" src={image} alt={menuId} />
        </div>

        <li className="flex justify-center items-center p-5 pl-10 text-sm md:text-md lg:text-lg font-lilita ">
          {itemname}
        </li>

        <li className="flex justify-start items-center text-sm md:text-md lg:text-lg">
          Price: ${totalPrice}
        </li>

        <li className="flex justify-start items-center">
          <UpdateItemQuantity
            id={menuId}
            restaurantId={restaurantId}
            itemCount={quantity}
          />
        </li>
        {cartCount === 1 ? (
          <div className="flex justify-start items-center">
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
          <div className="flex justify-start items-center">
            <DeleteButton menuId={menuId} restaurantId={restaurantId} />
          </div>
        )}
      </div>
    </>
  );
}

export default CartItemCard;
