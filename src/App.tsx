import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import IsPet from "./components/IsPet";
import TobaccoDetail from "./components/IsTobacco";
import PriceCut from "./components/PriceCut";
import { Button } from "@material-ui/core";
import IsNew from "./components/IsNew";
const App: React.FC = () => {
  const [petText, setPetText] = useState<string>("aaa");
  return (
    <div className="App">
      <IsPet PetText={petText} />
      <TobaccoDetail />
      <PriceCut />
      <IsNew />
      <Button>CREATE</Button>
    </div>
  );
};

export default App;
