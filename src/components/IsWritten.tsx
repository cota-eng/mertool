import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Checkbox } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface IsWrittenProps {
  setIsWrittenText: (text: string) => void;
  setIsWrittenToolText: (text: string) => void;
}
const IsWritten: React.FC<IsWrittenProps> = (props) => {
  const [value, setValue] = useState("no");
  const [isPencil, setIsPencil] = useState<boolean>(false);
  const [isBallPoint, setIsBallPoint] = useState<boolean>(false);
  const [isMarker, setIsMarker] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const allFalseHandler = () => {
    setIsPencil(false);
    setIsBallPoint(false);
    setIsMarker(false);
  };
  useEffect(() => {
    if (isPencil && !isBallPoint && !isMarker) {
      props.setIsWrittenToolText("鉛筆で書き込まれています。\n\n");
    } else if (!isPencil && isBallPoint && !isMarker) {
      props.setIsWrittenToolText("ボールペンで書き込まれています。\n\n");
    } else if (!isPencil && !isBallPoint && isMarker) {
      props.setIsWrittenToolText("マーカーで書き込まれています。\n\n");
    } else if (isPencil && isBallPoint && !isMarker) {
      props.setIsWrittenToolText("鉛筆やボールペンで書き込まれています。\n\n");
    } else if (!isPencil && isBallPoint && isMarker) {
      props.setIsWrittenToolText(
        "ボールペンやマーカーで書き込まれています。\n\n"
      );
    } else if (isPencil && !isBallPoint && isMarker) {
      props.setIsWrittenToolText("鉛筆やマーカーで書き込まれています。\n\n");
    } else if (isPencil && isBallPoint && isMarker) {
      props.setIsWrittenToolText(
        "鉛筆やボールペン、マーカーで書き込まれています。"
      );
    }
  }, [props, isPencil, isBallPoint, isMarker]);
  useEffect(() => {
    switch (value) {
      case "no":
        props.setIsWrittenText("書き込みは全くありません。\n\n");
        allFalseHandler();
        break;
      case "little":
        props.setIsWrittenText("書き込みは数ページあります。\n\n");
        break;
      case "many":
        props.setIsWrittenText("書き込みは数十ページあります。\n\n");
        break;
      case "somany":
        props.setIsWrittenText("書き込みはかなりあります。\n\n");
        break;
    }
  }, [value, props]);
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <p>Q4:書き込みはありますか？</p>
          <FormControl component="fieldset">
            <RadioGroup value={value} onChange={handleChange}>
              <FormControlLabel value="no" control={<Radio />} label="ない" />
              <FormControlLabel
                value="little"
                control={<Radio />}
                label="数ページ"
              />
              <FormControlLabel
                value="many"
                control={<Radio />}
                label="数十ページ"
              />
              <FormControlLabel
                value="somany"
                control={<Radio />}
                label="かなり"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <p>なにで書き込んでいますか？</p>
        <Grid item>
          <Checkbox
            checked={isPencil}
            name="pencil"
            onChange={() => setIsPencil(!isPencil)}
            disabled={value === "no"}
          />
          <span>鉛筆</span>
          <Checkbox
            checked={isBallPoint}
            name="ballpoint"
            onChange={() => setIsBallPoint(!isBallPoint)}
            disabled={value === "no"}
          />
          <span>ボールペン</span>
          <Checkbox
            checked={isMarker}
            name="marker"
            onChange={() => setIsMarker(!isMarker)}
            disabled={value === "no"}
          />
          <span>蛍光ペン</span>
        </Grid>
      </Grid>
    </div>
  );
};

export default IsWritten;
