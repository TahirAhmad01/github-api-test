import React, { useState } from "react";
import { useGetUsersQuery } from "../features/githubUser/findUsers/findUser";
import CountCard from "./countCard";
import Loading from "./loading";
import RepositoryList from "./repositoryList";
import UserFollower from "./userFollower";
import UserFollowing from "./userFollowing";

function InfoCard({ value }) {
  const [activeTabs, setActiveTabs] = useState({
    repositories: true,
    followers: false,
    following: false,
  });
  const { data, isError, isLoading, error } = useGetUsersQuery(
    value ? value : "tahirahmad01"
  );
  const {
    avatar_url: image,
    followers,
    following,
    public_repos: repo,
    name,
    location,
    login,
  } = data || {};
  console.log(error);

  const tabChange = (tabName) => {
    setActiveTabs((prevState) => ({
      ...prevState,
      repositories: tabName === "repositories",
      followers: tabName === "followers",
      following: tabName === "following",
    }));
  };

  return (
    <section>
      <div className="w-full lg:w-7/12 px-2 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-7 py-7">
          {isLoading ? (
            <div className="text-center">
              {" "}
              <Loading />
            </div>
          ) : null}
          {!isLoading && isError ? (
            <div className="text-center text-red-500">
              {error?.data?.message === "Not Found"
                ? "User not found"
                : "Something went wrong"}
            </div>
          ) : null}

          {!isLoading && !isError && (
            <div className="px-3 md:px-6">
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
                    <div className="text-gray-500 text-xs">@{login}</div>
                  </h3>
                  <div className="text-xs leading-normal mb-2 text-gray-500 font-bold uppercase mt-2">
                    <i className="fas fa-map-marker-alt mr-2 text-xs text-blueGray-400" />
                    {location ? location : "Unknown Place"}
                  </div>
                </div>
                <div className="w-full px-4 text-center mt-1">
                  <div className="flex justify-center">
                    <CountCard
                      name="followers"
                      amount={followers}
                      func={tabChange}
                    />
                    <CountCard
                      name="following"
                      amount={following}
                      func={tabChange}
                    />
                    <CountCard
                      name="repositories"
                      amount={repo}
                      func={tabChange}
                    />
                  </div>
                </div>
              </div>

              {activeTabs?.repositories ? (
                <RepositoryList value={value} />
              ) : activeTabs?.followers ? (
                <UserFollower value={value} />
              ) : activeTabs?.following ? (
                <UserFollowing value={value} />
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default InfoCard;
