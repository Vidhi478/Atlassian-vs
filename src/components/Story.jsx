import React from "react";

function Story(){
    return (
        <div className="w-full flex flex-col items-center justify-center mt-20 mb-10 relative 
                        sm:mt-24 sm:mb-20
                        md:flex-row md:h-[90vh]">

           
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 md:mr-8 hover:scale-110 duration-300
                            -mt-10 md:-mt-40 mb-6 md:mb-0">
                <img 
                    className="w-full h-full" 
                    src="https://dam-cdn.atl.orangelogic.com/AssetLink/2878633782yw0cnv532u77430xi7x15x.svg"
                    alt=""
                />
            </div>

          
            <div className="text-center px-4 sm:w-[80%] md:w-[58%]">
                <h1 className="font-semibold leading-tight
                               text-[4vh] sm:text-[5vh] md:text-[7vh]">
                    Help us shape 
                    <span className="font-black block
                                     text-[3.8vh] sm:text-[4.5vh] md:text-[6.5vh]">
                        the future of teamwork
                    </span>
                </h1>

                <p className="text-zinc-700 mx-auto mt-4
                              text-sm sm:text-base md:text-lg
                              w-[90%] sm:w-[75%] md:w-[70%]">
                    At Atlassian, we believe the impossible is possible — together. 
                    Join us today to help us inspire teamwork anywhere and everywhere, worldwide.
                </p>

                <button className="hover:bg-zinc-100 hover:scale-105 duration-200 
                                   py-2 px-5 sm:px-7 text-sm sm:text-lg 
                                   rounded-full border-2 border-black mt-6">
                    Share your story
                </button>
            </div>

           
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 md:ml-8 hover:scale-110 duration-300 mt-6 md:mt-0">
                <img 
                    className="w-full h-full" 
                    src="https://dam-cdn.atl.orangelogic.com/AssetLink/igdrq2i5082s2p672q63c4o8u055e714.svg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Story;
