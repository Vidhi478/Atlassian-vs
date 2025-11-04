

import React from "react"; 
function Last(){
     return ( 
     <div className="bg-zinc-100 w-[90%] ml-[5%] mb-10 rounded-t-2xl overflow-hidden p-6 mt-80 md:mt-20 md:py-20"> 
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
       
        <div> <div className="w-16 h-16 mb-6">
             <img className="w-full h-full rounded-full" src="https://imgs.search.brave.com/wjAchlliIYz5uYwh_6GrA4Wxeft3AMSsPfl0Q5fyxPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk2L2Vi/Lzk5Lzk2ZWI5OTJh/OGE1ZTFlNTU2M2Ji/MWQ5MjBjNGEwZGQy/LmpwZw"/> 
             </div>
              <h1 className="font-bold mt-2 text-sm hover:underline">Company</h1> 
              <p className="text-sm mt-2 hover:underline">Careers</p> 
              <p className="text-sm mt-2 hover:underline">Events</p>
               <p className="text-sm mt-2 hover:underline">Blogs</p>
                <p className="text-sm mt-2 hover:underline">Investor Relations</p> 
                <p className="text-sm mt-2 hover:underline">Atlassian Foundation</p>
                 <p className="text-sm mt-2 hover:underline">Press kit</p>
                  <p className="text-sm mt-2 hover:underline">Contact us</p> 
                  </div>

           <div>
                <h1 className="font-bold underline">Products</h1>
                <p className="text-sm mt-4 hover:underline">Rovo</p>
                <p className="text-sm mt-2 hover:underline">Jira</p>
                <p className="text-sm mt-2 hover:underline">Jira Align</p>
                <p className="text-sm mt-2 hover:underline">Jira Service Management</p>
                <p className="text-sm mt-2 hover:underline">Confluence</p>
                <p className="text-sm mt-2 hover:underline">Loom</p>
                <p className="text-sm mt-2 hover:underline">Trello</p>
                <p className="text-sm mt-2 hover:underline">Bitbucket</p>
                <p className="text-sm text-blue-800 mt-4 hover:font-bold duration-75 hover:underline">See all products →</p>
           </div>

           <div>
                 <h1 className="font-bold underline">Resources</h1>
                <p className="text-sm mt-4 hover:underline">Technical support</p>
                <p className="text-sm mt-2 hover:underline">Purchasing & licensing</p>
                  <p className="text-sm mt-2 hover:underline">Atlassian Community</p>
                  <p className="text-sm mt-2 hover:underline">Knowledge base</p>
                <p className="text-sm mt-2 hover:underline">Marketplace</p>
                  <p className="text-sm mt-2 hover:underline">My account</p>
                <p className="text-sm text-blue-800 mt-4 hover:font-bold duration-75 hover:underline">Create support ticket →</p>
           </div>

           <div>
                <h1 className="font-bold underline">Learn</h1>
                <p className="text-sm mt-4 hover:underline">Partners</p>
                 <p className="text-sm mt-2 hover:underline">Training & certification</p>
                 <p className="text-sm mt-2 hover:underline">Documentation</p>
            <p className="text-sm mt-2 hover:underline">Developer resources</p>
                 <p className="text-sm mt-2 hover:underline">Enterprise services</p>
                <p className="text-sm text-blue-800 mt-4 hover:font-bold duration-75 hover:underline">See all resources →</p>
           </div>
       </div>
    </div>
)

} export default Last;