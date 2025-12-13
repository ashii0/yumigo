import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { PAGE_SIZE } from "../../utils/constants";

export function useOrders() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //Filter
  const filterOrders = searchParams.get("past");
  const filter =
    !filterOrders || filterOrders === "all"
      ? null
      : Number(searchParams.get("past"));

  const queryDate = filter ? subDays(new Date(), filter).toISOString() : null;

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //Query
  const { data: { data: orders, count } = {}, isPending } = useQuery({
    queryKey: ["orderhistory", filter, page],
    queryFn: () => getAllOrders({ queryDate, page }),
  });

  //Pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["orderhistory", filter, page + 1],
      queryFn: () => getAllOrders({ queryDate, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["orderhistory", filter, page - 1],
      queryFn: () => getAllOrders({ queryDate, page: page - 1 }),
    });

  return { orders, count, isPending };
}
