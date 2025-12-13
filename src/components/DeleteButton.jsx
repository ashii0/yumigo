import { RiDeleteBin5Line } from "react-icons/ri";
import { useItem } from "../context/ItemContext";
import Button from "./Button";

function DeleteButton({ menuId, restaurantId }) {
  const { dispatch } = useItem();
  return (
    <button
      onClick={() =>
        dispatch({
          type: "deleteItem",
          payload: { menuId, restaurantId },
        })
      }
      className="2xl:text-xl text-lg md:text-md sm:text-sm flex items-center gap-2 sm:gap-1 border-none p-3 md:p-2 sm:p-1 size-fit rounded-full bg-akdarkbrown-3 text-akbeige dark:bg-gray-700 dark:text-akaccent-100 hover:bg-red-500 hover:text-akaccent-300 transition-all"
    >
      <RiDeleteBin5Line />
      <span>Delete</span>
    </button>
  );
}

export default DeleteButton;
