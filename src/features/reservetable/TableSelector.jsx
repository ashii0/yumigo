import Spinner from "../../components/Spinner";
import { useDate } from "../../context/DateContext";
import useBookedTables from "./useBookedTables";
import useTables from "./useTables";

function TableSelector() {
  const { tables, isPending } = useTables();
  const { selectedDate, selectedSlot, selectedTable, setSelectedTable } =
    useDate();
  const { bookedTables } = useBookedTables(selectedDate, selectedSlot);

  if (!tables) return null;

  if (isPending) return <Spinner />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 lg:p-6">
      {" "}
      {tables?.map((table) => {
        const isBooked = bookedTables.includes(table.id);
        const isSelected = selectedTable === table.id;
        return (
          <button
            key={table.id}
            disabled={isBooked}
            onClick={() => setSelectedTable(table.id)}
            className={`py-4 rounded-xl border transition-all ${
              isBooked
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : isSelected
                ? "bg-aksofthoneybronze dark:bg-akaccent-600"
                : "bg-white/80 dark:bg-akdeepslate text-akslatebluegray dark:text-aksoftplatinum border-akslatebluegray/30 dark:border-aksoftplatinum/40 hover:bg-akaccent-400 transition-all"
              //"bg-white/40 text-akcharcoal-1 border-gray-300 hover:bg-akaccent-700"
            }`}
          >
            {" "}
            Table {table.tablenumber} <br />{" "}
            <span className="text-sm opacity-70">
              {" "}
              Seats: {table.capacity}{" "}
            </span>{" "}
          </button>
        );
      })}{" "}
    </div>
  );
}

export default TableSelector;
