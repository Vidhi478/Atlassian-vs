import React from "react";

function Onlyimg() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center py-10 px-4">
      <div className="bg-black text-white w-full max-w-6xl mb-10 pt-16 px-10 md:px-10">
        
        
        <div className="flex items-center gap-3 justify-center">
          <div className="w-10 h-10 md:w-12 md:h-12">
            <img 
              className="w-full h-full object-contain" 
              src="https://imgs.search.brave.com/yqoD4x91MBOc2nggxFRrFwYF0KU8MSyFaePJWm2LfIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9hdGxhc3Np/YW4tcm92by1pY29u/LnBuZw"
              alt="logo"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-medium">Rovo</h1>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-center mt-8 leading-tight">
          Transform teamwork with human-AI collaboration
        </h1>

       
        <div className="flex justify-center">
          <button className="text-purple-300 hover:text-purple-500 mt-5 transition text-lg md:text-lg flex items-center gap-1">
            Explore Rovo 
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

       
        <div className="w-[90%] overflow-hidden rounded-t-lg mt-12 ml-[5%]  ">
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-[270px] md:h-[510px] object-cover"
            src="https://dam-cdn.atl.orangelogic.com/AssetLink/nt635rjo7hdklio5nmull65kk44i2wrp.mp4"
          ></video>
        </div>

      </div>
    </div>
  );
}

export default Onlyimg;