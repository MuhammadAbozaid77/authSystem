import { HiChatBubbleLeftRight, HiHome, HiVideoCamera } from "react-icons/hi2";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import logo from "./../assets/logo1.jpg";
import pic1 from "./../assets/pic.jpg";

export default function Header() {
  const navbarData = [
    { name: "home", icon: <HiHome size={20} />, active: true },
    { name: "chat", icon: <HiChatBubbleLeftRight size={20} /> },
    { name: "mettings", icon: <HiVideoCamera size={20} /> },
    { name: "contacts", icon: <FaUsers size={20} /> },
    { name: "schedule", icon: <MdOutlineAccessTimeFilled size={20} /> },
  ];
  return (
    <>
      <header className="p-3 border-b flex justify-between items-center">
        <div className="">
          <img src={logo} className="w-[50px] h-[50px]" alt="" />
        </div>
        <div>
          <ul className="flex justify-center items-center gap-10">
            {navbarData.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center flex-col cursor-pointer"
              >
                <span className={item.active ? "text-blue-500" : ""}>
                  {" "}
                  {item.icon}{" "}
                </span>
                <li
                  className={`text-[10px] capitalize ${
                    item.active ? "text-blue-500" : ""
                  }`}
                >
                  {" "}
                  {item.name}{" "}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-[50px] h-[50px] border rounded-md p-1 shadow">
          <img src={pic1} alt="" />
        </div>
      </header>
    </>
  );
}
