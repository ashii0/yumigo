import SortFilterTableReserveHistory from "./SortFilterTableReserveHistory";
import TableReservations from "./TableReservations";

function TableReservationHistory() {
  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1 className="flex justify-center text-3xl text-akaccent-600 font-bold">
          Table Reservation History
        </h1>
        <SortFilterTableReserveHistory />
      </div>
      <TableReservations />
    </div>
  );
}

export default TableReservationHistory;
