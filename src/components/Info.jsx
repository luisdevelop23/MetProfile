import React from "react";
import cvico from "../assets/icons/cv-gr.svg";
import panelico from "../assets/icons/panel-gr.svg";
import perico from "../assets/icons/pers-gr.svg";
import userico from "../assets/icons/user-gr.svg";

const Info = () => {
  return (
    <div className="px-10 bg-fd mt-8">
      <h1 className="text-3xl nnf-extra-bold prc text-center">
        Aprender a Crea tu perfil profesional
      </h1>
      <p className="text-lg nnf-semi-bold text-center">
        Crea y personaliza tu perfil profesional, conecta con oportunidades y
        expande tu red de contactos de manera efectiva y profesional.
      </p>

      <div className="flex justify-center mt-8 gap-10">
        <div className="w-1/4 p-4 flex flex-col bg-white rounded-3xl border-4 border-[#3ecf8e] logo duration-700">
          <h2 className="text-center nnf-regular">Accesibilidad y Actualización</h2>
          <img src={cvico} className="h-[200px]" alt="" />
          <p className="text-center pt-2 nnf-light">
            Un CV digital es fácil de compartir y actualizar en tiempo real.
            Olvídate de versiones obsoletas y asegúrate de que siempre estés
            presentando tu experiencia más reciente.
          </p>
          <button className='gb-prc nnf-bold uppercase py-2 rounded-lg ease-linear duration-700'>
                INFORMAR
            </button>
        </div>
        <div className="w-1/4 p-4">
          <h2 className="text-center nnf-regular">Red de Contactos</h2>
          <img src={panelico} className="h-[200px]" alt="" />
          <p className="text-center">
            Un CV profesional en línea facilita la conexión con colegas,
            reclutadores y oportunidades laborales. Aprovecha las plataformas
            digitales para expandir tu red de contactos y abrir puertas a nuevas
            oportunidades.
          </p>
          
        </div>
        <div className="w-1/4 p-4">
          <h2 className="text-center nnf-regular">Profesionalismo</h2>
          <img src={perico} className="h-[200px]" alt="" />
          <p>
            Un CV virtual bien diseñado refleja tu profesionalismo y atención al
            detalle. Destaca tus habilidades y logros de manera clara y
            atractiva, impresionando a empleadores y clientes potenciales.
          </p>
        </div>
        <div className="w-1/4 p-4">
          <h2 className="text-center nnf-regular">Identidad Digital</h2>
          <img src={userico} className="h-[200px]" alt="" />
          <p>
            Tu CV virtual es una extensión de tu identidad profesional en línea.
            Construye una marca personal sólida que te diferencie y te haga
            memorable en el mercado laboral.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
