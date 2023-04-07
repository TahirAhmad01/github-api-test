import React from "react";

function Loading() {
  return (
    <div className="animate-pulse my-3">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
        <div className="w-48 h-3 bg-gray-300 rounded-md"></div>
        <div className="w-28 h-2 bg-gray-300 rounded-md"></div>
        <div className="w-32 h-2 bg-gray-300 rounded-md"></div>
        <div className="flex items-center justify-center gap-5 mt-5">
            <div className="w-14 h-14 bg-gray-300 rounded-md"></div>
            <div className="w-14 h-14 bg-gray-300 rounded-md"></div>
            <div className="w-14 h-14 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
