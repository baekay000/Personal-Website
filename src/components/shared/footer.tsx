import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    // mt auto?
    <footer className="bottom-0 w-full bg-slate-400">
      <div className="flex justify-between text-xl">
        <div className="text-zinc-300 flex-auto p-5 m-2">
          <Link href="mailto:kbae1@vols.utk.edu">email</Link>
        </div>

        <div className="flex">
          <div className="text-zinc-300 flex-auto p-5 m-2">
          <a
              style={{ display: "table-cell" }}
              href="https://github.com/baekay000"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </div>

          <div className="text-zinc-300 flex-auto p-5 m-2">
            <a
              style={{ display: "table-cell" }}
              href="https://www.linkedin.com/in/kaylee-bae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
