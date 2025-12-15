import { useNavigate, useParams } from "react-router-dom";
import { useDate } from "../../context/DateContext";
import useReserveTable from "./useReserveTable";
import { useUser } from "../user/login/useUser";

function generateReservationCode() {
  const randomBytes = crypto.getRandomValues(new Uint8Array(4));
  const hex = [...randomBytes]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return `BK-${hex.toUpperCase()}`;
}

function ReserveButton() {
  const {
    selectedDate,
    setSelectedDate,
    selectedSlot,
    setSelectedSlot,
    selectedTable,
    setSelectedTable,
  } = useDate();
  const { reserve, isPending } = useReserveTable();
  const { restaurantId } = useParams();
  const { user } = useUser();
  const userId = user?.id;
  const navigate = useNavigate();

  const handleReserve = () => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    const reservationcode = generateReservationCode();

    reserve({
      restaurantId: Number(restaurantId),
      userId: userId,
      slotId: selectedSlot,
      tableId: selectedTable,
      reservationDate: formattedDate,
      status: "Active",
      reservationcode,
    });

    setSelectedDate(null);
    setSelectedSlot(null);
    setSelectedTable(null);

    navigate(`/reservationconfirmation/${reservationcode}`, { replace: true });
  };

  return (
    <button
      disabled={!selectedDate || !selectedSlot || !selectedTable}
      onClick={handleReserve}
      className="border bg-akcream dark:bg-akcharcoal p-3 rounded-lg hover:bg-stone-400 hover:border-akaccent-200"
    >
      {isPending ? "Reserving..." : "Reserve Table"}
    </button>
  );
}

export default ReserveButton;
