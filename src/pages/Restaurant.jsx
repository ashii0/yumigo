import { FaUtensils } from "react-icons/fa6";
import Spinner from "../components/Spinner";
import TextExpander from "../components/TextExpander";
import { useRestaurant } from "../features/restaurants/useRestaurant";
import { MdTableRestaurant } from "react-icons/md";
import { Link } from "react-router-dom";

function Restaurant() {
  const { isPending, restaurant, restaurantId } = useRestaurant();

  if (isPending) return <Spinner />;

  return (
    <div className="grid grid-cols-[3fr_4fr] border rounded-lg">
      <div>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="p-1 text-3xl font-macondo font-bold bg-akcream text-akaccent-600 dark:bg-akprimary-950 mt-5 translate-x-[-75px] xl:text-7xl xl:p-6 lg:text-6xl lg:p-6 md:text-5xl ">
          {restaurant.name}
        </h1>
        <p className="font-lilita font-bold px-10 py-4 italic xl:mb-14 2xl:mb-54 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl ">
          <TextExpander>{restaurant.description}</TextExpander>
        </p>

        <div className="border-t border-l rounded-lg px-10 p-3 flex justify-center md:text-sm sm:text-xs 2xl:text-2xl font-semibold italic">
          <div className="bg-linear-to-t from-akdarkbrown-1 dark:from-akaccent-700 via-akdarkbrown-3 dark:via-yellow-500 to-akdarkbrown-1 dark:to-akaccent-400 bg-clip-text text-transparent">
            <span>⭐️⭐️⭐️⭐️ </span>
            <span>overall ratings </span>
            <span>|</span>
            <span> 1000 reviews</span>
          </div>
        </div>

        <div className="border-t flex justify-center font-semibold">
          <Link
            to={`/restaurants/${restaurantId}/menus`}
            className="flex-1 flex justify-center items-center gap-2 2xl:p-7 xl:p-6 lg:p-5 md:p-4 sm:p-2 border-r border-l dark:text-akcream dark:bg-akcharcoal hover:bg-akaccent-600 hover:text-akprimary-900 rounded-lg transition-all"
          >
            <FaUtensils className="text-lg" />
            <span>Order Online</span>
          </Link>
          <Link
            to={`/restaurants/${restaurant.id}/reservetable`}
            className="flex-1 flex justify-center items-center gap-2 2xl:p-7 xl:p-6 lg:p-5 md:p-4 sm:p-2 border-r border-l dark:text-akcream dark:bg-akcharcoal hover:bg-akaccent-600 hover:text-akprimary-900 rounded-lg transition-all"
          >
            <MdTableRestaurant className="text-lg" />
            <span>Reserve Table</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
