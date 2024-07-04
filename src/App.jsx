import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./pages/All";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      {/* Incio de las rutas */}
      <BrowserRouter>
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/all" element={<All />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
