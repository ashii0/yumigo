import { useQuery } from "@tanstack/react-query";
import { useUser } from "../features/user/login/useUser";
import supabase from "../services/supabase";

export function useProfile() {
  const { user } = useUser();

  return useQuery({
    enabled: !!user?.id,
    queryKey: ["profiles", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;

      return data;
    },
  });
}
