import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-blue-400 shadow-md opacity-80">
      <div className="flex justify-between text-xl">
        <div className="text-zinc-300 flex-auto p-5 m-2">
          <Link href="mailto:kbae1@vols.utk.edu">Email</Link>
        </div>

        <div className="flex">
          <div className="text-zinc-300 flex-auto p-5 m-2">
            <button>
              <a
                style={{ display: "table-cell" }}
                href="https://github.com/baekay000"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>

          <div className="text-zinc-300 flex-auto p-5 m-2">
            <button>
              <a
                style={{ display: "table-cell" }}
                href="https://www.linkedin.com/in/kaylee-bae/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
