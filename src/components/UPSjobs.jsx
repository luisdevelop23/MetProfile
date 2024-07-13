import React from 'react';
import iconEnterPrise from "../assets/icons/enterprise.svg";

const UPSjobs = ({data}) => {
  // console.log("desde jobs",data)
  return (
    <>
        <h1 className="br-title group flex cursor-pointer flex-col text-3xl font-semibold">
            <span className="flex gap-1">
              Experiencia <img src={iconEnterPrise} className="" alt="" />
            </span>
            <span className="relative -bottom-1 h-1.5 w-1/12 rounded-full bg-[#3ecf8e] transition-all group-hover:w-2/12"></span>
          </h1>
          <div className="flex flex-col justify-center gap-y-6 p-8">
            {data.map((job) => (
              <div key={job.id} className="mx-auto w-11/12 gap-4">
                <h2 className="py-2 text-xl uppercase font-bold">{job.empresa}</h2>
                <div className="grid grid-cols-1 rounded-lg border-2 bg-white p-3 transition-all duration-200 hover:scale-105">
                  <div className="col-span-1 flex justify-between">
                    <h2 className="capitalize-text pl-3 text-xl text-gray-700">
                      {job.puesto}
                    </h2>
                    {
                      job.fecha_inicio!==null && job.fecha_fin!==null ?
                      <h3 className="text-gray-400">{job.fecha_inicio} a {job.fecha_fin}</h3>
                      :
                      <h3 className="text-gray-400">Trabajando</h3>
                    }
                    
                  </div>
                  {
                    job.descripcion!==null ?
                    <p className="col-span-1 mx-4 mt-3">
                      {job.descripcion}
                    </p>
                    :
                    <p className="col-span-1 mx-4 mt-3">
                      Sin descripción
                    </p>
                  }
                  
                </div>
              </div>
            ))}

          </div>
    </>
  )
}

export default UPSjobs