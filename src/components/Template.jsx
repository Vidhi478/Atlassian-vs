import React from "react";
import Card from "./Card";

function Template() {
  return (
    <div className="w-full mt-12 px-4 mb-40">
      <h6 className="text-center text-sm text-zinc-700 uppercase">
        Get started with a template
      </h6>

      <div className="mt-8">
        <Card />
      </div>
    </div>
  );
}

export default Template;