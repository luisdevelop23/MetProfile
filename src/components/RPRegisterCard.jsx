import React, { useEffect, useState } from "react";
import icontrueRegister from "../assets/icons/happy-circle.svg";
import loading from "../assets/icons/loadingCard.svg";
import iconerrorRegister from "../assets/icons/sad-circle.svg";
import iconX from "../assets/icons/x.svg";
const RPRegisterCard = ({RegisterCardShow,RegisterValue,ErrorRegisterText,UserData}) => {
  const [registerState, setRegisterState] = useState(0); //? 0 = loading, 1 = true, 2 = false

  function StatusShow(){
    document.body.style.overflow = "auto";
    setRegisterState(0)
    RegisterCardShow(false);
  }
  useEffect(() => {
    if(RegisterValue === 1){
      setRegisterState(1)
    }else if(RegisterValue === 2){
      setRegisterState(2)
    }
  }, [RegisterValue])
  
  const falseRegister = () => (
    <div className="absolute mx-auto mt-[80px] w-11/12 rounded-lg bg-white py-2 md:w-8/12 lg:w-3/12">
      <div className="w-12/12 flex flex-col items-center justify-center">
        <div className="flex justify-center py-4">
          <img src={iconerrorRegister} className="w-28" alt="" />
        </div>
        <h2 className="nnf-regular py-7 text-center text-[21px] text-gray-700">
          Ocurrio un error
        </h2>
        <p className="nnf-light text-center">Intentalo de nuevo</p>
        <p className="nnf-light text-center">{ErrorRegisterText}</p>
        <button
        onClick={StatusShow}
        className="nnf-bold my-6 rounded-lg bg-red-400 px-5 py-2 uppercase text-gray-700 transition duration-300 hover:bg-red-500">
          Cerrar
        </button>
      </div>
    </div>
  );

  const trueRegister = () => (
    <div className="absolute mx-auto mt-[80px] w-11/12 rounded-lg bg-white py-2 md:w-8/12 lg:w-3/12">
      <button
      onClick={StatusShow}
      className="absolute right-3 top-3">
        <img src={iconX} className="w-8 rounded-full" alt="Loading" />
      </button>
      <div className="w-12/12 flex flex-col mt-10">
      <h2 className="nnf-regular text-[18px] text-center text-gray-700">
            Felicitaciones tu perfil ha sido registrado
          </h2>
        <div className="w-12/12 flex justify-center py-3">
          <img src={icontrueRegister} className="w-28" alt="Loading" />
        </div>
        <div className="flex flex-col px-4">

          <h2 className="nnf-regular text-left text-[18px] text-gray-700">
            Nombre Usuario: {UserData.UserName}
          </h2>
          {/* <h2 className="nnf-regular text-left text-[18px] text-gray-700">
            llave:{"clave"}
          </h2> */}
          <div className="py-3">
            <a className="nnf-bold my-6 rounded-lg py-2 uppercase text-gray-700 underline decoration-solid">
              Ver Mi Perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const loadingRegister = () => (
    <div className="absolute mx-auto mt-[80px] w-11/12 rounded-lg bg-white py-2 md:w-8/12 lg:w-3/12">
      <div className="w-12/12 flex flex-col">
        <div className="w-12/12 py-3">
          <h2 className="nnf-regular py-3 text-center text-[21px] text-gray-700">
            Registrando tu perfil
          </h2>
        </div>
        <div className="flex items-center justify-center py-12">
          <img src={loading} className="w-20 animate-spin" alt="Loading" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="absolute flex h-[200vh] w-full justify-center bg-black bg-opacity-50">
      {registerState === 0 && loadingRegister()}
      {registerState === 1 && trueRegister()}
      {registerState === 2 && falseRegister()}
    </div>
  );
};

export default RPRegisterCard;
