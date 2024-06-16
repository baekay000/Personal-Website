"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

// Todo:
// Add the circling functionality from alan

function AboutMe() {
  return (
    <div>
      <div className="text-slate-400 text-2xl px-6 py-4 rounded-3xl bg-blue-400 mr-1 my-8 hover:bg-blue-400 hover:text-slate-400">
        <Fade triggerOnce={false}>
          <span className="text-zinc-300 text-3xl">About</span>
        </Fade>

        <div className="mr-3 my-8 text-mtext p-3 flex flex-col space-y-4">
          <Fade cascade fraction={0.2} duration={6000} damping={0.35}>
            <p>
              Hello! I am a <span className="text-pink-100/80">third-year</span>{" "}
              undergraduate student studying computer science at
              <span className="text-pink-100/80"> UT Knoxville</span>.
            </p>
            <p className="mt-3">
              My passion is{" "}
              <span className="text-pink-100/80">creating value </span> and{" "}
              <span className="text-pink-100/80">solving problems </span>{" "}
              through developing{" "}
              <span className="text-pink-100/80">user-centered</span> products.
            </p>
            <p className="mt-3">
              I aspire to be a{" "}
              <span className="text-pink-100/80">software engineer</span> that
              creates meaningful, innovative products.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
