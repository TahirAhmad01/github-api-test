import React from "react";

function CountCard({ name, amount, func }) {
  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }

  return (
    <div
      className="p-3 text-center text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
      onClick={() => func(name)}
    >
      <span className="text-xl font-bold block uppercase tracking-wide">
        {nFormatter(amount || 0, 1)}
      </span>
      <span className="text-sm text-blueGray-400 capitalize">{name}</span>
    </div>
  );
}

export default CountCard;
