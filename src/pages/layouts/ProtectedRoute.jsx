import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const userProfile = localStorage.getItem("user");
  if (!userProfile) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
}
