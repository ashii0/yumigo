import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => {
      return loginApi({ email, password });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Logged in successfully");
      //navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.log("Error", err);
      if (err?.message === "Email not confirmed") {
        toast.error("Please verify your email to login");
      } else {
        toast.error("Provided email and password is incorrect");
      }
    },
  });
  return { login, isPending, error };
}
