import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App w-10/12 mx-auto ">
        <Header/>
        <Info/>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
