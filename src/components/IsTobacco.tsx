import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
interface IsTabaccoProps {
  setIsTabaccoText: (text: string) => void;
}
const IsTobacco: React.FC<IsTabaccoProps> = (props) => {
  const [isTobacco, setIsTobacco] = useState<boolean>(false);
  const handleIsTobacco = () => {
    setIsTobacco(!isTobacco);
  };
  const tabaccoText = isTobacco
    ? "タバコの匂いにご注意ください。"
    : "タバコは吸っておりませんのでご安心ください。";
  useEffect(() => {
    props.setIsTabaccoText(tabaccoText);
  });
  return (
    <div>
      <p>同居人を含め、タバコを吸ってる人はいますか？</p>
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
