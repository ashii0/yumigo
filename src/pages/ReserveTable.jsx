import Spinner from "../components/Spinner";
import { useDate } from "../context/DateContext";
import DateScroller from "../features/reservetable/DateScroller";
import ReserveButton from "../features/reservetable/ReserveButton";
import TableSelector from "../features/reservetable/TableSelector";
import TimeSlotSelector from "../features/reservetable/TimeSlotSelector";
import { useRestaurant } from "../features/restaurants/useRestaurant";

function ReserveTable() {
  const { isPending, restaurant } = useRestaurant();
  const { selectedSlot, selectedDate } = useDate();

  if (isPending || !restaurant) return null;

  if (isPending) return <Spinner />;

  const className_h2 =
    "text-2xl text-start font-semibold mb-2 font-macondo p-2";

  const className_divborder = "border mt-5 p-5 bg-akcream dark:bg-akcharcoal ";

  return (
    <div className="text-akslatebluegray dark:text-aksoftplatinum">
      <h1 className="flex justify-center text-4xl mb-5 font-macondo font-bold">
        Welcome to {restaurant.name}
      </h1>

      <div className="pt-3 p-6 bg-aksofthoneybronze dark:bg-akaccent-600">
        {/* Date */}
        <div className={className_divborder}>
          <h2 className={className_h2}>Pick a Date</h2>

          <DateScroller />
        </div>

        {/* Time */}
        {selectedDate && (
          <div className={className_divborder}>
            <h2 className={className_h2}>Pick a Time</h2>

            <TimeSlotSelector />
          </div>
        )}

        {/* Table */}
        {selectedSlot && (
          <div className={className_divborder}>
            <h2 className={className_h2}>Choose a table</h2>

            <TableSelector />
          </div>
        )}

        {selectedDate && selectedSlot && (
          <div className="flex justify-center mt-5">
            <ReserveButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReserveTable;

//style={{ backgroundImage: `url(${restaurant.image})` }}
