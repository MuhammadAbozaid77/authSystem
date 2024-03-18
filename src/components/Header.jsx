import { HiChatBubbleLeftRight, HiHome, HiVideoCamera } from "react-icons/hi2";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import logo from "./../assets/logo1.jpg";
import pic1 from "./../assets/pic.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const navbarData = [
    { id: 1, path : "" , name: "home", icon: <HiHome size={20} /> },
    { id: 2, path : "/chat" , name: "chat", icon: <HiChatBubbleLeftRight size={20} /> },
    { id: 3, path : "/mettings" , name: "mettings", icon: <HiVideoCamera size={20} /> },
    { id: 4, path : "/contacts" , name: "contacts", icon: <FaUsers size={20} /> },
    { id: 5, path : "/schedule" , name: "schedule", icon: <MdOutlineAccessTimeFilled size={20} /> },
  ];
  const [activeNav, setActiveNav] = useState(1);

  return (
    <>
      <header className="p-3 border-b flex justify-between items-center">
        <div className="">
          <img src={logo} className="w-[50px] h-[50px]" alt="" />
        </div>
        <div>
          <ul className="flex justify-center items-center gap-10">
            {navbarData.map((item, index) => (
              <Link to={item.path}
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
        <Link to={"/profile"} className="w-[50px] h-[50px] border rounded-md p-1 shadow cursor-pointer">
          <img src={pic1} alt="" />
        </Link>
      </header>
    </>
  );
}
