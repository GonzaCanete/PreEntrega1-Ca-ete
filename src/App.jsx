import { useState } from "react";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/ItemList/ItemListContainer";
import HomeContainer from "./components/pages/home/HomeContainer"
import "./index.css"

function App() {
  const [nombre, setNombre] = useState("Gonzalo")
  const saludo = "Bienvido a Game Shop!"
  return (
    <div>
      <Navbar />
      <HomeContainer  nombre={ nombre } />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
