import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
      //queryClient.setQueryData(["user"], user.user);
      toast.success("Logged in successfully");
      navigate("/dashboard", { replace: true });
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

// export function useLogin() {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   const { mutate: login, isPending } = useMutation({
//     mutationFn: ({ email, password }) => {

//       return loginApi({ email, password });
//     },
//     onSuccess: (user) => {
//       queryClient.setQueryData(["user"], user.user);
//       toast.success("Logged in successfully");
//       navigate("/dashboard", { replace: true });

//       // queryClient.invalidateQueries(["user"], user);
//       // queryClient.invalidateQueries({ queryKey: ["user"] });
//       //await new Promise((res) => setTimeout(res, 200));
//     },

//     onError: (err) => {
//       console.log("Error", err);
//       toast.error("Provided email and password is incorrect");
//     },
//   });
//   return { login, isPending };
// }
