import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoVideocam } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export default function Home() {
  // const navigate = useNavigate();
  const data = useSelector((state) => state.auth);
  // const handeLogout = () => {
  //   localStorage.clear("user");
  //   navigate("/login");
  // };
  return (
    <>
      <div className="flex justify-center items-center gap-10 h-[100%]">
        <div className="cursor-pointer">
          <div className="w-[100px] h-[100px] border p-2 rounded-[35%] flex justify-center items-center flex-col bg-orange-500">
            <IoVideocam size={60} color="white" />
          </div>
          <h5 className="text-center mt-2 text-gray-500 text-[20px]">
            {" "}
            New Metting{" "}
          </h5>
        </div>
        <div className="cursor-pointer">
          <div className="w-[100px] h-[100px] border p-2 rounded-[35%] flex justify-center items-center flex-col bg-blue-500">
            <FaPlusSquare size={60} color="white" />
          </div>
          <h5 className="text-center mt-2 text-gray-500 text-[20px]"> Join </h5>
        </div>
        <div className="cursor-pointer">
          <div className="w-[100px] h-[100px] border p-2 rounded-[35%] flex justify-center items-center flex-col bg-blue-500">
            <MdOutlineAccessTimeFilled size={60} color="white" />
          </div>
          <h5 className="text-center mt-2 text-gray-500 text-[20px]">
            {" "}
            Schedule{" "}
          </h5>
        </div>
      </div>
    </>
  );
}
