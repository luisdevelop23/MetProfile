import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 mt-10">
      <div className="container mx-auto px-10">
        <div className="flex justify-between">
          <div className="w-1/3">
            <h2 className="text-lg font-bold mb-4">Sobre MetProfile</h2>
            <p className="text-sm">
              MetProfile es una plataforma dedicada a ayudar a profesionales a
              crear, mantener y destacar su perfil profesional en línea.
              Conéctate con oportunidades y amplía tu red de contactos con
              facilidad.
            </p>
          </div>
          <div className="w-1/3">
            <h2 className="text-lg font-bold mb-4">Enlaces Útiles</h2>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Sobre Nosotros
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contacto
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <h2 className="text-lg font-bold mb-4">Síguenos</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-..." />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c-5.51 0-9.837..." />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.994 4.569c-0.885 0.392..." />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          <p>&copy; 2024 MetProfile. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
