import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllReservations } from "../../services/apiReservations";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useReservations() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //1.Filter
  const filterValue = searchParams.get("reservationdate");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : Number(searchParams.get("reservationdate"));

  const queryDate = filter ? subDays(new Date(), filter).toISOString() : null;

  //2.Sort
  const sortByRaw = searchParams.get("sortBy") || "reservationdate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //Query
  const { data: { data: tablereservations, count } = {}, isPending } = useQuery(
    {
      queryKey: ["tablereservationshistory", filter, sortBy, page],
      queryFn: () => getAllReservations({ queryDate, sortBy, page }),
    }
  );

  //prefetchQuery
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["tablereservationshistory", filter, sortBy, page + 1],
      queryFn: () => getAllReservations({ queryDate, sortBy, page: page + 1 }),
    });

  if (page < 1)
    queryClient.prefetchQuery({
      queryKey: ["tablereservationshistory", filter, sortBy, page - 1],
      queryFn: () => getAllReservations({ queryDate, sortBy, page: page - 1 }),
    });

  return { tablereservations, count, isPending };
}

export default useReservations;

// //const queryClient = useQueryClient();
// //SORT
// const sortByRaw = searchParams.get("sortBy") || "reservationdate-desc";
// const [field, direction] = sortByRaw.split("-");
// const sortBy = { field, direction };

// const filterValue = Number(searchParams.get("reservationdate"));
// console.log(filterValue);
