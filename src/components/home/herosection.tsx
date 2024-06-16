"use client";

import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  function scrollToElement() {
    const targetElement = document.getElementById("welcomeSection");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="flex flex-row my-40 border-gray-400">
        <div className="basis-1/2">
          <img
            className="grow rounded-full justify-left w-2/3"
            src="/intropic.jpg"
            alt="Picture of Kaylee"
          />
        </div>
        <div className="basis-1/2 place-self-center">
          <div className="flex flex-col">
            <h1 className="text-pink-100 place-self-center text-5xl lg:text-8xl font-extrabold">
              I'm Kaylee.
            </h1>
            <TypeAnimation
              className="text-zinc-300 place-self-center flex-wrap mt-7 text-2xl"
              sequence={[
                "Honors CS undergraduate",
                2000,
                "Dean's List student",
                2000,
                "NAE Grand Challenges Scholar",
                2000,
                "Heath Integrated Business and Engineering Program Cohort Member",
                2000,
              ]}
              wrapper="span"
              speed={55}
              style={{ display: "inline-block" }}
              repeat={1}
            />
            <div className="place-self-center">
              <Link href="/home">
                <button className="text-blue-400 px-6 py-4 rounded-full bg-slate-400 mr-6 my-8 hover:bg-pink-100">
                  Say hello!
                </button>
              </Link>

              <Link href="/home">
                <button className="text-slate-400 px-4 py-4 rounded-full bg-transparent hover:bg-pink-100 border">
                  Learn more about me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Fade cascade delay={1500}>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={scrollToElement}
          >
            <img src="/Vector.svg" alt="" />
          </button>
        </div>

        <div
          className="text-zinc-300 text-base flex justify-center pb-3 my-3"
          id="welcomeSection"
        >
          Welcome! Please explore below!
        </div>
      </Fade>
    </>
  );
};

export default HeroSection;
