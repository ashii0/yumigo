import { FaUtensils } from "react-icons/fa";
import { RiTakeawayLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ViewCartButton from "./ViewCartButton";

function RestaurantList({ restaurant }) {
  return (
    <div className="flex border rounded-lg">
      <img
        className="w-[150px] h-[150px]  rounded-lg border-r"
        src={restaurant.image}
        alt={restaurant.name}
      />
      <div className="flex flex-col justify-between grow">
        <div className="p-3">
          <h3 className="text-xl mb-2 sm:text-[16px] font-semibold">
            {restaurant.name}
          </h3>
          <p className="text-sm font-semibold italic text-akprimary-700 dark:text-akaccent-500 md:text-[11px]">
            {restaurant.tagline}
          </p>
        </div>

        <div className="border-t rounded-lg flex justify-end items-center overflow-hidden">
          <Link
            to={`/restaurants/${restaurant.id}`}
            className="flex items-center border-l gap-3 p-2 hover:bg-akaccent-600 hover:text-akprimary-900 transition-all"
          >
            <span className="flex items-center gap-2">
              <FaUtensils className="text-base" /> Dine In
            </span>
            <span>|</span>
            <span className="flex items-center gap-2">
              <RiTakeawayLine className="text-base" /> Takeout &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;
