import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const userProfile = localStorage.getItem("user");
  console.log(userProfile);
  if (!userProfile) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
}
