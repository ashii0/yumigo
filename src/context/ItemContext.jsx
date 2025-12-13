import { createContext, useContext, useEffect, useReducer } from "react";

const ItemContext = createContext();

//local storage
const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
const storedCounts = JSON.parse(localStorage.getItem("counts")) || {};

//without local storage
// const initialState = {
//   cart: {},
//   counts: {},
// };

const initialState = {
  cart: storedCart,
  counts: storedCounts,
};

function reducer(state, action) {
  switch (action.type) {
    case "addItem": {
      const newItem = action.payload;
      const { menuId, restaurantId } = newItem;

      const existingItems = state.cart[restaurantId] || [];

      let updatedItems;

      updatedItems = [...existingItems, newItem];

      return {
        ...state,
        cart: { ...state.cart, [restaurantId]: updatedItems },
        counts: { ...state.counts, [menuId]: (state.counts[menuId] || 0) + 1 },
      };
    }

    case "increase": {
      const { menuId, restaurantId } = action.payload;
      const updatedCounts = {
        ...state.counts,
        [menuId]: (state.counts[menuId] || 0) + 1,
      };

      const updatedRestaurants = { ...state.cart };

      updatedRestaurants[restaurantId] = updatedRestaurants[restaurantId].map(
        (item) =>
          item.menuId === menuId
            ? {
                ...item,
                itemCount: updatedCounts[menuId],
                totalPrice: updatedCounts[menuId] * item.price,
              }
            : item
      );

      return { ...state, counts: updatedCounts, cart: updatedRestaurants };
    }

    case "decrease": {
      const { menuId, restaurantId } = action.payload;

      const newCount = state.counts[menuId] > 0 ? state.counts[menuId] - 1 : 0;

      const updatedCounts = {
        ...state.counts,
        [menuId]: newCount,
      };

      const updatedRestaurants = { ...state.cart };

      updatedRestaurants[restaurantId] = updatedRestaurants[restaurantId].map(
        (item) =>
          item.menuId === menuId
            ? {
                ...item,
                itemCount: updatedCounts[menuId],
                totalPrice: updatedCounts[menuId] * item.price,
              }
            : item
      );

      return { ...state, counts: updatedCounts, cart: updatedRestaurants };
    }

    case "deleteItem": {
      const { menuId, restaurantId } = action.payload;

      const deleteCartItem = state.cart[restaurantId].filter(
        (item) => item.menuId !== menuId
      );
      return {
        ...state,
        cart: { ...state.cart, [restaurantId]: deleteCartItem },
        counts: {
          ...state.counts,
          [menuId]: 0,
        },
      };
    }

    case "clearCart": {
      const restaurantId = action.payload;
      const newCart = { ...state.cart };
      const items = newCart[restaurantId] || [];

      //Get all the menu IDs of the restaurant
      const menuIds = items.map((item) => item.menuId);

      //Reset counts for all menuIds
      const newCounts = { ...state.counts };
      menuIds.forEach((id) => {
        newCounts[id] = 0;
      });

      delete newCart[restaurantId];
      return {
        ...state,
        cart: newCart,
        counts: newCounts,
      };
    }

    default:
      throw new Error("Unknown action type ");
  }
}

function ItemProvider({ children }) {
  const [{ cart, counts }, dispatch] = useReducer(reducer, initialState);

  //localstorage - cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //localstorage - counts
  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(counts));
  }, [counts]);

  return (
    <ItemContext.Provider
      value={{
        cart,
        counts,
        dispatch,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

function useItem() {
  const context = useContext(ItemContext);

  if (context === undefined)
    throw new Error("ItemContext is used outside of ItemProvider");

  return context;
}

export { ItemProvider, useItem };
