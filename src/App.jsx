import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App w-10/12 mx-auto bg-fd border-2">
        <Header/>
        <Info/>
        <Footer/>
    </div>
  );
}

export default App;
