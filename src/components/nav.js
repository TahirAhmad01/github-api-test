import React from "react";
import { useDebounce } from "use-debounce";

function Navbar({ value, setValue }) {
  return (
    <div>
      <nav className="bg-gray-700">
        <div className="container mx-auto py-4 flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-gray-50">Github api</h1>
          <div className="flex items-center space-x-2 bg-white py-1 px-2 rounded-full">
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
              placeholder="Search Username"
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
