import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/layouts/Layout";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/layouts/ProtectedRoute";
import ChatPage from "./pages/chatPage/ChatPage";
import MettingPage from "./pages/mettingPage/MettingPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import SchedulePage from "./pages/schedulePage/SchedulePage";
import JoinPage from "./pages/joinPage/JoinPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import OneToOne from "./pages/mettingPage/OneToOne";
import OneToGroup from "./pages/mettingPage/OneToGroup";

export default function App() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index : true ,
          element: (
            <ProtectedRoute>
              {" "}
              <Home />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/chat",
          element: (
            <ProtectedRoute>
              {" "}
              <ChatPage />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/mettings",
          element: (
            <ProtectedRoute>
              {" "}
              <MettingPage />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/contacts",
          element: (
            <ProtectedRoute>
              {" "}
              <ContactsPage />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/mettings/oneTOone",
          element: (
            <ProtectedRoute>
              {" "}
              <OneToOne />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/mettings/oneTOgroup",
          element: (
            <ProtectedRoute>
              {" "}
              <OneToGroup />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/schedule",
          element: (
            <ProtectedRoute>
              {" "}
              <SchedulePage />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/join",
          element: (
            <ProtectedRoute>
              {" "}
              <JoinPage />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              {" "}
              <ProfilePage />{" "}
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
