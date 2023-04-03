import React from "react";
import { useGetUsersQuery } from "./features/githubUser/finduser";

function App() {
  const { data, isError, error } = useGetUsersQuery();
  // console.log(useGetUsersQuery());
  // console.log(isError);
  console.log(data);

  return (
    <div className="App">
      <div className="text-3xl">github status</div>
      <header className="text-2xl">
        <div>Name: {data?.name}</div>
        <div>{data?.repo}</div>
        <div>Followers: {data?.followers}</div>
        <div>Followers: {data?.followers}</div>
        <div>Following: {data?.following}</div>
        <div>Location: {data?.location}</div>
        <div>Public Repositories:{data?.public_repos}</div>
        <div>Repo Url: {data?.repos_url}</div>
      </header>
    </div>
  );
}

export default App;
