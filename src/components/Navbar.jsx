import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 overflow-hidden">
      <div className="w-full h-12 flex items-center justify-between">

        
        <div className="w-40 md:w-44 ml-2 md:ml-6 h-24">
          <img
            className="w-full h-full"
            src="https://imgs.search.brave.com/audTHZP1pe3Q_M5YlFd8JIFftKW9XQv3yvk0-ShX4Vs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L0F0bGFzc2lhbi1s/b2dvLTY0MHg0MDAu/anBn"
            alt="logo"
          />
        </div>

        
        <div className="hidden lg:flex gap-6 items-center">
          <h5>Products <i className="ri-arrow-down-s-line"></i></h5>
          <h5>Solutions <i className="ri-arrow-down-s-line"></i></h5>
          <h5>Why Atlassian? <i className="ri-arrow-down-s-line"></i></h5>
          <h5>Resources <i className="ri-arrow-down-s-line"></i></h5>
          <h5>Enterprise</h5>
        </div>

      
        <div className="hidden md:flex items-center gap-5 mr-2">
          <i className="text-2xl hover:text-blue-700 ri-search-line"></i>
          <div className="w-[1px] h-6 bg-slate-400"></div>
          <button className="px-3 py-1 text-sm font-semibold text-blue-700 border border-blue-700 rounded">
            Sign in
          </button>
        </div>

       
        <button
          className="block lg:hidden text-2xl mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>


      {menuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-white shadow-md rounded-md space-y-3">
          <h5 className="flex justify-between items-center">
            Products <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h5 className="flex justify-between items-center">
            Solutions <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h5 className="flex justify-between items-center">
            Why Atlassian? <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h5 className="flex justify-between items-center">
            Resources <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h5>Enterprise</h5>

          <div className="flex justify-between mt-3 items-center">
            <i className="text-xl hover:text-blue-700 ri-search-line"></i>
            <button className="px-3 py-1 text-sm font-semibold text-blue-700 border  rounded">
              Sign in
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
