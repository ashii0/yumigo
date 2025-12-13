import { useDate } from "../../context/DateContext";
import useSlots from "./useSlots";

export default function DateScroller() {
  const { dates, formatDate, formatDay, selectedDate, setSelectedDate } =
    useDate();

  const { slots = [] } = useSlots();

  const now = new Date();
  const todayStr = now.toLocaleDateString("en-CA");

  const datesFilter = dates.filter((d) => {
    const dateStr = d.toLocaleDateString("en-CA");

    if (dateStr !== todayStr) return true;

    return slots.some((s) => new Date(`${dateStr}T${s.slotstart}`) > now);
  });

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar mt-4 snap-x snap-mandatory lg:justify-center">
      {datesFilter.map((d) => {
        const isSelected =
          selectedDate &&
          new Date(selectedDate).toDateString() === d.toDateString();

        return (
          <button
            key={d}
            onClick={() => setSelectedDate(d)}
            className={`flex flex-col justify-center items-center p-3 rounded-xl min-w-[70px]
              border transition-all
              ${
                isSelected
                  ? "bg-aksofthoneybronze dark:bg-akaccent-600"
                  : "bg-white/80 dark:bg-akdeepslate text-akslatebluegray dark:text-aksoftplatinum border-akslatebluegray/30 dark:border-aksoftplatinum/40 hover:bg-akaccent-400 transition-all"
                //"bg-white/40 text-akcharcoal-1 border-gray-300 hover:bg-akaccent-700"
              }
            `}
          >
            <span className="text-sm font-medium">{formatDay(d)}</span>
            <span className="text-lg font-semibold">{formatDate(d)}</span>
          </button>
        );
      })}
    </div>
  );
}
