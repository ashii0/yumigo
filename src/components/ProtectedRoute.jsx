import { useUser } from "../features/user/login/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../services/supabase";

// const FullPage = styled.div`
//   height: 100vh;
//   background-color: var(--color-grey-50);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load the authenticated user
  const { isPending, isAuthenticated } = useUser();

  //2. If there is NO authenticated user, redirect to the /login page
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login", { replace: true });
    },
    [isPending, navigate, isAuthenticated]
  );

  //3. While loading, show the spinner
  if (isPending)
    return (
      //   <FullPage>
      <Spinner />
      //   </FullPage>
    );

  //4. If there is a USER, render the app
  if (isAuthenticated) return children;

  return null;
}

export default ProtectedRoute;
