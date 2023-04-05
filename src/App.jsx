import React, { useState } from "react";
import InfoCard from "./components/infoCard";
import Navbar from "./components/nav";
import { useGetUsersQuery } from "./features/githubUser/finduser";

function App() {
  const [inpVal, setInpVal] = useState("");
  const { data, isError, isLoading, error } = useGetUsersQuery(
    inpVal ? inpVal : "tahirahmad01"
  );
  // console.log(useGetUsersQuery());
  console.log(data);
  // console.log(data);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar value={inpVal} setValue={setInpVal} />

      {!isError && !isLoading && (
        <InfoCard
          image={data.avatar_url}
          followers={data?.followers}
          following={data?.following}
          repo={data?.public_repos}
          name={data?.name}
          location={data?.location}
        />
      )}

      {/* <div className="text-3xl">github status</div>
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
      </header> */}
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
