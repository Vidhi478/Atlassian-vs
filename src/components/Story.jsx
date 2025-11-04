import React from "react";

function Story(){
    return (
        <div className="h-96 w-full mt-20 mb-4 sm:mb-20 xs:mb-20 flex items-center justify-center relative">    
        <div className="w-28 h-28 mr-6 hover:scale-110 duration-300 -mt-40">
            <img 
            className="w-full h-full" 
            src="https://dam-cdn.atl.orangelogic.com/AssetLink/2878633782yw0cnv532u77430xi7x15x.svg"
            />
        </div>

        
        <div className="w-[58%] text-center">
            <h1 className="text-[7vh] font-semibold leading-[7vh] mt-6">
                Help us shape 
                <span className="font-black text-[6.5vh] block">
                    the future of teamwork
                </span>
            </h1>

            <p className="text-zinc-700 w-[70%] mx-auto mt-5">
                At Atlassian, we believe the impossible is possible - together. Join us today to help us inspire teamwork anywhere and everywhere, worldwide.
            </p>

            <button className="hover:bg-zinc-100 hover:scale-105 duration-200 py-2 px-5 text-lg rounded-full border-2 border-black mt-6">
                Share your story
            </button>
        </div>
        <div className="w-20 h-20 ml-6 hover:scale-110 duration-300">
            <img 
            className="w-full h-full" 
            src="https://dam-cdn.atl.orangelogic.com/AssetLink/igdrq2i5082s2p672q63c4o8u055e714.svg"
            />
        </div>
        </div>
    );
}

export default Story;