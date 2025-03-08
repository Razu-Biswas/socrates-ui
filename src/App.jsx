import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex h-screen bg-zinc-800  ">
      <Sidebar />
      <div className="flex flex-col flex-grow ">
        <Main />
      </div>
    </div>
  );
};

export default App;
