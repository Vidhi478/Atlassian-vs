
import React, { useState } from "react";

function Oneteam() {
  const [val] = useState([
    {icon:"ri-arrow-up-double-line", Name:"Jira", heading:"Dream it, plan it, launch it", onepara:"The #1 tool for agile teams is now for all teams. Plan, track, and deliver your biggest ideas together.", button:"Explore Jira", image:"https://dam-cdn.atl.orangelogic.com/AssetLink/215050ci4w203s0mrd76eb2kf0o73rd6.svg", twopara:"Lumen used Jira to Record, share,reduce cycle time and increase throughput by 200%", span:"Read their story"},
    {icon:"ri-contract-up-down-line", Name:"Confluence", heading:"Scale your knowledge", onepara:"Connect and consolidate scattered docs and disconnected teammates in one, central source of truth.", button:"Explore Confluence", image:"https://dam-cdn.atl.orangelogic.com/AssetLink/rjf5v331x88ie27f5200d1n0e8g84md5.svg", twopara:"Dream to uses Confluence Cloud to create a more open, collaborative way of starting", span:"Read their story"},
    {icon:"ri-funds-box-fill", Name:"Jira Service Management", heading:"Deliver service faster", onepara:"Connect Dev and Ops teams on a single platform with customizable features and AI-powered agents.", button:"Explore Jira Service Management", image:"https://dam-cdn.atl.orangelogic.com/AssetLink/2naan5oor44502o5522ph50clc3ejk8b.svg", twopara:"Teams at Domino’s use AI to boost individual and team productivity", span:"See their story"},
    {icon:"ri-settings-5-fill", Name:"Loom", heading:"Record, share, collaborate", onepara:"Easily record and share AI-powered video messages to reach a broader audience.", button:"Explore Loom", image:"https://dam-cdn.atl.orangelogic.com/AssetLink/215050ci4w203s0mrd76eb2kf0o73rd6.svg", twopara:"Loom boosted async communication efficiency", span:"Read more"},
    {icon:"ri-refresh-fill", Name:"Jira Product Discovery", heading:"Ideate faster than ever", onepara:"Capture and prioritize ideas and align everyone in one single Jira platform.", button:"Explore Jira Product Discovery", image:"https://dam-cdn.atl.orangelogic.com/AssetLink/30ur058vt123kkh4mp68ivv6qopl0bd3.svg", twopara:"Discovery to translate workflow easily", span:"Read their story"}
  ]);

  return (
    <div className="px-4 md:px-10 py-4">
      {val.map((item, i) => (
        <div key={i} className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <div className=" bg-blue-600 text-white px-2 py-1 rounded-md text-lg">
              <i className={item.icon}></i>
            </div>
            <h3 className="text-xl font-medium">{item.Name}</h3>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold">{item.heading}</h1>
          <p className="mt-3 text-base md:w-[70%]">{item.onepara}</p>

          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full">
            Get it free
          </button>
          <button className="ml-4 text-blue-700 hover:drop-shadow-lg  font-medium">
            {item.button} →
          </button>

          <div className="mt-6 border p-4 rounded-xl flex gap-4 mr-7">
            <img src={item.image} className="w-16 h-16 rounded-full" />
            <p className="text-md mt-5 mb-5">
              {item.twopara} <span className="text-blue-600 underline hover:text-blue-800">{item.span}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Oneteam;