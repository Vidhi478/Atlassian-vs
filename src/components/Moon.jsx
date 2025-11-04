import React, { useRef, useState } from "react";

function Moon() {
  const [val, setval] = useState(130000);
  const interval = useRef(null);

  const handlefuc = () => {
    let curr = 0;
    interval.curr = setInterval(() => {
      if (curr >= 300000) {
        clearInterval(interval.curr);
      } else {
        curr += 1000;
        setval(curr);
      }
    }, 10);
  };

  return (
    <div className="bg-zinc-100 w-[99%] h-auto mt-10 rotate-1 pt-2 ml-[0.5%] flex flex-col lg:flex-row relative pb-10">

      
      <div className="w-full lg:w-[75%] h-full -rotate-1 pt-10 px-6 pb-10 lg:pl-14 flex flex-col lg:flex-row gap-8">

        
        <div className="w-full lg:w-[68%]">
          <h1 className="text-black text-3xl sm:text-4xl font-bold">
            Teams across the globe run on Atlassian
          </h1>

          <button
            onMouseEnter={handlefuc}
            className="text-5xl sm:text-7xl mt-6 sm:mt-9 font-semibold text-blue-600"
          >
            {val.toLocaleString()}+
          </button>

          <h4 className="mt-3 sm:mt-6 text-sm sm:text-base">
            companies power team collaboration with Atlassian
          </h4>
        </div>

       
        <div className="w-full lg:w-[30%] flex lg:block gap-8">
          
          <div className="w-full lg:h-[40%] pl-5 border-l-2 border-black mb-6">
            <button className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-2">
              200+
            </button>
            <p className="text-sm sm:text-base text-zinc-700 mb-3">
              countries and territories have companies that use Atlassian
            </p>
          </div>

          <div className="w-full lg:h-[40%] pl-5 border-l-2 border-black mb-6 lg:mb-0">
            <button className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-2">
              80%
            </button>
            <p className="text-sm sm:text-base text-zinc-700 ">
              of Fortune 500 companies use Atlassian products
            </p>
          </div>
        </div>

        <div className=" w-48 h-16 bg-white absolute -rotate-2 -bottom-12 left-0 hidden lg:block "></div>
      </div>

     
      <div className="w-full lg:w-[25%] h-[300px] lg:h-auto flex justify-center items-center relative mt-5 lg:mt-0">
        <div className="bg-amber-500 w-[10vh] sm:w-[15vh] h-[10vh] sm:h-[15vh] rounded-full absolute top-5 right-5"></div>

        <div className="w-[30vh] sm:w-[40vh] h-[30vh] sm:h-[40vh] relative -rotate-1">
          <img
            className="opacity-90 w-full h-full object-cover"
            src="https://dam-cdn.atl.orangelogic.com/AssetLink/435e558616x6e3c2jvth65jiq2vusf20.webp"
            alt="globe"
          />
        </div>
      </div>
    </div>
  );
}

export default Moon;
