import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="w-[227px] h-[54px] text-slate-400 text-[25px] font-normal font-['Poppins']">
        Kaylee Bae
      </div>

      <div className="left-[970px] top-[2378px] absolute justify-start items-start gap-20 inline-flex">
        <div className="text-stone-300 text-[25px] font-normal font-['Inter']">
          email
        </div>
        <div className="text-stone-300 text-[25px] font-normal font-['Inter']">
          linkedin
        </div>
        <div className="text-stone-300 text-[25px] font-normal font-['Inter']">
          github
        </div>
      </div>
    </footer>
  );
};

export default Footer;
