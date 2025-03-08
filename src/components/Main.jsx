import React from "react";
import { TbCloudExclamation } from "react-icons/tb";

const Main = () => {
  return (
    <main className="flex-grow p-8 bg-zinc-700 text-center ">
      <div className="ml-24 w-5/6 rounded-full border-dashed border-2 border-gray-400 p-2 text-center bg-gray-800 text-white">
        <p>
          The web version does not display local chats. To access all features,
          please{" "}
          <span className="text-orange-400 font-semibold">
            install the app.
          </span>
        </p>
      </div>

      <div>
        <div>
          <p className="text-6xl text-white font-semibold py-4 mt-8">
            Add Files <span>@</span> Cloud Chat
          </p>
          <p className="text-gray-300">
            Your files will not be stored on our servers and no AI models will
            be trained.
          </p>
          <p className="text-orange-400">
            Supported File Types: .docx, .pdf, .epub, and many test filetypes
          </p>
        </div>
        {/* grid  grid-flow-col grid-rows-2 gap-4 */}
        <div className="   grid grid-cols-2 gap-4 mt-14 ">
          <div className="bg-gray-800 rounded-md text-white py-4 px-4">
            <p>
              {" "}
              Drag & drop local files here, <br /> click to select
            </p>
          </div>
          <div className="bg-gray-800 rounded-md text-white py-4 px-4">
            <p>Enter in a Public URL</p>

            <div class=" bg-gray-800 flex items-center   rounded overflow-hidden h-18">
              <input
                type="text"
                class="w-full px-4 py-2 text-white bg-gray-700 focus:outline-none rounded-full"
                placeholder="https://example.com/file.pdf"
              />
              <button class=" bg-gray-600 rounded-full text-white px-2 py-2 pr-2">
                Add
              </button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md text-white py-8 px-4 ">
            <p>Added files from Dropbox</p>
          </div>
          <div className="bg-gray-800 rounded-md text-white py-8 px-4  ">
            <p>Added files from Google Drive </p>
          </div>
        </div>
        <div className="py-4 px-4">
          <div className=" rounded-full  p-2 text-center bg-gray-800 text-white">
            <div className="flex justify-evenly items-center ">
              <div className="flex bg-gray-700 rounded-full py-2 px-2">
                <p>Report_file.pdf</p>
                <div class="flex items-center justify-center pl-4">
                  <input
                    type="checkbox"
                    id="simple-checkbox"
                    class="form-checkbox h-5 w-5"
                  />
                  <label for="simple-checkbox" class="ml-2">
                    Checkmark with Text
                  </label>
                </div>
              </div>
              <div className="flex bg-gray-700 rounded-full py-2 px-2">
                <p>Article.docs</p>

                <div class="flex items-center justify-center pl-4">
                  <input
                    type="checkbox"
                    id="simple-checkbox"
                    class="form-checkbox h-5 w-5"
                  />
                  <label for="simple-checkbox" class="ml-2">
                    Checkmark with Text
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-center items-center ">
          <div class="w-1/4">
            <p class="font-thin text-white   py-4 px-24 mt-2 border border-yellow-500 hover:border-transparent rounded-full">
              Start
            </p>
          </div>
          <p className="text-white text-xl mr-4 ml-4">or</p>
          <div>
            <div>
              <p class="font-thin text-white   py-4 px-24 mt-2 border bg-yellow-600 border-yellow-500 hover:border-transparent rounded-full">
                Start with Drive
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
