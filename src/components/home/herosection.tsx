"use client";

import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  function scrollToElement() {
    const targetElement = document.getElementById('welcomeSection');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // // Smooth Scroll To : copied from ChatGPT on 3/28/24
  // function smoothScrollTo(target: string, duration: number) {
  //   const targetElement = document.querySelector(target);
  //   const targetPosition =
  //     targetElement.getBoundingClientRect().top + window.pageYOffset;
  //   const startPosition = window.pageYOffset;
  //   const distance = targetPosition - startPosition;
  //   let startTime: number | null = null;

  //   function animation(currentTime: number) {
  //     if (startTime === null) startTime = currentTime;
  //     const timeElapsed = currentTime - startTime;
  //     const ease = easeInOutQuad(
  //       timeElapsed,
  //       startPosition,
  //       distance,
  //       duration
  //     );
  //     window.scrollTo(0, ease);
  //     if (timeElapsed < duration) requestAnimationFrame(animation);
  //   }

  //   function easeInOutQuad(t: number, b: number, c: number, d: number) {
  //     t /= d / 2;
  //     if (t < 1) return (c / 2) * t * t + b;
  //     t--;
  //     return (-c / 2) * (t * (t - 2) - 1) + b;
  //   }

  //   requestAnimationFrame(animation);
  // }


  return (
    <div>
      <img 
              className = "rounded-full justify-center flex w-80"
              src="/intropic.jpg"
              alt="Picture of Kaylee"
            />
      
      <div className="text-slate-400">something spaces ehre</div>
      <h1 className="text-slate-400 mb-4 text-4xl lg:text-6xl font-extrabold">
        I'm Kaylee.
      </h1>

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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={scrollToElement}>
        <img src="/Vector.svg" alt="" />
      </button>
      
        
      {/* </button> */}
      </div>

      <div className="text-slate-400" id="welcomeSection">
        HEELLLLLLOOO
      </div>
    </div>
  );
};

export default HeroSection;
