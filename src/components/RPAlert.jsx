import React from "react";
import icoAlert from "../assets/icons/alert.svg";
const RPAlert = ({ TextAlert, showAlert }) => {
  function falseAlerta() {
    document.body.style.overflow = "auto";

    showAlert();
  }
  return (
    <div className="absolute flex h-[200vh] w-full justify-center bg-black bg-opacity-50">
      <div className="absolute mx-auto mt-[80px] w-11/12 rounded-lg bg-yellow-200 py-2 md:w-8/12 lg:w-5/12">
        <div className="w-12/12 flex">
          <div className="flex w-2/12 items-center justify-center">
            <img src={icoAlert} alt="" className="w-10" />
          </div>
          <div className="w-10/12">
            <h2 className="nnf-regular text-[17px] text-yellow-700">
              Ocurrio un error
            </h2>
            <p className="nnf-light mr-5 text-yellow-600">{TextAlert}</p>
          </div>
        </div>
        <div className="w-12/12 flex justify-end">
          <button
            onClick={falseAlerta}
            className="nnf-bold right-0 mr-6 rounded-lg bg-yellow-400 px-4 py-2 uppercase text-gray-600 transition duration-300 hover:bg-yellow-500"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default RPAlert;
