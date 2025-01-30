import React from "react";
import Icons from "./icons/icons";

export default function Intro() {
  return (
    <div  className="min-h-screen w-full max-w-6xl px-16 py-20 flex flex-row flex-wrap items-center space-y-4 px-16 pt-12 sm:py-0 relative">
      <div className="flex flex-col items-start sm:w-2/3">
        <h2 className="text-2xl text-orange-50 font-semibold mb-2 mt-6">
          Hi, my name is
        </h2>
        <h1 className="text-5xl text-violet-700 font-bold">Lina Villalba.</h1>
        <p className="text-3xl text-orange-300 font-semibold">
          A passionate developer.
        </p>
        <p className="text-xl text-gray-200 text-left font-light">
          Focused on creating interactive and accessible interfaces that provide
          a smooth and engaging user experience. My goal is to transform ideas
          into high-impact web products, always prioritizing usability and
          design.
        </p>
      </div>
      <div className="flex flex-col items-center sm:w-1/3">
        <Icons />
      </div>
    </div>
  );
}
