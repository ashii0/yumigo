import useCancelReservation from "./useCancelReservation";
import useReservationsForChart from "./useReservationsForChart";

function DisplayResevations() {
  //const { tablereservations } = useReservations();
  const { reservations } = useReservationsForChart();
  const { cancelReservation, isPending } = useCancelReservation();
  const now = new Date();

  const activeTableReservations = reservations?.filter((t) => {
    if (t.status !== "Active") return false;

    const reservationDateTime = new Date(
      `${t.reservationdate} ${t.slots.slotstart}`
    );

    return reservationDateTime >= now;
  });

  function handleClick(id) {
    cancelReservation(id);
  }

  if (activeTableReservations?.length === 0)
    return (
      <div className="flex flex-col items-center justify-center text-center mt-5">
        <img
          src="/eatingtogether.svg"
          alt="No Reservations"
          className="w-50 h-28 opacity-80"
        />
        <h1 className="p-5 text-xl font-macondo text-akaccent-600">
          No Upcoming Reservations!
        </h1>
      </div>
    );

  return (
    <div className="">
      {activeTableReservations?.map((reservations) => (
        <ul key={reservations.id} className="mb-2 border sm:p-2 p-0.5">
          <li className="flex justify-between p-2 items-center">
            <p className="font-bold">{reservations.restaurants.name}</p>
            <p>Date: {reservations.reservationdate}</p>
          </li>

          <li className="flex justify-between p-2 items-center">
            <p>Slot: {reservations.slots.slotlabel}</p>
            <p>
              Table# {reservations.restauranttables.tablenumber} (seats:{" "}
              {reservations.restauranttables.capacity})
            </p>
          </li>
          <li className="flex justify-end p-2 items-center">
            <button
              disabled={isPending}
              onClick={() => handleClick(reservations.id)}
              className="border bg-akaccent-600 text-aksoftplatinum border-akaccent-500 rounded-lg p-1"
            >
              Cancel
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default DisplayResevations;

// {activeTableReservations?.map((reservations) => (
//         <ul
//           key={reservations.id}
//           className="mb-1 sm:p-2 p-0.5 grid sm:grid-cols-[1.3fr_0.8fr_1fr_0.6fr_0.7fr_1fr]"
//         >
//           <li className="border-r-2 p-0.5">{reservations.restaurants.name}</li>
//           <li className="border-r-2 flex justify-center p-0.5">
//             {reservations.reservationdate}
//           </li>
//           <li className="border-r-2 flex justify-center p-0.5">
//             {reservations.slots.slotlabel}
//           </li>
//           <li className="border-r-2 flex justify-center p-0.5">
//             {reservations.restauranttables.tablenumber}
//           </li>
//           <li className="border-r-2 flex justify-center p-0.5">
//             {reservations.restauranttables.capacity}
//           </li>
//           <li className="flex justify-center p-0.5">
//             <button
//               disabled={isPending}
//               onClick={() => handleClick(reservations.id)}
//               className="border bg-akaccent-600 text-aksoftplatinum border-akaccent-500 rounded-lg p-1"
//             >
//               Cancel
//             </button>
//           </li>
//         </ul>
//       ))}
