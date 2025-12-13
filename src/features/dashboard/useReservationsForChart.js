import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllReservations } from "../../services/apiReservations";

function useReservationsForChart() {
  const [searchParams] = useSearchParams();

  //Filter
  const filterReservation = searchParams.get("past");
  const filter =
    !filterReservation || filterReservation === "all"
      ? null
      : Number(searchParams.get("past"));

  const queryDate = filter ? subDays(new Date(), filter).toISOString() : null;

  //Query
  const { data: result, isPending } = useQuery({
    queryKey: ["reservationchart", filter],
    queryFn: () => getAllReservations({ queryDate, sortBy: null, page: null }),
  });

  const reservations = result?.data ?? [];
  const count = result?.count ?? 0;

  return { reservations, count, isPending };
}

export default useReservationsForChart;
