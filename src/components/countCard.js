import React from "react";

function CountCard({ name, amount }) {
  return (
    <div className="mr-4 p-3 text-center text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
      <span className="text-xl font-bold block uppercase tracking-wide">
        {amount}
      </span>
      <span className="text-sm text-blueGray-400 capitalize">{name}</span>
    </div>
  );
}

export default CountCard;
