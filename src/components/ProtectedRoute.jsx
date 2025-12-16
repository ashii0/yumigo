import { Navigate } from "react-router-dom";
import { useUser } from "../features/user/login/useUser";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  //1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //2. If there is NO authenticated user, redirect to the /login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  //3. While loading, show the spinner
  if (isLoading)
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

//2. If there is NO authenticated user, redirect to the /login page

// useEffect(
//   function () {
//     if (!isAuthenticated && !isLoading)
//       navigate("/login", { replace: true });
//   },
//   [isLoading, user, navigate, isAuthenticated]
// );
