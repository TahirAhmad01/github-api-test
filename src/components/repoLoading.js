import React from "react";

function RepoLoading() {
  return (
    <div className="animate-pulse my-3">
      <div className="border-gray-200 border-2 p-5 rounded-md ">
        <div className="w-1/3 h-3 bg-gray-300 mb-3 rounded-md"></div>
        <div className="w-1/2 h-3 bg-gray-300 mb-3 rounded-md"></div>
        <div className="w-full">
          <div className="mt-2 flex gap-5 text-xs font-medium text-gray-400">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-circle text-green-700"></i>
              <div className="w-7 h-3 rounded-md bg-gray-300"></div>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-regular fa-star"></i>
              <div className="w-7 h-3 rounded-md bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoLoading;
