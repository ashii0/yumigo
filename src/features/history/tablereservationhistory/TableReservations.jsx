import { Link } from "react-router-dom";
import ViewEachTableReservationHistory from "./ViewEachTableReservationHistory";
import useReservations from "../../reservetable/useReservations";
import Spinner from "../../../components/Spinner";
import Pagination from "../../../components/Pagination";

function TableReservations() {
  const { tablereservations, count, isPending } = useReservations();
  // const { tablereservations, count, isPending } = useReservations({
  //   enabled: !!tablereservations,
  // });

  if (isPending) return <Spinner />;
  if (!tablereservations || tablereservations.length === 0)
    return <div className="p-5 text-center">No Reservations Found</div>;

  return (
    <div className="mt-5">
      <ul className="grid grid-cols-[1fr_1.1fr_1fr_1fr_0.8fr_0.5fr_1fr_1.1fr_1fr] gap-3 p-3 border border-akaccent-600 mt-3 text-akaccent-600 font-bold shadow-md rounded-md">
        <li className="flex justify-center">Reservation Id</li>
        <li>Name</li>
        <li className="flex justify-center">Status</li>
        <li className="flex justify-center">Date</li>
        <li className="flex justify-center">Table#</li>
        <li className="flex justify-center">Seats</li>
        <li className="flex justify-center">Slot</li>
      </ul>

      {tablereservations.map((tablereservation) => (
        <ul
          className="grid grid-cols-[1fr_1.1fr_1fr_1fr_0.8fr_0.5fr_1fr_1.1fr_1fr] gap-3 p-3 border-x border-b border-akaccent-600 shadow-md rounded-md"
          key={tablereservation?.id}
        >
          <li className="flex justify-center">
            {tablereservation.reservationcode}
          </li>
          <li>{tablereservation.restaurants.name}</li>
          <li className="flex justify-center">{tablereservation.status}</li>
          <li className="flex justify-center">
            {tablereservation.reservationdate}
          </li>
          <li className="flex justify-center">
            {tablereservation.restauranttables.tablenumber}
          </li>
          <li className="flex justify-center">
            {tablereservation.restauranttables.capacity}
          </li>
          <li className="flex justify-center">
            {tablereservation.slots.slotlabel}
          </li>
          <li className="flex justify-center">
            <Link
              to={`/restaurants/${tablereservation.restaurants.id}/reservetable`}
              className="p-2 shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum rounded-md hover:bg-akaccent-500"
            >
              Reserve again
            </Link>
          </li>
          <li>
            <ViewEachTableReservationHistory
              reservationcodeProps={tablereservation.reservationcode}
            />
          </li>
        </ul>
      ))}

      <footer>
        <Pagination count={count} />
      </footer>
    </div>
  );
}

export default TableReservations;
