import React, { useState, useEffect } from "react";
import "./App.css";
import IsPet from "./components/IsPet";
import IsTobacco from "./components/IsTobacco";
import PriceCut from "./components/PriceCut";
import { Button, TextField } from "@material-ui/core";
import IsNew from "./components/IsNew";
import IsDamaged from "./components/IsDamaged";

import IsWritten from "./components/IsWritten";
const App: React.FC = () => {
  const [isPetText, setIsPetText] = useState<string>("");
  const [isNewText, setIsNewText] = useState<string>("");
  const [isTabaccoText, setIsTabaccoText] = useState<string>("");
  const [priceCutText, setPriceCutText] = useState<string>("");
  const [overallText, setOverallText] = useState<string>("");
  useEffect(() => {
    setOverallText(priceCutText + isNewText + isPetText + isTabaccoText);
  }, [priceCutText, isPetText, isNewText, isTabaccoText]);
  return (
    <div className="App">
      <IsPet setIsPetText={setIsPetText} />
      <IsTobacco setIsTabaccoText={setIsTabaccoText} />
      <PriceCut setPriceCutText={setPriceCutText} />
      <IsNew setIsNewText={setIsNewText} />
      <IsDamaged />
      <IsWritten />
      <TextField
        multiline={true}
        variant="outlined"
        margin="normal"
        rows={10}
        value={overallText}
      />
      <Button>CREATE</Button>
    </div>
  );
};

export default App;
