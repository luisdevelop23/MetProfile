import React from "react";
import PNRDatosEstuiantiles from "../components/PNRDatosEstuiantiles";
import PNRDatosPersonales from "../components/PNRDatosPersonales";
import PNRHabilidades from "../components/PNRHabilidades";
const CreateAccount = () => {
  return (
    <div className="h-[100vh] w-full bg-[#eeeeee]">
      <div className="mx-auto w-10/12">
        <h1 className="nnf-bold prc py-10 text-4xl">Registrate</h1>
        <div className="mx-auto grid w-11/12 grid-cols-2 gap-y-4 gap-x-16 border-4 px-20 bg-white p-10 pb-8 pt-6">
          <PNRDatosPersonales />
          <PNRDatosEstuiantiles/>
          <PNRHabilidades />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
