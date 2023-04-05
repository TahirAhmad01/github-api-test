import React from "react";

function InfoCard({ image, followers, following, repo, name, location }) {
  return (
    <section>
      <div className="w-full lg:w-7/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-7 py-7">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                {/* <div className="absolute top-0 left-0 z-50"> */}
                <img
                  alt="..."
                  src={image}
                  className="shadow-xl rounded-full h-auto  border-none w-48"
                />
                {/* </div> */}
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold leading-normal text-blueGray-700">
                  {name}
                </h3>
                  <div className="text-sm leading-normal mb-2 text-gray-500 font-bold uppercase mt-2">
                    <i className="fas fa-map-marker-alt mr-2 text-md text-blueGray-400" />
                    {location ? location : "Unknown Place"}
                  </div>
              </div>
              <div className="w-full px-4 text-center mt-1">
                <div className="flex justify-center">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {followers || "0"}
                    </span>
                    <span className="text-sm text-blueGray-400">Followers</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {following || "0"}
                    </span>
                    <span className="text-sm text-blueGray-400">Following</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {repo || "0"}
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Repositories
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoCard;
