import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import InfoCard from "./components/infoCard";
import Navbar from "./components/nav";
import { useGetUsersQuery } from "./features/githubUser/findUsers/findUser";

function App() {
  const [inpVal, setInpVal] = useState("");
  const [value] = useDebounce(inpVal, 1000);

  const { data, isError, isLoading, error } = useGetUsersQuery(
    value ? value : "tahirahmad01"
  );
  console.log(value);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar value={inpVal} setValue={setInpVal} />

      {isLoading && <div className="center">loading........</div>}

      {!isError && !isLoading && (
        <InfoCard
          image={data.avatar_url}
          followers={data?.followers}
          following={data?.following}
          repo={data?.public_repos}
          name={data?.name}
          location={data?.location}
          value={value}
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
