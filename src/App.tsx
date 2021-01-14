import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import IsPet from "./components/IsPet";
import IsTobacco from "./components/IsTobacco";
import PriceCut from "./components/PriceCut";
import { Button, TextField } from "@material-ui/core";
import IsNew from "./components/IsNew";
import IsDamaged from "./components/IsDamaged";
import IsWritten from "./components/IsWritten";

const App: React.FC = () => {
  const overallTextRef = useRef<HTMLInputElement>(null);
  const [isPetText, setIsPetText] = useState<string>("");
  const [isNewText, setIsNewText] = useState<string>("");
  const [isTabaccoText, setIsTabaccoText] = useState<string>("");
  const [isDamagedText, setIsDamagedText] = useState<string>("");
  const [isWrittenText, setIsWrittenText] = useState<string>("");
  const [priceCutText, setPriceCutText] = useState<string>("");
  const [overallText, setOverallText] = useState<string>("");
  const copyToClipboard = () => {
    overallTextRef.current!.select();
    document.execCommand("copy");
  };
  useEffect(() => {
    copyToClipboard();
  }, []);
  const clickedCreateText = () => {
    setOverallText(
      priceCutText +
        isNewText +
        isPetText +
        isTabaccoText +
        isDamagedText +
        isWrittenText
    );
  };
  //   useEffect(
  //     () => {
  //     },
  //     [
  // priceCutText,
  // isPetText,
  // isNewText,
  // isTabaccoText,
  // isDamagedText,
  // isWrittenText,
  //     ]
  //   );
  return (
    <div className="App">
      <IsPet setIsPetText={setIsPetText} />
      <IsTobacco setIsTabaccoText={setIsTabaccoText} />
      <IsDamaged setIsDamagedText={setIsDamagedText} />
      <IsWritten setIsWrittenText={setIsWrittenText} />
      <PriceCut setPriceCutText={setPriceCutText} />
      <IsNew setIsNewText={setIsNewText} />
      <TextField
        multiline={true}
        variant="outlined"
        margin="normal"
        value={overallText}
        inputRef={overallTextRef}
        placeholder={"生成ボタンを押してください。"}
      />
      <br />
      <Button onClick={clickedCreateText}>生成</Button>
      <Button onClick={copyToClipboard}>COPY</Button>
    </div>
  );
};
export default App;
