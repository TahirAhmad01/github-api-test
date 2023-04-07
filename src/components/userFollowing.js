import React from "react";
import { useUserFollowingQuery } from "../features/githubUser/userFollowing/userFollowing";
import FollowLoading from "./followLoading";

function UserFollowing({ value }) {
  const { data, isLoading, isError, error } = useUserFollowingQuery(
    value ? value : "tahirahmad01"
  );
  //   console.log(error);
  console.log(data);

  return (
    <div>
      <h1 className="text-lg mb-2 font-medium text-gray-800">Following</h1>
      {isLoading ? (
        <div className="text-center">
          <FollowLoading />
          <FollowLoading />
          <FollowLoading />
        </div>
      ) : null}
      {!isLoading && isError ? (
        <div className="text-center">Something went wrong</div>
      ) : null}
      {!isLoading && data?.length === 0 && (
        <div className="text-center mt-5">No following</div>
      )}
      {!isLoading && data?.length > 0 ? (
        <div>
          {data.map((follower, idx) => {
            const { login, avatar_url, html_url } = follower || {};
            return (
              <div key={idx}>
                <a
                  href={html_url}
                  className="border hover:bg-gray-100 border-gray-200 px-3 py-4 rounded-md my-2 flex items-center gap-4"
                  target="_blank"
                >
                  <div className="w-14 rounded-full overflow-hidden">
                    <img src={avatar_url} alt={login} />
                  </div>
                  <div className="font-medium">{login}</div>
                </a>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default UserFollowing;
