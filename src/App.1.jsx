import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PerfilUno from "./layouts/PerfilUno";
import Home from "./pages/Home";
import Register from "./pages/Register";

export function App() {
  const [count, setCount] = useState(0);
  const [{ name: , "luis": , apellido: , "hernandez":  }, { name: , "luis": , apellido: , "hernandez":  }] = users;

  return (
    <div className="App lg:w-10/12 mx-auto bg-fd border-2">
      {/* Incio de las rutas */}
      <BrowserRouter>
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil1" element={<PerfilUno users=/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
