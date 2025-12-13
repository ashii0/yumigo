import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTables } from "../../services/apiTables";

function useTables() {
  const { restaurantId } = useParams();

  const {
    isPending,
    data: tables,
    error,
  } = useQuery({
    queryKey: ["tables", restaurantId],
    queryFn: () => getTables(restaurantId),
    enabled: !!restaurantId,
    retry: false,
  });

  return { isPending, tables: tables || [], error };
}

export default useTables;
