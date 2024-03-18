import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../DataStore/authSevices";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/logo1.jpg";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorStyle, seterrorStyle] = useState("");

  const data = useSelector((state) => state.auth);

  const handelSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin({ userName, userPassword })).then((result) => {
      if (result.payload?.user) {
        localStorage.setItem("user", result.payload?.user?.uid);
        seterrorStyle("");
        navigate("/");
      } else {
        seterrorStyle(result.payload?.message);
      }
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] flex-col">
        <form className="w-[400px] px-5" onSubmit={handelSubmit}>
          {errorStyle && (
            <div className="bg-red-600 w-[100%] mb-5 p-2 rounded-md text-gray-100">
              {errorStyle}
            </div>
          )}
          <div className="flex justify-center items-center">
            <img src={logo} className="w-[150px]" alt="" />
          </div>
          <div className="flex justify-center items-center py-5">
            <h1 className="font-medium text-[32px]"> Sign In </h1>{" "}
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="border-[#6e7680] border leading-3 w-[100%] p-3 rounded-xl text-[18px]"
              placeholder="Email Address"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              className="border-[#6e7680] border leading-3 w-[100%] p-3 rounded-xl text-[18px]"
              placeholder="Password"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <div className="flex items-start mb-6">
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              you dont have an account{" "}
              <Link
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                sign up now
              </Link>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
