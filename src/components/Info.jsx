import React from "react";
import cvico from "../assets/icons/cv-gr.svg";
import infico from "../assets/icons/inf-gr.svg";
import panelico from "../assets/icons/panel-gr.svg";
import perico from "../assets/icons/pers-gr.svg";
import userico from "../assets/icons/user-gr.svg";
const Info = () => {
  return (
    <div className="sm:px-10 bg-fd lg:pt-24">
      <h1 className="text-3xl nnf-extra-bold prc text-center">
        Por que Crear tu perfil Profesional
      </h1>
      <p className="text-lg nnf-semi-bold text-center">
        Crea y personaliza tu perfil profesional, conecta con oportunidades y
        expande tu red de contactos de manera efectiva y profesional.
      </p>
      {/*Incio de los cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8 px-10 bg-fd-2 py-4">
        <div className=" p-4 flex flex-col bg-white rounded-3xl border-4 border-[#3ecf8e] logo duration-700">
          <h2 className="text-center nnf-regular">
            Accesibilidad y Actualización
          </h2>
          <img src={cvico} className="h-[120px]  sm:[120px] lg:h-[200px] mx-auto" alt="" />
          <p className="text-left py-2 nnf-light">
            Un CV digital es fácil de compartir y actualizar en tiempo real.
            Olvídate de versiones obsoletas y asegúrate de que siempre estés
            presentando tu experiencia más reciente.
          </p>
          <button className="gb-prc nnf-bold uppercase py-2 rounded-lg ease-linear duration-700">
            Informacion
          </button>
        </div>

        <div className=" p-4 flex flex-col bg-white rounded-3xl border-4 border-[#3ecf8e] logo duration-700">
          <h2 className="text-center nnf-regular">Red de Contactos</h2>
          <img src={panelico} className="h-[120px]  sm:[120px] lg:h-[200px] mx-auto" alt="" />
          <p className="text-left py-2 nnf-light">
            Un CV profesional en línea facilita la conexión con colegas,
            reclutadores y oportunidades laborales. Aprovecha las plataformas
            digitales para expandir tu red de contactos y abrir puertas a nuevas
            oportunidades.
          </p>
          <button className="gb-prc nnf-bold uppercase py-2 rounded-lg ease-linear duration-700">
            Informacion
          </button>
        </div>

        <div className=" p-4 flex flex-col bg-white rounded-3xl border-4 border-[#3ecf8e] logo duration-700 justify-center">
          <h2 className="text-center nnf-regular">Profesionalismo</h2>
          <img src={perico} className="h-[120px]  sm:[120px] lg:h-[200px] mx-auto" alt="" />
          <p className="text-left py-2 nnf-light">
            Un CV virtual bien diseñado refleja tu profesionalismo y atención al
            detalle. Destaca tus habilidades y logros de manera clara y
            atractiva, impresionando a empleadores y clientes potenciales.
          </p>
          <button className="gb-prc nnf-bold uppercase py-2 rounded-lg ease-linear duration-700">
            Informacion
          </button>
        </div>

        <div className=" p-4 flex flex-col bg-white rounded-3xl border-4 border-[#3ecf8e] logo duration-700 justify-center">
          <h2 className="text-center nnf-regular">Identidad Digital</h2>
          <img src={userico} className="h-[120px]  sm:[120px] lg:h-[200px] mx-auto" alt="" />
          <p className="text-left py-2 nnf-light">
            Tu CV virtual es una extensión de tu identidad profesional en línea.
            Construye una marca personal sólida que te diferencie y te haga
            memorable en el mercado laboral.
          </p>
          <button className="gb-prc nnf-bold uppercase py-2 rounded-lg ease-linear duration-700">
            Informacion
          </button>
        </div>
      </div>

      {/* Fin de los cards */}

      {/*aun no se que como llamarlo xd */}
      <div className="flex flex-col items-center md:flex-row w-full mx-auto mt-20 md:py-10 bg-fd-2">
        <div className="w-full md:w-1/2 flex flex-col md:gap-4 justify-center md:px-4">
          <h1 className="md:text-2xl lg:text-3xl text-center md:text-left nnf-extra-bold prc">
            Crea tu CV Profesional con MetProfile
          </h1>
          <p className="md:text-left text-[10px] md:text-[13px] lg:text-[16px] justify-normal pt-2 px-5 nnf-semi-bold">
            En MetProfile, te ayudamos a crear un CV profesional que destaque tu
            experiencia y habilidades. Nuestra plataforma te ofrece herramientas
            intuitivas para diseñar y personalizar tu perfil, asegurando que tu
            identidad profesional se refleje de manera clara y atractiva. Con
            MetProfile, tu CV siempre estará accesible y actualizado,
            facilitando la conexión con empleadores y oportunidades laborales.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:flex justify-center ">
          <img src={infico} className="mx-auto lg:h-[340px] h-[150px] md:h-[250px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
