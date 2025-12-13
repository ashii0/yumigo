import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useItem } from "../../context/ItemContext";

function ViewCartButton() {
  const { restaurantId } = useParams();
  const { cart } = useItem();
  const items = cart[restaurantId];
  //const linkTo = items?.length > 0 ? `/cart/${restaurantId}` : "/cart";

  return (
    <div className="fixed bottom-1/12 right-1/12 -translate-x-0.5 z-50">
      {items?.length > 0 ? (
        <Link
          to={`/cart/${restaurantId}`}
          className="bg-akaccent-600 text-aksoftplatinum 
        px-6 py-3 rounded-full shadow-2xl
        hover:bg-akaccent-500
        font-semibold text-lg"
        >
          View Cart
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default ViewCartButton;
