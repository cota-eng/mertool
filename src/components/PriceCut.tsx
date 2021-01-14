import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface PriceCutProps {
  setPriceCutText: (text: string) => void;
}
const PriceCut: React.FC<PriceCutProps> = (props) => {
  const [isPriceCut, setIsPriceCut] = useState<boolean>(false);
  const priceCutText = isPriceCut
    ? "値下げ交渉OKです。\n\n"
    : "値下げ交渉NGです。\n\n";
  const handlePriceCut = () => {
    setIsPriceCut(!isPriceCut);
  };
  useEffect(() => {
    props.setPriceCutText(priceCutText);
  }, [props]);
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <span>Q1:値下げ交渉をうけつけますか？</span>
          {isPriceCut ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handlePriceCut}
              size="small"
            >
              OK
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePriceCut}
              size="small"
            >
              NG
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default PriceCut;
