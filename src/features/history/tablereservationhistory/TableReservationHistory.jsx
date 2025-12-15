import SortFilterTableReserveHistory from "./SortFilterTableReserveHistory";
import TableReservations from "./TableReservations";

function TableReservationHistory() {
  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row  justify-between">
        <h1 className="flex justify-center text-center  text-4xl font-macondo text-akaccent-600 font-bold sm:mb-0 mb-5">
          Table Reservation History
        </h1>
        <SortFilterTableReserveHistory />
      </div>
      <TableReservations />
    </div>
  );
}

export default TableReservationHistory;
