import { Navigate } from "react-router-dom";
import { useUser } from "../features/user/login/useUser";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  //1. Load the authenticated user
  const { user, isLoading } = useUser();

  //2. While loading, show the spinner
  if (isLoading) return <Spinner />;

  //3. If there is NO authenticated user, redirect to the /login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  //4. If there is a USER, render the app
  return children;
}

export default ProtectedRoute;
