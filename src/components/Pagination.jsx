import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between font-sirin">
      <p className="text-lg">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="rounded-sm flex text-lg items-center justify-center gap-2 p-[0.6rem_1.2rem] transition-all-[0.3s] enabled:hover:bg-akaccent-600 enabled:hover:text-aksoftplatinum"
        >
          <HiChevronLeft /> <span>Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="rounded-sm text-lg flex items-center justify-center gap-2 p-[0.6rem_1.2rem] transition-all-[0.3s] enabled:hover:bg-akaccent-600 enabled:hover:text-aksoftplatinum"
        >
          <span>Next</span> <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
