
import React from "react";
import Oneteam from "./Oneteam";

function Teamwork() {
  return (
    <div className="min-h-screen w-full bg-white">
      <h1 className="text-3xl md:text-4xl font-semibold px-4 md:px-10 py-6">
        Teamwork solutions for high-performing teams
      </h1>

    
      <div className="flex flex-col md:flex-row w-full h-[85vh] overflow-y-auto">
       
        <div className="w-full md:w-1/2 h-full overflow-y-auto  border-r">
          <Oneteam />
        </div>
        
        <div className="oneteam w-full md:w-1/2 h-full overflow-y-auto  p-10 flex flex-col gap-10">
          {[
            "https://dam-cdn.atl.orangelogic.com/AssetLink/80qt36g22p4m41p66lxp06m0q3f87abd.mp4",
            "https://dam-cdn.atl.orangelogic.com/AssetLink/nt635rjo7hdklio5nmull65kk44i2wrp.mp4",
            "https://dam-cdn.atl.orangelogic.com/AssetLink/n0q7e6b6ddfs0858muf851j75fvc8643.mp4",
            "https://dam-cdn.atl.orangelogic.com/AssetLink/27ujcvoyd73u73c33d00a5q4gyqd40n0.mp4",
            "https://dam-cdn.atl.orangelogic.com/AssetLink/mk2h13861hj08rhewrfn05bpn87s2730.mp4"
          ].map((src, index) => (
            <video
              key={index}
              autoPlay
              loop
              muted
              className="rounded-xl w-full"
            >
              <source src={src} type="video/mp4" />
            </video>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Teamwork;