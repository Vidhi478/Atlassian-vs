import React from "react";

function Logo() {
  const arr = [
    "https://dam-cdn.atl.orangelogic.com/AssetLink/3n048m64vgkhx225c6b2d4y6qi652h4l.svg",
    "https://dam-cdn.atl.orangelogic.com/AssetLink/55f2g6em288b4mdhqw337ynev64hlj84.svg",
    "https://dam-cdn.atl.orangelogic.com/AssetLink/wi135m7n2w6p4587n150uf8b813q6k1e.svg",
    "https://dam-cdn.atl.orangelogic.com/AssetLink/xmhh54730jx70s5lm3wkfb8w7887s3ge.svg",
    "https://dam-cdn.atl.orangelogic.com/AssetLink/2gk5qdtm2d84640y77grbw0f6qgfipa6.svg",
    "https://dam-cdn.atl.orangelogic.com/AssetLink/4x832j813dg245bkofa582k4wvf8eii5.svg",
    "https://dam-cdn.atl.orangelogic.com/AssetLink/3340ipwj05l14sno7ixj2n7h7o3231sc.svg",
  ];

  return (
    <div className="border-t border-zinc-600 mt-10 pt-6 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 place-items-center">
        {arr.map((item, i) => (
          <div key={i} className="w-24 sm:w-28 h-10 flex items-center justify-center">
            <img
              className="w-full h-full object-contain opacity-60 hover:opacity-100 duration-200 hover:border-t-2 hover:border-t-zinc-500"
              src={item}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logo;