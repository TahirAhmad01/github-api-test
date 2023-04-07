import React from "react";

function RepoCard({ name, description, live, gitUrl, language, star }) {
  function cropUrl(url) {
    return url.replace(/^https?:\/\//i, "");
  }

  return (
    <a
      href={gitUrl}
      target="_blank"
      className="w-full block border rounded-lg border-gray-200 p-5 shadow-sm hover:bg-gray-100 delay-100 duration-200 mb-3 overflow-x-hidden"
    >
      {/* Header */}
      <div className="flex flex-row items-center">
        {/* <img
          src="https://picsum.photos/40/40"
          className="rounded-xl object-cover w-12"
        /> */}
        <p>
          <span className="text-gray-600 font-semibold">{name}</span>
          {/* <span className="text-gray-300 font-semibold">
            react<span></span>
          </span> */}
          <p className="text-xs text-gray-500">{description}</p>
          {live && (
            <p className="text-xs text-gray-500">
              Live preview:{" "}
              <span
                href={live ? live : "#"}
                target="_blank"
                className="text-blue-600 hover:underline break-words"
                onClick={() => {
                  window.open(
                    "https://" +
                      cropUrl(live ? live : "https://www.example.com"),
                    "_blank"
                  );
                }}
              >
                {"https://" + cropUrl(live ? live : "https://www.example.com")}
              </span>
            </p>
          )}
        </p>
      </div>

      <div className="mt-2 flex gap-5 text-xs font-medium text-gray-400">
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-circle text-green-700"></i>
          <div>{language || "Unknown"}</div>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-regular fa-star"></i>
          <div>{star}</div>
        </div>
      </div>
    </a>
  );
}

export default RepoCard;
