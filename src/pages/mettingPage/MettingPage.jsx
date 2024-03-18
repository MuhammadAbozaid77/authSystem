import React from 'react';
import { IoVideocam } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function MettingPage() {
  return (
    <div className="flex justify-center items-center gap-16 h-[100%]">
    <Link to={"/mettings/oneTOone"} className="cursor-pointer">
      <div className="w-[200px] h-[200px] border p-2 rounded-[35%] flex justify-center items-center flex-col bg-orange-400  hover:-translate-y-3 duration-200">
        <FaUser size={100} color="white" />
      </div>
      <h5 className="text-center mt-2 text-gray-500 text-[20px]">
        {" "}
        One To One{" "}
      </h5>
    </Link>
    <Link to={"/mettings/oneTOgroup"} className="cursor-pointer">
      <div className="w-[200px] h-[200px] border p-2 rounded-[35%] flex justify-center items-center flex-col bg-orange-600  hover:-translate-y-3 duration-200">
        <FaUsers size={100} color="white" />
      </div>
      <h5 className="text-center mt-2 text-gray-500 text-[20px]">
        {" "}
        Group{" "}
      </h5>
    </Link>

  </div>
  )
}
