import React from "react";
import Navbar from "./components/Navbar";
import Getstarted from "./components/GetStarted";
import Teamwork from "./components/Teamwork";
import Onlyimg from "./components/Onlyimg";
import Moon from "./components/Moon";
import Empower from "./components/Empower";
import Template from "./components/Template";
import Customer from "./components/Customer";
import Story from "./components/Story";
import Blue from "./components/Blue";
import Last from "./components/Last";
import Footer from "./components/Footer";

function App(){
    return(
        <div>
             <Navbar/>
             <Getstarted/>
             <Teamwork/>
             <Onlyimg/>
             <Moon/>
             <Empower/>
             <Template/>
             <Customer/>
             <Story/>
             <Blue/>
             <Last/>
             <Footer/>
            </div>
    )
}
export default App;