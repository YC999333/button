import React, { useState } from "react";
import Navigation from "./Navigation";

function App() {
  const [bg, setBg] = useState("bg-custom2");

  return (
    <>
      <Navigation setBg={setBg} />
      <div className="h-900 w-900 mx-auto mt-10 hover:border-2 hover:border-red-500">
        <div className="flex flex-col">
          <div className="flex h-450 justify-center items-center border-b-3 border-middleline hover:border-red-500">
            <button className="bg-custom1 hover:border-buttonBlue2 border-2 h-148 w-423 text-white rounded-button transition duration-300 ease-in-out transform hover:scale-110 shadow-custom">
              <p className="text-6xl leading-12 hover:shadow-link mx-12">
                Donate now
              </p>
            </button>
          </div>
          <div className="flex h-450 justify-center flex-col items-center">
            <h2 className="mx-auto text-xl">Button 2</h2>
            <button
              className={`${bg} hover:border-buttonBlue2 border-2 h-148 w-423 text-white rounded-button transition duration-300 ease-in-out transform hover:scale-110 shadow-custom`}
            >
              <p className="text-6xl leading-12">Donate now</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
