import React from "react";
import { useGetUsersQuery } from "./features/githubUser/finduser";

function App() {
  const { data } = useGetUsersQuery();
  console.log(data);
  
  return (
    <div className="App">
      <header className="text-3xl">Github Api Test</header>
    </div>
  );
}

export default App;
