import { HiChatBubbleLeftRight, HiHome, HiVideoCamera } from "react-icons/hi2";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import logo from "./../assets/logo1.jpg";
import pic1 from "./../assets/pic.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../DataStore/authSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = ()=>{
    dispatch(userLogout())
    navigate("/login");
  };
  const navbarData = [
    { id: 1, path: "", name: "home", icon: <HiHome size={20} /> },
    {
      id: 2,
      path: "/chat",
      name: "chat",
      icon: <HiChatBubbleLeftRight size={20} />,
    },
    {
      id: 3,
      path: "/mettings",
      name: "mettings",
      icon: <HiVideoCamera size={20} />,
    },
    { id: 4, path: "/contacts", name: "contacts", icon: <FaUsers size={20} /> },
    {
      id: 5,
      path: "/schedule",
      name: "schedule",
      icon: <MdOutlineAccessTimeFilled size={20} />,
    },
  ];
  const [activeNav, setActiveNav] = useState(1);

  const [showLogout, setShowLogout] = useState(false);
  
  return (
    <>
      <header className="p-3 border-b flex justify-between items-center relative">
        <div className="">
          <img src={logo} className="w-[50px] h-[50px]" alt="" />
        </div>
        <div>
          <ul className="flex justify-center items-center gap-10">
            {navbarData.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={`flex justify-center items-center flex-col cursor-pointer ${
                  activeNav === index + 1
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-gray-600 duration-150"
                }`}
                onClick={() => setActiveNav(item.id)}
              >
                <span> {item.icon} </span>
                <li className={`text-[10px] capitalize`}> {item.name} </li>
              </Link>
            ))}
          </ul>
        </div>
        {showLogout && (
          <div className="w-[200px] bodrder absolute bg-gray-200 right-4 p-2 top-[70px] rounded-md flex flex-col">
            <Link to={"/profile"} className="cursor-pointer border-b border-gray-400"> Profile </Link>
            <span className="cursor-pointer border-b" onClick={handelLogout} > Logout </span>
          </div>
        )}
        <div
          className="w-[50px] h-[50px] border rounded-md p-1 shadow cursor-pointer"
          onClick={()=>setShowLogout(!showLogout)}
        >
          <img src={pic1} alt="" />
        </div>
      </header>
    </>
  );
}
