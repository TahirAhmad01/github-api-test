import React from "react";
import logo from "../assets/image/logo.png";

function Navbar({ value, setValue }) {
  return (
    <div>
      <nav className="bg-gray-700">
        <div className="mx-auto py-4 flex justify-between items-center px-4 gap-4">
          <h1 className="text-2xl font-bold text-gray-50 flex gap-3 items-center">
            <img src={logo} alt="logo" className="w-9" />
            <div className="hidden sm:block">Github api</div>
          </h1>
          <div className="flex items-center space-x-2 bg-white py-1 px-2 rounded-full w-full sm:w-72">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              className="outline-none"
              type="text"
              placeholder="Search Github Username"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
