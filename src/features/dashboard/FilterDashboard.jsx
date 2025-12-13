import Filter from "../../components/Filter";

function FilterDashboard() {
  return (
    <div className="flex items-center gap-7">
      <Filter
        filterField="past"
        options={[
          { value: "all", label: "All" },
          { value: "15", label: "Past 15days" },
          { value: "30", label: "Past 30days" },
          { value: "90", label: "Past 90days" },
        ]}
      />
    </div>
  );
}

export default FilterDashboard;
