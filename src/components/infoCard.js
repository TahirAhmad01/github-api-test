import React from "react";
import { useGitReposQuery } from "../features/githubUser/gitRepo/gitRepo";
import RepoCard from "./repoCard";
import CountCard from "./countCard";

function InfoCard({
  image,
  followers,
  following,
  repo,
  name,
  location,
  value,
}) {
  const {
    data: repositories,
    isLoading,
    isError,
    error,
  } = useGitReposQuery(value ? value : "tahirahmad01");
  console.log(repositories);

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
                  {name || "Unknown"}
                </h3>
                <div className="text-sm leading-normal mb-2 text-gray-500 font-bold uppercase mt-2">
                  <i className="fas fa-map-marker-alt mr-2 text-md text-blueGray-400" />
                  {location ? location : "Unknown Place"}
                </div>
              </div>
              <div className="w-full px-4 text-center mt-1">
                <div className="flex justify-center">
                  <CountCard name="followers" amount={followers}/>
                  <CountCard name="following" amount={following}/>
                  <CountCard name="repositories" amount={repo}/>
                </div>
              </div>
            </div>

            {isLoading ? <div>Loading...</div> : null}
            {repositories?.length > 0 ? (
              <div>
                <h1 className="text-lg mb-2 font-medium text-gray-800">
                  Repositories
                </h1>
                {repositories.map((repo, idx) => {
                  const {
                    name,
                    description,
                    homepage,
                    html_url,
                    language,
                    stargazers_count,
                  } = repo || {};
                  return (
                    <div key={idx}>
                      <RepoCard
                        name={name}
                        description={description}
                        live={homepage}
                        gitUrl={html_url}
                        language={language}
                        star={stargazers_count}
                      />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoCard;
