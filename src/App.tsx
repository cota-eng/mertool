import React from "react";
import logo from "./logo.svg";
import "./App.css";
import IsPet from "./components/IsPet";
import TobaccoDetail from "./components/TobaccoDetail";
import PriceCut from "./components/PriceCut";
import { Button } from "@material-ui/core";
const App: React.FC = () => {
  return (
    <div className="App">
      <IsPet />
      <TobaccoDetail />
      <PriceCut />
    </div>
  );
};

export default App;
