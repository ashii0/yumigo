import Filter from "../../../components/Filter";
import SortBy from "../../../components/SortBy";

function SortFilterTableReserveHistory() {
  return (
    <div className="flex items-center gap-7">
      <Filter
        filterField="reservationdate"
        options={[
          { value: "all", label: "All" },
          { value: "15", label: "Last 15 days" },
          { value: "30", label: "Last 30 days" },
          { value: "90", label: "Last 90 days" },
        ]}
      />
      <SortBy
        options={[
          { value: "reservationdate-desc", label: "Recent date" },
          { value: "reservationdate-asc", label: "Earlier date" },
        ]}
      />
    </div>
  );
}

export default SortFilterTableReserveHistory;

// { value: "capacity-desc", label: "High Capacity" },
// { value: "capacity-asc", label: "Less Capacity" },
