
import React from "react"; 
function Footer(){ 
    return( 
    <div className="w-full h-auto py-5 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-zinc-800 gap-4 md:gap-0 px-5 md:px-20 mb-10"> 
    <h1>Copyright © 2025 Atlassian</h1>
     <div className="flex flex-wrap gap-4 md:gap-8 md:justify-between w-full md:w-[50%] lg:w-[50%]"> 
        <h1 className="hover:underline hover:text-zinc-600 cursor-pointer">Privacy policy</h1> 
        <h1 className="hover:underline hover:text-zinc-600 cursor-pointer">Terms</h1> 
        <h1 className="hover:underline hover:text-zinc-600 cursor-pointer">Impressum</h1> 
        <h1 className="hover:underline hover:text-zinc-600 cursor-pointer">Language selector</h1> 
        <h1 className="hover:underline hover:text-zinc-600 cursor-pointer flex items-center gap-1"><i class="ri-global-line"></i> English ▾</h1> 
        </div> 
        </div>
         ) } 
         export default Footer;