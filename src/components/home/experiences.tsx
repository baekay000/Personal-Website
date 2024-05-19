"use client";
import React from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import {
  Arrow,
  AutoPlay,
  Fade,
  Pagination,
  Perspective,
} from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/pagination.css";

// import "@egjs/flicking-plugins/dist/pagination.css";

function Experiences() {
  const plugins = [
    new Arrow(),
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true }),
    new Fade(),
    new Perspective({ rotate: 0.5, scale: 3 }),
  ];

  return (
    <>
      <div className="border border-zinc-300 rounded-3xl">
        <div className="text-slate-400 px-6 py-4 text-2xl text-left">
          Experiences
        </div>
        <div className="text-zinc-300 py-20 min-h-screen flex-col container">
          <Flicking
            plugins={plugins}
            align="center"
            circular={false}
            onMoveEnd={(e) => {
              console.log(e);
            }}
          >
            <div className="text-slate-400 text-2xl px-6 py-4 rounded-3xl bg-zinc-300 my-10 hover:bg-orange-400 hover:text-slate-950 flex min-h-screen flex-col container">
              <div className="flex-col container border border-spacing-2 borde">
                URSI Computer Vision Internship
                <p className="text-sm mr-1 my-1 overflow-y-auto max-h-24 sm:max-h-32 md:max-h-40 lg:max-h-full">
                  Oak Ridge National Laboratory
                </p>
                <p className="flex text-sm mr-1 my-2 overflow-y-auto sm:max-h-32 md:max-h-40 lg:max-h-full">
                  Worked with YOLO, a CNN deep learning model for object
                  detection, to create a workflow that would
                </p>
              </div>
            </div>
            {/* test message */}
            {/* <div className="text-slate-400 text-2xl px-6 py-4 rounded-3xl bg-zinc-300 mr-1 my-4 hover:bg-orange-400 hover:text-slate-950">
              <div className="">
                URSI Computer Vision Internship
                <p className="text-sm mr-3 my-2 overflow-y-auto max-h-24 sm:max-h-32 md:max-h-40">
                  Oak Ridge National Laboratory
                </p>
                <p className="flex text-sm mr-3 my-2 overflow-y-auto max-h-24 sm:max-h-32 md:max-h-40">
                  Worked with YOLO, a CNN deep learning model for object
                  detection, to create a workflow that would
                </p>
              </div>
            </div> */}
            {/* <div className="text-slate-400 text-2xl px-6 py-4 rounded-3xl bg-zinc-300 mr-1 my-8 hover:bg-orange-400 hover:text-slate-950">
              <div>
                Experiences
                <div className="text-sm mr-3 my-6 overflow-y-auto max-h-80">
                  2
                </div>
              </div>
            </div>
            <div className="text-slate-400 text-2xl px-6 py-4 rounded-3xl bg-zinc-300 mr-1 my-8 hover:bg-orange-400 hover:text-slate-950">
              <div>
                Experiences
                <div className="text-sm mr-3 my-6 overflow-y-auto max-h-80">
                  3
                </div>
              </div>
            </div> */}
            {/* <div className="text-slate-400 text-2xl px-6 py-4 rounded-3xl bg-zinc-300 mr-1 my-8 hover:bg-orange-400 hover:text-slate-950">
              <div className="overflow-y-auto max-h-80 sm:max-w-5 md:max-w-30">
                Experiences
                <div className="text-sm mr-3 my-6">
                Worked with YOLO, a CNN deep learning model for object
                  detection, to create a workflow that would
                </div>
              </div>
            </div> */}

            <ViewportSlot>
              <span className="flicking-arrow-prev is-thin"></span>
              <span className="flicking-arrow-next is-thin"></span>
            </ViewportSlot>
          </Flicking>
        </div>
      </div>
    </>
  );
}

export default Experiences;
