import React from "react";
import { useGetUsersQuery } from "./features/githubUser/finduser";

function App() {
  const { data, isError, isLoading, error } = useGetUsersQuery();
  // console.log(useGetUsersQuery());
  console.log(error);
  // console.log(data);

  return (
    <div className="App">
      <div className="text-3xl">github status</div>
      <header className="text-2xl">
        {isLoading && <div>loading......</div>}
        {!isError && !isLoading && (
          <>
            <div>Name: {data?.name}</div>
            <div>{data?.repo}</div>
            <div>Followers: {data?.followers}</div>
            <div>Following: {data?.following}</div>
            <div>Location: {data?.location}</div>
            <div>Public Repositories:{data?.public_repos}</div>
            <div>Repo Url: {data?.repos_url}</div>
          </>
        )}
      </header>
      {isError && (
        <div className="text-red-500 mt-4">
          <div>{error?.data?.message}</div>
          <div>{error?.data?.documentation_url}</div>
        </div>
      )}
    </div>
  );
}

export default App;
