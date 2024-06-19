"use client";

import React from "react";
import Link from "next/link";
import useDownloader from "react-use-downloader";
import Image from "next/image";

const Header = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "http://localhost:3000/Feb_2024_Kaylee_Resume.pdf";
  const filename = "Kaylee_Bae_Resume.pdf";

  return (

    <header className="fixed top-0 w-full z-50 bg-blue-400 shadow-md opacity-90">
      <div className="flex justify-between text-xl">
        <div className="text-zinc-300 flex-auto p-5 m-2">
          <Link href="/#about">About</Link>
        </div>

        <div className="flex items-center">
          <div className="text-zinc-300 flex-auto p-5 m-2 max-sm:hidden">
            <Link href="/#experience">Experience</Link>
          </div>

          <div className="text-zinc-300 flex-auto p-5 m-2 max-sm:hidden">
            <Link href="/#projects">Projects</Link>
          </div>
          <button
            className="text-blue-400 box-border h-2 rounded-full flex-auto bg-pink-100 ml-3 mr-7 my-2 p-5 m-2 flex items-center"
            onClick={() => download(fileUrl, filename)}
          >
            <img src="/download.png" title="download icons"className="h-4 w-4 mr-3" alt="" />
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
