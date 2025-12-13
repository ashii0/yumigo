import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useBlockNavigation } from "../../hooks/useBlockNavigation";
import useUserReservation from "./useUserReservation";

function ReservationConfirmations({ reservationcodeProps }) {
  useBlockNavigation();

  const { reservationcode: reservationcodeFromURL } = useParams();
  const reservationcode = reservationcodeProps || reservationcodeFromURL;

  const { data: reservations, isPending } = useUserReservation(
    reservationcode,
    { enabled: !!reservationcode }
  );
  if (isPending || !reservationcode) return <Spinner />;

  if (!reservations) return null;
  const { reservationdate, restaurants, restauranttables, slots } =
    reservations || {};

  const { name } = restaurants;
  const { capacity, tablenumber } = restauranttables;
  const { slotlabel } = slots;

  return (
    <div className="flex justify-center items-center">
      <div className="w-fit bg-white text-akcharcoal dark:bg-akslatebluegray/30 dark:text-aksoftplatinum p-6 mt-6 shadow-lg">
        <h2 className="flex justify-center text-akaccent-600 text-3xl font-macondo font-bold p-2 mb-5">
          Your Reservation {reservationcodeFromURL && "is confirmed!!"}
        </h2>
        <div className="border-2 border-akaccent-600 p-8 flex flex-col gap-3 mx-3 my-3">
          <p>
            <strong>Reservation Code:</strong> {reservationcode}
          </p>
          <p>
            <strong>Date:</strong> {reservationdate}
          </p>
          <p>
            <strong>Restaurant:</strong> {name}
          </p>

          <p>
            <strong>Table Number:</strong> #{tablenumber} (
            <em>seats {capacity}</em>)
          </p>
          <p>
            <strong>Time Slot:</strong> {slotlabel}
          </p>
        </div>

        <h4 className="flex justify-center text-akaccent-600 text-xl font-macondo font-bold p-2 mb-5">
          Thank you for choosing to dine with us 😊
        </h4>

        {reservationcodeFromURL && (
          <div className="flex justify-center">
            <Link
              to="/dashboard"
              className="p-2 rounded shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600
          text-aksoftplatinum hover:bg-black/20"
            >
              Go to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReservationConfirmations;
