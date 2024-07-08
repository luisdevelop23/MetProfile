import React from "react";
import iconUser from "../assets/icons/user.svg";
const ALLUsersCards = ({user}) => {
  console.log("user", user);
  const {UserName,apellidoMaterno,apellidPaterno,email,fecha_nacimiento,primerNombre,segundoNombre,telefono} = user ;
  return (
    <div className="flex items-center justify-center">
      <div className="my-4 flex w-9/12 rounded-lg border-2 bg-white p-6">
        <div className="w-full">
          <div className="flex">
            <div className="w-2/12">
              <img src={iconUser} className="w-20" alt="" />
            </div>
            <div className="ml-4 flex w-10/12 flex-col">
              <h2 className="text-lg font-bold">{primerNombre}{" "} {segundoNombre} {" "} {apellidPaterno} {" "} {apellidoMaterno}</h2>
              <div className="flex gap-2">
                <p className="text-gray-600 bg-slate-200 px-2 rounded-lg jus">+ Skill</p>
                <p className="text-gray-600 bg-slate-200 px-2 rounded-lg jus">+ Skill</p>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                vel, aliquam eveniet sapiente nostrum expedita
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ALLUsersCards;
