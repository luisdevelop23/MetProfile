import React from "react";
import logo from "../assets/icons/logogreend.svg";
const ALLNavbar = () => {
  return (
    <div className="flex border-b-2 justify-center bg-white">
      <div className="pl-10 py-2 flex justify-center">
        <h1 className="flex text prc font-bold text-3xl justify-center gap-x-1">
          METPR
          <img src={logo} className="w-8" alt="" />
          FILE
        </h1>
      </div>
      <div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default ALLNavbar;
