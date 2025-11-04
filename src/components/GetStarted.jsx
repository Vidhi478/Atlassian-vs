
import React from "react";
import GetCards from "./GetCards";

function Getstarted() {
  return (
    <div className="pt-24 p-4 w-full">
      
     
      <div className="text-center">
        <h1 className="text-[5vh] sm:text-[6vh] md:text-[8vh] lg:text-[10vh] font-light leading-tight">
          The AI-powered Jira:<br />
          from <span className="font-black">teams</span> to dreams
        </h1>
      </div>

    
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-full hover:shadow-xl">
          Get started
        </button>
      </div>

     
      <div className="mt-6 w-full flex justify-center">
        <GetCards />
      </div>

      
      <div className="w-full md:w-[75%] mx-auto mt-8">
        <img
          className="w-full h-auto object-cover rounded-xl"
          src="https://dam-cdn.atl.orangelogic.com/AssetLink/k70j5y22805lb5y6pyq7q63ihodb2omd.webp"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default Getstarted;