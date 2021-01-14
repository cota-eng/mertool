import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
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
  }, [isPriceCut]);
  return (
    <div>
      <p>値下げ交渉をうけつけますか？</p>
      {isPriceCut ? (
        <Button variant="contained" color="primary" onClick={handlePriceCut}>
          OK
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handlePriceCut}>
          NG
        </Button>
      )}
    </div>
  );
};

export default PriceCut;
