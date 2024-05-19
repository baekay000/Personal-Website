"use client";

import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  function scrollToElement() {
    const targetElement = document.getElementById("welcomeSection");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="flex justify-between items-center my-40 m-15 border-gray-400 border-2">
        <div className="flex w-50">
          <img
            className="rounded-full justify-left"
            src="/intropic.jpg"
            alt="Picture of Kaylee"
          />
        </div>
        <h1 className="text-slate-400 text-4xl lg:text-6xl font-extrabold">
          I'm Kaylee.
        </h1>
      </div>
      <div className="text-slate-400 flex justify-end">
        something spaces ehre
      </div>

      <TypeAnimation
        className="text-slate-400"
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Honors CS undergraduate",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Oak Ridge National Laboratory intern",
          1000,
          "UT Knoxville sophomore",
          1000,
          "Deans List student",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "small", display: "inline-block" }}
        repeat={1} //Infinity
      />

      <div>
        {/* <Link className="text-slate-400" href={"/hi"}>Hi</Link> */}
        <Link href="/home">
          <button className="text-slate-400 px-6 py-4 rounded-full bg-zinc-300 mr-6 my-8 hover:bg-orange-400">
            Say hello
          </button>
        </Link>

        <Link href="/home">
          <button className="text-slate-400 px-4 py-4 rounded-full bg-transparent hover:bg-orange-400 border">
            Learn more about me.
          </button>
        </Link>
      </div>

      {/* <div className="flex justify-center items-end min-h-screen lg:min-h-screen-xl">
        
      </div> */}

      <div className="flex justify-center">
        {/* <button
        id="bouncingArrow"
        className="text-slate-400"
        // onClick={() => smoothScrollTo("#welcomeSection", 1000)}
        
      > */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={scrollToElement}
        >
          <img src="/Vector.svg" alt="" />
        </button>
      </div>

      <div className="text-zinc-300 flex justify-center" id="welcomeSection">
        Welcome to my personal portfolio.
      </div>
    </>
  );
};

export default HeroSection;
