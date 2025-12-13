import Spinner from "../../components/Spinner";
import { useDate } from "../../context/DateContext";
import useBookedSlots from "./useBookedSlots";
import useSlots from "./useSlots";

function TimeSlotSelector() {
  const { slots, isPending } = useSlots();
  const { selectedDate, selectedSlot, setSelectedSlot } = useDate();
  const { disabledSlots } = useBookedSlots(selectedDate);

  if (isPending) return <Spinner />;

  const now = new Date();
  const dateStr = selectedDate.toLocaleDateString("en-CA");
  const todayStr = now.toLocaleDateString("en-CA");

  const visibleSlots = slots.filter(
    (s) => dateStr !== todayStr || new Date(`${dateStr}T${s.slotstart}`) > now
  );

  if (visibleSlots.length === 0) return null;

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory mt-4 lg:justify-center">
      {visibleSlots.map((slot) => {
        const isDisabled = disabledSlots.includes(slot.id);
        const isSelected = selectedSlot === slot.id;

        return (
          <button
            key={slot.id}
            disabled={isDisabled}
            onClick={() => setSelectedSlot(slot.id)}
            className={`p-3 rounded-xl text-center transition-all border ${
              isDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : isSelected
                ? "bg-aksofthoneybronze dark:bg-akaccent-600"
                : "bg-white/80 dark:bg-akdeepslate text-akslatebluegray dark:text-aksoftplatinum border-akslatebluegray/30 dark:border-aksoftplatinum/40 hover:bg-akaccent-400 transition-all"
            }`}
          >
            {slot.slotlabel}
          </button>
        );
      })}
    </div>
  );
}

export default TimeSlotSelector;

// const dateStr = selectedDate.toISOString().split("T")[0];
//   const todayStr = now.toISOString().split("T")[0];

//  const { slots, isPending } = useSlots();
//   const { selectedDate, selectedSlot, setSelectedSlot, dates, setDates } =
//     useDate();
//   const { disabledSlots } = useBookedSlots(selectedDate);

//   const todayStr = new Date()?.toISOString().split("T")[0];
//   const selectedDateStr = selectedDate
//     ? selectedDate?.toISOString().split("T")[0]
//     : null;

//   const visibleSlots = useMemo(() => {
//     if (!selectedDate) return [];

//     return slots.filter((slot) => {
//       if (selectedDateStr !== todayStr) return true;

//       const slotDateTime = new Date(`${selectedDateStr}T${slot.slotstart}`);

//       return slotDateTime > new Date();
//     });
//   }, [slots, selectedDateStr, todayStr, selectedDate]);

//   useEffect(() => {
//     if (selectedDateStr !== todayStr) return;

//     if (visibleSlots.length === 0) {
//       setDates((p) =>
//         p.filter((d) => d.toISOString().split("T")[0] !== todayStr)
//       );
//     }
//   }, [visibleSlots, selectedDateStr, todayStr, setDates]);

//   if (isPending) return <Spinner />;

//   if (!selectedDate || visibleSlots.length === 0) return null;
