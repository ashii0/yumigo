import Button from "../../components/Button";
import DeleteButton from "../../components/DeleteButton";
import UpdateItemQuantity from "../../components/UpdateItemQuantity";
import { useItem } from "../../context/ItemContext";
import { useRestaurant } from "../restaurants/useRestaurant";

function MenuList({ menu }) {
  const { id, image, item, ingredients, price } = menu;
  const { restaurant, restaurantId } = useRestaurant();
  const { counts, dispatch } = useItem();
  const itemCount = counts[id] || 0;

  function handleAddCart() {
    //const finalCount = itemCount > 0 ? itemCount : 1;
    const newItem = {
      restaurantId,
      restaurantName: restaurant.name,
      menuId: id,
      image,
      item,
      ingredients,
      price,
      //itemCount: finalCount,
      itemCount: 1,
      //totalPrice: itemCount * price,
      totalPrice: price,
    };

    dispatch({ type: "addItem", payload: newItem });

    //dispatch({ type: "setCount", payload: { id, count: finalCount } });
    //dispatch({ type: "setCount", payload: { id, count: 1 } });
  }

  return (
    <div className="grid sm:grid-cols-[1fr_3fr] sm:gap-[4.8rem] border border-akaccent-600 dark:border-gray-700 mt-1.5 rounded-lg">
      <div className="flex p-1">
        <img
          className="sm:aspect-auto aspect-video object-cover"
          src={image}
          alt={id}
        />
      </div>

      <div className="flex flex-col gap-2 py-2 justify-start sm:px-0 px-2">
        <li className="text-[1.5rem] font-sirin font-bold">{item}</li>
        <li className="italic">{ingredients}</li>
        <li className="text-lg font-sirin text-akaccent-600">${price}</li>

        <div className="flex gap-2 mt-auto">
          {itemCount === 0 ? (
            <Button onClick={handleAddCart}>Add to Cart</Button>
          ) : (
            <div className="flex gap-10">
              <UpdateItemQuantity
                id={id}
                restaurantId={restaurantId}
                itemCount={itemCount}
              />
              <DeleteButton menuId={id} restaurantId={restaurantId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuList;
