import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getAllOrders } from "../../services/apiOrders";
import { useQuery } from "@tanstack/react-query";

function useOrdersForChart() {
  const [searchParams] = useSearchParams();

  //Filter
  const filterOrders = searchParams.get("past");
  const filter =
    !filterOrders || filterOrders === "all"
      ? null
      : Number(searchParams.get("past"));

  const queryDate = filter ? subDays(new Date(), filter).toISOString() : null;

  //Query
  const { data: result, isPending } = useQuery({
    queryKey: ["orderchart", filter],
    queryFn: () => getAllOrders({ queryDate, page: null }),
  });

  const orders = result?.data ?? [];
  const count = result?.count ?? 0;

  return { orders, count, isPending };
}

export default useOrdersForChart;
