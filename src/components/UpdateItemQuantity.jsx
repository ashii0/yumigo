import Button from "./Button";
import { useItem } from "../context/ItemContext";

function UpdateItemQuantity({ id, itemCount, restaurantId }) {
  const { dispatch } = useItem();

  return (
    <div className="">
      <Button
        onClick={(e) => {
          e.stopPropagation();
          //dispatch({ type: "decrease", payload: id });
          dispatch({ type: "decrease", payload: { restaurantId, menuId: id } });
        }}
      >
        -
      </Button>
      <span> {itemCount} </span>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          //dispatch({ type: "increase", payload: id });
          dispatch({ type: "increase", payload: { restaurantId, menuId: id } });
        }}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
