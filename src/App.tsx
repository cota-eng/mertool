import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PetDetail from "./components/PetDetail";
import TobaccoDetail from "./components/TobaccoDetail";
import PriceCut from "./components/PriceCut";
const App: React.FC = () => {
  return (
    <div className="App">
      <PetDetail />
      <TobaccoDetail />
      <PriceCut />
    </div>
  );
};

export default App;
