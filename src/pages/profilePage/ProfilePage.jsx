import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/pic.jpg";

export default function ProfilePage() {
  return (
    <>
      <div className="flex justify-center items-center p-2 h-[100%] flex-col">
        <div className="border w-[500px] flex justify-center items-center flex-col p-10 rounded-lg shadow-xl  ">
          <div className="h-[300px] ">
            <img src={logo} alt="" className="h-[100%] rounded-full border shadow-md" />
          </div>
          <div className="mt-10">
            <h1 className="text-[20px]"> Name : Muhammad Abozaid </h1>
            <h1 className="text-[20px]"> Email : Zidanam6@gmail.com </h1>
          </div>
        </div>
        <div className="mt-10">
          <button className="border p-2 w-[200px] rounded-md shadow duration-150 bg-red-800 hover:bg-red-500 text-white font-bold">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
