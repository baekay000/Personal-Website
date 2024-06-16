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

function Experiences() {
  const plugins = [
    new Arrow(),
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false }),
    new Fade(),
    new Perspective({ rotate: 0.5, scale: 2 }),
  ];

  return (
    <>
      <div className="border border-pink-100 bg-pink-100/5 rounded-3xl px-6 py-4 mr-1 my-8">
        <div className="text-zinc-300 text-3xl text-left">Experiences</div>
        <p className="text-zinc-300 mt-4 pl-3">
          {"["}For more words... check{" "}
          <button className="text-slate-400">LinkedIn</button>
          {"]"}
        </p>
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
            {/* 4 */}

            <div className="panel bg-blue-400 w-full flex basis-3/4 rounded-3xl flex-col text-center">
              <img
                className="self-center w-1/2 p-10"
                src="/IP_logo.svg"
                alt="International Paper logo"
              />
              <div className="text-zinc-300/85 underline decoration-pink-100/50 underline-offset-8 text-3xl">
                Identity & Access Management IT Developer Intern
              </div>
              <p className="text-slate-400 pt-8 text-m-text">In Progress</p>
            </div>

            {/* 3 */}

            <div className="panel bg-blue-400 w-full flex basis-3/4 rounded-3xl flex-col text-center">
              <img
                className="self-center basis-1/3 m-10"
                src="/ORNL_logo.svg"
                alt="Oak Ridge National Laboratory logo"
              />
              <div className="text-zinc-300/85 underline decoration-pink-100/50 underline-offset-8 text-3xl">
                URSI Computer Vision Intern
              </div>

              <div className="flex justify-center gap-12 flex-wrap p-10">
                <img className="w-12 h-auto" src="/python.png" alt="" />
                <img className="w-18 h-12" src="/yolo.png" alt="" />
              </div>
            </div>

            {/* 2 */}

            <div className="panel bg-blue-400 w-full flex basis-3/4 rounded-3xl flex-col text-center">
              <img
                className="self-center basis-1/3 m-10"
                src="/ORNL_logo.svg"
                alt="Oak Ridge National Laboratory logo"
              />
              <div className="text-zinc-300/85 underline decoration-pink-100/50 underline-offset-8 text-3xl">
                ECO Full-Stack Web Development Intern
              </div>

              <div className="flex justify-center gap-12 flex-wrap p-10">
                <img className="w-12 h-auto" src="/html-5.png" alt="" />
                <img className="w-12 h-auto" src="/css-3.png" alt="" />
                <img className="w-12 h-auto" src="/typescript.png" alt="" />
                <img className="w-12 h-auto" src="/postgresql.png" alt="" />
                <img className="w-12 h-auto" src="/leaflet.png" alt="" />
                <img className="w-12 h-auto" src="/angular.png" alt="" />
                <img className="w-12 h-auto" src="/php.png" alt="" />
              </div>
            </div>

            {/* 1 */}

            <div className="panel bg-blue-400 w-full flex basis-3/4 rounded-3xl flex-col text-center">
              <img
                className="self-center w-1/2 p-10"
                src="/ORNL_logo.svg"
                alt="Oak Ridge National Laboratory logo"
              />
              <div className="text-zinc-300/85 underline decoration-pink-100/50 underline-offset-8 text-3xl">
                SULI Data Analytics Intern
              </div>

              <div className="flex justify-center gap-12 flex-wrap p-10">
                <img className="w-12 h-auto" src="/python.png" alt="" />
                <img className="w-12 h-auto" src="/geopandas.svg" alt="" />
                <img className="w-12 h-auto" src="/api.png" alt="" />
                <img className="w-12 h-auto" src="/arcgis.png" alt="" />
              </div>
            </div>

            <ViewportSlot>
              <span className="flicking-arrow-prev is-thin basis-1/12"></span>
              <span className="flicking-arrow-next is-thin basis-1/12"></span>
            </ViewportSlot>
          </Flicking>
        </div>
      </div>
    </>
  );
}

export default Experiences;
