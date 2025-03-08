import React from "react";
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { TbFileArrowLeft } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { GiConvergenceTarget } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {
  return (
    <aside className="p-4 text-white w-1/5">
      <div className="flex  justify-between justify-items-center">
        <div className="flex">
          <CiCirclePlus className="text-orange-300  mt-1 mr-1" size={24} />

          <h3 className="text-2xl">Socrates</h3>
        </div>
        <div className="flex mt-1">
          {" "}
          <CiSearch size={24} />
          <TbFileArrowLeft size={24} />
        </div>
      </div>

      <div className=" flex justify-center items-center mt-4">
        <div>
          <div>
            <p class="font-thin text-white   py-2 px-24 mt-2 border border-yellow-500 hover:border-transparent rounded-full">
              Add folder
            </p>
          </div>
          <div>
            <p class=" font-thin bg-gray-500 text-white py-2 px-24 mt-2 border border-yellow-500 hover:border-transparent rounded-full">
              Create cht
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 h-96 relative   ">
        <div className=" absolute bottom-0 px-4  b-0  rounded-lg pt-2  bg-gray-600 ">
          <p className="font-bold flex">Upgrade to Premium</p>
          <p className="text-gray-400">Make the most of all features!</p>
          <p class=" font-thin text-white py-2 text text-center mt-2 mb-4 border border-yellow-500 hover:border-transparent rounded-full">
            Upgrade plan
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center mt-4">
          <GiConvergenceTarget size={22} />
          <p className="ml-4">Flow Ai Templates</p>
        </div>
        <div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img
                className="w-8 rounded-full mr-2"
                src="https://static.cricbuzz.com/a/img/v1/152x152/i1/c586250/orla-prendergast.jpg"
                alt=""
              />
              <p>Jessica Milles</p>
            </div>
            <IoMdSettings size={22} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
