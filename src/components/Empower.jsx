import React from "react";
function Empower(){
  const arr=["Software","Product management","Marketing","Project management","Design","It"];

  return(
    <div className="w-full mt-16 px-4 md:px-8 ">
      
      <h1 className="text-3xl md:text-4xl lg:text-[7.5vh] font-semibold text-center mb-10">
        Empower everyone, on every team
      </h1>

      <div className="w-full flex flex-wrap justify-center gap-3 md:gap-6 mt-6">
        {arr.map((name,index)=>(
          <div
            key={index}
            className="hover:bg-blue-50 hover:border-blue-500 hover:border-[1px] bg-zinc-100 border-[0.5px] border-zinc-200 shadow-md px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg"
          >
            {name}
          </div>
        ))}
      </div>

     
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start mt-10 gap-8 lg:gap-0">

       
        <div className="lg:w-[30%] w-full px-2 lg:px-10">
          <h1 className="text-xl md:text-3xl font-semibold">
            Supercharge dev productivity
          </h1>
          <p className="mt-4 text-sm md:text-base lg:w-96 text-zinc-700">
            Plan, track, and release world-class software with the number one software development tool for agile teams
          </p>
          <h3 className="mt-6 md:mt-10 text-violet-700 cursor-pointer text-sm md:text-base hover:text-violet-800">
            Learn more about Software <i className="ri-arrow-right-long-line"></i>
          </h3>
        </div>

        <div className="lg:w-[60%] w-full lg:ml-24">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://dam-cdn.atl.orangelogic.com/AssetLink/6ec6l1er431c3675ljyq10n08xjpc4h1.webp"
            alt=""
          />
        </div>

      </div>
    </div>
  );
}

export default Empower;