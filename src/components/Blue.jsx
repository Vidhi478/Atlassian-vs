
import React from "react";
function Blue(){
  return (
    <div className="w-full h-auto mt-16 lg:mb-20 relative flex justify-center">
  
      <div className="bg-blue-600 w-[70%] h-80 -rotate-3 ml-[29%] hidden md:block"></div>

      
      <div className="bg-blue-600 w-[90%] md:w-[80%] lg:rotate-1 h-80 absolute -top-10  -translate-x-1/2 left-1/2 lg:left-1/3">

       
        <div className="w-[90%] md:w-[65%] h-60 mt-14 mx-auto  lg:-rotate-1 text-white text-center pt-5 lg:ml-[40%] ">
          
          <h1 className="text-2xl md:text-4xl font-bold mt-5 mb-6 tracking-tight">
            Unleash the power of{" "}
            <span className="border-b-2 border-yellow-400 hover:shadow-lg font-black">
              teamwork
            </span>
          </h1>

          <h3 className="text-sm md:text-lg">Join millions teaming up on their best work</h3>

          <button className="hover:bg-blue-700 hover:scale-105 duration-200 py-2 text-lg font-semibold px-6 border-2 rounded-full mt-5">
            Get started for free
          </button>

        </div>
      </div>

    </div>
  );
}

export default Blue;