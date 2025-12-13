import { useMemo, useState } from "react";
import Spinner from "../components/Spinner";
import RestaurantList from "../features/restaurants/RestaurantList";
import { useRestaurants } from "../features/restaurants/useRestaurants";

function Restaurants() {
  const { isPending, restaurants, error } = useRestaurants();
  const [search, setSearch] = useState("");

  const searchRestaurant = useMemo(() => {
    if (!search?.trim()) return restaurants;

    const keyword = search.toLowerCase();

    return restaurants.filter((r) => r.name?.toLowerCase().includes(keyword));
  }, [search, restaurants]);

  if (isPending) return <Spinner />;
  if (error) return <p>Something went wrong :(</p>;
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-macondo font-bold text-akaccent-600">
          Restaurants
        </h1>

        <input
          type="text"
          placeholder=" 🔍 Search Restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="items-center border border-akaccent-600 rounded-2xl p-1 w-80 focus:outline-none focus:ring-2 focus:ring-akaccent-500"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-14 ">
        {/* {restaurants?.map((restaurant) => ( */}
        {searchRestaurant?.map((restaurant) => (
          <RestaurantList key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}

export default Restaurants;
