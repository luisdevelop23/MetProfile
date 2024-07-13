import React from "react";
import iconSkills from "../assets/icons/skills.svg";
const UPSkills = ({ data }) => {
  return (
    <>
      <h1 className="br-title group flex cursor-pointer flex-col text-3xl font-semibold">
        <span className="flex gap-1">
          Habilidades <img src={iconSkills} className="" alt="" />
        </span>
        <span className="relative -bottom-1 h-1.5 w-1/12 rounded-full bg-[#3ecf8e] transition-all group-hover:w-2/12"></span>
      </h1>
      <div className="flex justify-center py-8">
        <div className="grid w-11/12 grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4">
          {data.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-start items-center  rounded-lg border-2 bg-white px-3 py-3 transition-all duration-200 hover:scale-105"
            >
              <h3 className="col-span-1 text-left text-lg nnf-bold">
                {skill.habilidad}
              </h3>
              {/* <h3 className="col-span-1 text-right text-lg">{skill.nivel}/10</h3> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UPSkills;
