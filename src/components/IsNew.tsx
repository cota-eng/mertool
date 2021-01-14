import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface IsNewProps {
  setIsNewText: (text: string) => void;
}
const IsNew: React.FC<IsNewProps> = (props) => {
  const handleIsNew = () => {
    setIsNew(!isNew);
  };
  const [isNew, setIsNew] = useState<boolean>(true);
  const isNewText: string = isNew
    ? "新品で購入した本です。\n\n"
    : "新品で購入したものではありません。\n\n";
  useEffect(() => {
    props.setIsNewText(isNewText);
  }, [isNewText, props]);
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <span>Q2:新品で購入したものですか？</span>

          {isNew ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleIsNew}
              size="small"
            >
              YES
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleIsNew}
              size="small"
            >
              NO
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default IsNew;
