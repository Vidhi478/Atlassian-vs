import React from "react";

function Card() {
  const arr = [
    {
      Imag: "https://wac-cdn.atlassian.com/misc-assets/webp-images/designs-at-scale.svg",
      Name: "Scrum",
      Para: "Easily plan, track, and manage work across sprints",
    },
    {
      Imag: "https://wac-cdn.atlassian.com/misc-assets/webp-images/software-development.svg",
      Name: "Bug Tracking",
      Para: "Seamlessly report, track and prioritize bugs to address development issues",
    },
    {
      Imag: "https://wac-cdn.atlassian.com/misc-assets/webp-images/hr.svg",
      Name: "DevOps",
      Para: "Develop, deploy and manage applications with an open tools approach",
    },
  ];

  return (
    <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 lg:px-10">

      {arr.map((item, i) => (
        <div
          key={i}
          className="rounded-[15px] border border-zinc-300 shadow hover:shadow-xl duration-150 bg-white p-4 hover:border-black"
        >
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover" src={item.Imag} alt="" />
          </div>

          <h1 className="text-2xl font-bold mt-5">{item.Name}</h1>
          <p className="mt-3 text-[15px] text-zinc-700">{item.Para}</p>

          <h3 className="mt-10 text-blue-600 font-medium cursor-pointer">
            Try it out <i className="ri-arrow-right-long-line"></i>
          </h3>
        </div>
      ))}

    </div>
  );
}

export default Card;