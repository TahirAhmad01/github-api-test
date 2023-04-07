import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import InfoCard from "./components/infoCard";
import Navbar from "./components/nav";

function App() {
  const [inpVal, setInpVal] = useState("");
  const [value] = useDebounce(inpVal, 1000);

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      <Navbar value={inpVal} setValue={setInpVal} />
      <InfoCard value={value} />
    </div>
  );
}

export default App;
