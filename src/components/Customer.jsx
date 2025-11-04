import React from "react";
import Logo from "./Logo";

function Customer() {
  return (
    <div className="relative w-full mt-24 px-4">

      <div className="bg-white rotate-[-4deg]  w-[94%] mx-auto py-10 mb-20  -mt-24  absolute">
        <div className="rotate-[3deg] text-center w-[90%] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">For teams of all sizes</h1>
          <p className="text-base md:text-lg text-zinc-700 mt-3">
            Everyone from start-ups to large enterprises prefer Atlassian
          </p>
          <h3 className="text-blue-600 mt-3 cursor-pointer">
            Explore all customer stories <i className="ri-arrow-right-long-line"></i>
          </h3>
        </div>
      </div>

    
      <div className="w-[90%] mx-auto bg-black text-white  mt-10 pb-10">

        <div className="flex flex-col lg:flex-row items-center gap-6 px-6 pt-32">

          <div className="w-full lg:w-1/2  md:-mt-12  z-10">
            <img
              className="rounded-lg w-full h-auto"
              src="https://dam-cdn.atl.orangelogic.com/AssetLink/0hc44s3cpf85qh12862mrt3xos5nh3b7.webp"
              alt=""
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-base uppercase mb-2 font-bold opacity-80">
              Large Enterprise
            </h1>
            <p className="text-xl md:text-3xl font-light mb-6">
              “With Atlassian cloud, everything regarding server maintenance is
              done for us, and there's less downtime and better performance.”
            </p>
            <h1 className="uppercase font-bold">Mehmet Sari</h1>
            <h2 className="text-sm md:text-base opacity-80">
              Modern Collaboration Platform Team, Mercedes-Benz
            </h2>

            <h3 className="mt-6 text-blue-300 hover:text-blue-400 cursor-pointer">
              Read Mercedes-Benz’s case study <i className="ri-arrow-right-long-line"></i>
            </h3>
          </div>
        </div>

        <Logo />
      </div>
    </div>
  );
}

export default Customer;