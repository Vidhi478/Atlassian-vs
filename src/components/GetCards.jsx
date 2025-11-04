
import React, { useState } from "react";

function GetCards() {
  const [val, setval] = useState([
    { image: "https://dam-cdn.atl.orangelogic.com/AssetLink/o8h5chftg22x85ps525w8768s2eky18x.svg", Name: "Software" },
    { image: "https://dam-cdn.atl.orangelogic.com/AssetLink/n674f3ny04d687nl4m3b5vwa2677770v.svg", Name: "Product management" },
    { image: "https://dam-cdn.atl.orangelogic.com/AssetLink/6rw076257b8r6vxfm21ehv234yfy7112.svg", Name: "Marketing" },
    { image: "https://dam-cdn.atl.orangelogic.com/AssetLink/r7o21ms42c827k3n16yb33u35n7o3m1b.svg", Name: "Project management" },
    { image: "https://dam-cdn.atl.orangelogic.com/AssetLink/v70w3b02mw3gi8338otv12n61b050h8c.svg", Name: "Design" },
    { image: "https://dam-cdn.atl.orangelogic.com/AssetLink/o3s7vy83q8t61ac8bmtkby74a2874842.svg", Name: "IT" }
  ]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-9 justify-between items-center px-10">
      {val.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-40  bg-white py-4 rounded-md text-center border border-transparent hover:border-gray-400 hover:shadow-sm transition-all"
        >
          <div className="w-12 mx-auto mb-2">
            <img className="w-full object-contain" src={item.image} alt={item.Name} />
          </div>
          <h1 className="text-sm sm:text-base font-medium">{item.Name}</h1>
        </div>
      ))}
    </div>
  );
}

export default GetCards;