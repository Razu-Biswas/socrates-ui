import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl">Socrates</h1>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Upgrade to Premium
      </button>
    </header>
  );
};

export default Header;
