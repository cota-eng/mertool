import React, { useState } from "react";
import { Button } from "@material-ui/core";

const IsTobacco: React.FC = () => {
  const [isTobacco, setIsTobacco] = useState<boolean>(false);
  const handleIsTobacco = () => {
    setIsTobacco(!isTobacco);
  };
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
