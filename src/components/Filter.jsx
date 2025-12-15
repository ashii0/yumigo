import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField);

  function handleClick(value) {
    searchParams.set(filterField, value);

    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }
  return (
    <div className="border border-akaccent-200 shadow-sm dark:border-gray-500 rounded-sm flex p-0.5 sm:p-1 gap-1">
      {options.map((option) => (
        <button
          className={`shadow-sm rounded-sm px-1 py-1 transition-all-[0.3s] enabled:hover:bg-akaccent-500 enabled:hover:text-aksoftplatinum ${
            option.value === currentFilter
              ? "bg-akaccent-600 text-aksoftplatinum"
              : ""
          } `}
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
