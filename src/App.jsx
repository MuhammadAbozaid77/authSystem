import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/layouts/Layout";

export default function App() {

const routers = createBrowserRouter([
  {path:'/' , element : <Layout />},
  {path:'/login' , element : <Login />},
  {path:'/register' , element : <Register />}
]);


  return <RouterProvider router={routers}>
    
  </RouterProvider>
}
