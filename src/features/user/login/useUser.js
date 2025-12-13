import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";

export function useUser() {
  const { isPending, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const metadata = user?.user_metadata || {};

  return {
    isPending,
    user,
    ...metadata,
    isAuthenticated: user?.role === "authenticated",
  };
}

// return {
//   isPending,
//   user,
//   isAuthenticated: !!user,
// };
