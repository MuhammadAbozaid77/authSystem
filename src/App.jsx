import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/layouts/Layout";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/layouts/ProtectedRoute";

export default function App() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: (
            <ProtectedRoute>
              {" "}
              <Home />{" "}
            </ProtectedRoute>
          ),
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}
