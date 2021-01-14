import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface IsTabaccoProps {
  setIsTabaccoText: (text: string) => void;
}
const IsTobacco: React.FC<IsTabaccoProps> = (props) => {
  const [isTobacco, setIsTobacco] = useState<boolean>(false);
  const handleIsTobacco = () => {
    setIsTobacco(!isTobacco);
  };
  const tabaccoText = isTobacco
    ? "タバコの匂いにご注意ください。\n\n"
    : "タバコは吸っておりませんのでご安心ください。\n\n";
  useEffect(() => {
    props.setIsTabaccoText(tabaccoText);
  });
  return (
    <div>
      <p>
        Q6タバコを吸ってる人はいますか？
        <br />
        （同居人含む）
      </p>
      {isTobacco ? (
        <Button variant="contained" color="primary" onClick={handleIsTobacco}>
          YES
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handleIsTobacco}>
          NO
        </Button>
      )}
    </div>
  );
};

export default IsTobacco;
