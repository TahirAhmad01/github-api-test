import React from "react";

function InfoCard({ image, followers, following, repo, name, location }) {
  return (
    <section>
      <div className="w-full lg:w-7/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                {/* <div className="absolute top-0 left-0 z-50"> */}
                <img
                  alt="..."
                  src={image}
                  className="shadow-xl rounded-full h-auto  border-none w-48 mt-5"
                />
                {/* </div> */}
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                  {location || "Unknown Place"}
                </div>
              </div>
              <div className="w-full px-4 text-center mt-1">
                <div className="flex justify-center pb-4">
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
            {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="font-normal text-pink-500"
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoCard;
