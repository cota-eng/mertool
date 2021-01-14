import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
interface IsNewProps {
  setIsNewText: (text: string) => void;
}
const IsNew: React.FC<IsNewProps> = (props) => {
  const handleIsNew = () => {
    setIsNew(!isNew);
  };
  const [isNew, setIsNew] = useState<boolean>(true);
  const isNewText: string = isNew
    ? "新刊購入した本です。\n\n"
    : "新刊購入したものではありません。\n\n";
  useEffect(() => {
    props.setIsNewText(isNewText);
  }, [isNew]);
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
