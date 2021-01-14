import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import IsPet from "./components/IsPet";
import IsTobacco from "./components/IsTobacco";
import PriceCut from "./components/PriceCut";
import { Button, TextField } from "@material-ui/core";
import IsNew from "./components/IsNew";
import IsDamaged from "./components/IsDamaged";
import IsWritten from "./components/IsWritten";
import ButtonAppBar from "./components/ButtonAppBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
const App: React.FC = () => {
  const overallTextRef = useRef<HTMLInputElement>(null);
  const [isPetText, setIsPetText] = useState<string>("");
  const [isNewText, setIsNewText] = useState<string>("");
  const [isTabaccoText, setIsTabaccoText] = useState<string>("");
  const [isDamagedText, setIsDamagedText] = useState<string>("");
  const [isWrittenText, setIsWrittenText] = useState<string>("");
  const [isWrittenToolText, setIsWrittenToolText] = useState<string>("");
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
      "【値下げ交渉について】\n\n" +
        priceCutText +
        "【商品の状態について】\n\n" +
        isNewText +
        isDamagedText +
        isWrittenText +
        isWrittenToolText +
        "【アレルギーについて】\n\n" +
        isPetText +
        isTabaccoText
    );
  };
  //   useEffect(
  //     () => {
  //   setOverallText(
  //     priceCutText +
  //       isNewText +
  //       isPetText +
  //       isTabaccoText +
  //       isDamagedText +
  //       isWrittenText
  //   );
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
      <ButtonAppBar />
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <p>生成される文章は丁寧語です。ご安心ください。</p>
        <Grid item>
          <PriceCut setPriceCutText={setPriceCutText} />
        </Grid>
        <br />
        <Grid item>
          <IsNew setIsNewText={setIsNewText} />
        </Grid>
        <IsDamaged setIsDamagedText={setIsDamagedText} />
        <IsWritten
          setIsWrittenText={setIsWrittenText}
          setIsWrittenToolText={setIsWrittenToolText}
        />
        <IsPet setIsPetText={setIsPetText} />
        <IsTobacco setIsTabaccoText={setIsTabaccoText} />
        <br />
        <TextField
          multiline={true}
          variant="outlined"
          margin="normal"
          value={overallText}
          inputRef={overallTextRef}
          placeholder={"生成ボタンを押してください。"}
          fullWidth={true}
        />
        <Box component="span" m={1}>
          <Button
            variant="outlined"
            onClick={clickedCreateText}
            color="primary"
          >
            生成
          </Button>
        </Box>
        <br />
        <Button onClick={copyToClipboard}>COPY</Button>
        <Button>メルカリを開く</Button>
      </Grid>
    </div>
  );
};
export default App;
