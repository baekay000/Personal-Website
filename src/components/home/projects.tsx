"use client";
import React from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Arrow, AutoPlay, Fade, Perspective } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import Link from "next/link";

function Projects() {
  const plugins = [
    new Arrow(),
    new AutoPlay({ duration: 3500, direction: "NEXT", stopOnHover: false }),
    new Fade(),
    new Perspective({ rotate: 0.5, scale: 2 }),
  ];

  return (
    <>
      <div className="border border-pink-100 bg-pink-100/5 rounded-3xl px-6 py-4 mr-1 my-8">
        <div className="text-zinc-300 text-3xl text-left">
          Featured Projects
        </div>
        <div className="mx-3 my-8 rounded-3xl">
          <Flicking
            className="text-zinc-300 place-self-center mt-7 p-10 text-2xl flex"
            plugins={plugins}
            align="center"
            circular={false}
            onMoveEnd={(e) => {
              console.log(e);
            }}
          >
            {/* 3 */}

            <div className="panel bg-blue-400 w-full flex basis-3/4 rounded-3xl flex-col text-center">
              <div className="p-10 text-3xl">Personal Website</div>
              <div className="flex justify-center">
                <a
                  style={{ display: "table-cell" }}
                  href="https://github.com/baekay000/Personal-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center w-1/2 text-slate-400 transition hover:duration-700"
                >
                  <img
                    className="rounded-3xl mb-8 shadow-2xl border-solid transition-transform border-2 border-pink-100/70 hover:scale-105"
                    src="/my_website.png"
                    alt=""
                  />
                </a>
              </div>

              <p className="text-mtext">
                Designed, developed, and deployed <br />a reactive personal
                website from scratch.
              </p>
              <p className="text-mtext mb-10">
                If you like it,{" "}
                <Link
                  href="mailto:kbae1@vols.utk.edu"
                  className="text-slate-400 hover:text-pink-100"
                >
                  let me know
                </Link>
                .
              </p>
            </div>

            {/* 2 */}

            <div className="panel bg-blue-400 w-full flex basis-3/4 rounded-3xl flex-col text-center">
              <div className="p-10 text-3xl">Mission of Hope</div>
              <div className="flex justify-center">
                <a
                  style={{ display: "table-cell" }}
                  href="https://github.com/hack4impact-utk/mission-of-hope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center w-1/2 text-slate-400 transition hover:duration-700"
                >
                  <img
                    className="rounded-3xl mb-8 shadow-2xl border-solid transition-transform border-2 border-pink-100/70 hover:scale-105"
                    src="/mission_of_hope_logo.png"
                    alt=""
                  />
                </a>
              </div>

              <p className="text-mtext mx-10">
                Worked with a team of 7 other developers <br />
                to create an inventory system for a{" "}
                <a
                  style={{ display: "inline-block", textAlign: "center" }}
                  href="https://missionofhope.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center text-slate-400"
                >
                  nonprofit donation center
                </a>{" "}
                <br />
                providing direct aid to 13,000+ children and families in rural
                Appalachia.
              </p>
            </div>

            {/* 1 */}

            <div className="panel bg-blue-400 w-full flex basis-3/4 rounded-3xl flex-col text-center">
              <div className="p-10 text-3xl">ParkUTK</div>
              <div className="flex justify-center">
                <a
                  style={{ display: "table-cell" }}
                  href="https://github.com/Tennessee-Trio/ParkUTK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center w-1/3 text-slate-400 transition hover:duration-700"
                >
                  <img
                    className="rounded-3xl mb-8 shadow-2xl border-solid transition-transform border-2 border-pink-100/70 hover:scale-105"
                    src="/parkutk.png"
                    alt=""
                  />
                </a>
              </div>

              <p className="text-mtext mx-10 pb-10">
                Collaborated with 2 other developers at the{" "}
                <a
                  style={{ display: "inline-block", textAlign: "center" }}
                  href="https://devpost.com/software/parkutk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center text-slate-400"
                >
                  2023 SASEhack
                </a>{" "}
                <br />
                to develop a real-time, crowd-sourced parking availability
                application
                <br />
                for 6 parking garages containing the majority of the 19,883 UTK
                campus parking spaces.{" "}
              </p>
            </div>

            <ViewportSlot>
              <span className="flicking-arrow-prev is-thin basis-1/12"></span>
              <span className="flicking-arrow-next is-thin basis-1/12"></span>
            </ViewportSlot>
          </Flicking>
          <p className="text-zinc-300 mt-4 pl-3 flex flex-row justify-center">
            {"["}To see code, click the images.{"]"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
