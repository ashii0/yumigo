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
          <h3 className="sm:text-xl mb-2 text-sm font-semibold">
            {restaurant.name}
          </h3>
          <p className="sm:text-sm text-xs font-semibold italic text-akprimary-700 dark:text-akaccent-500 md:text-[11px]">
            {restaurant.tagline}
          </p>
        </div>

        <div className="border-t sm:rounded-lg rounded-md flex justify-end items-center overflow-hidden">
          <Link
            to={`/restaurants/${restaurant.id}`}
            className="flex items-center border-l sm:gap-3 gap-2 sm:p-2 p-1 hover:bg-akaccent-600 hover:text-akprimary-900 transition-all"
          >
            <p className="flex items-center gap-2">
              <FaUtensils className="text-xs sm:text-base" />
              <span className="text-xs sm:text-base">Dine </span>
              <span className="text-xs sm:text-base">In</span>
            </p>
            <span>|</span>
            <p className="flex items-center gap-2">
              <RiTakeawayLine className="text-xs sm:text-base" />
              <span className="text-xs sm:text-base">Takeout </span>
              <span>&rarr;</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;
