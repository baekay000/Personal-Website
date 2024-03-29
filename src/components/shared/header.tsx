"use client";

import React from "react";
import Link from "next/link";
import useDownloader from "react-use-downloader";
import Image from "next/image";

// export default function Page() {
//   return <Link href="/dashboard">Dashboard</Link>
// }

const Header = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "http://localhost:3000/Feb_2024_Kaylee_Resume.pdf";
  const filename = "Kaylee_Bae_Resume.pdf";

  return (

//     <header className="fixed top-0 w-full bg-white shadow-md">
//   <div className="flex justify-between items-center px-4 py-2">
//     {/* Your header content here */}
//   </div>
// </header>

    <header className="fixed top-0 w-full bg-slate-400 shadow-md opacity-90">
       <div className="flex justify-between text-xl">
        <div className="text-zinc-300 flex-auto p-5 m-2">
          <Link href="/about">about</Link>
        </div>

        <div className="flex">
          <button
            className="text-zinc-300 flex-auto p-5 m-2"
            onClick={() => download(fileUrl, filename)}
          >
            resume
          </button>

          <div className="text-zinc-300 flex-auto p-5 m-2">
            <Link href="/experience">experience</Link>
          </div>

          <div className="text-zinc-300 flex-auto p-5 m-2">
            <Link href="/contactme">contact me</Link>
          </div>
        </div>
      </div>
    </header>

);
};

export default Header;
