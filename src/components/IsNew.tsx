import React, { useState } from "react";
import { Button } from "@material-ui/core";
const IsNew: React.FC = () => {
  const handleIsNew = () => {
    setIsNew(!isNew);
  };
  const [isNew, setIsNew] = useState<boolean>(true);

  return (
    <div>
      <p>新刊購入したものですか？</p>
      {isNew ? (
        <Button variant="contained" color="primary" onClick={handleIsNew}>
          YES
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handleIsNew}>
          NO
        </Button>
      )}
    </div>
  );
};

export default IsNew;
