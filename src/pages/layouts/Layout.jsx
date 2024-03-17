import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Layout() {
  return (
    <div className="flex justify-between items-between flex-col h-[100vh]">
      <div>
        {" "}
        <Header />{" "}
      </div>
      <div className="h-[100%]">
        <Outlet />
      </div>
      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}
