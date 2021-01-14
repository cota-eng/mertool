import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Checkbox } from "@material-ui/core";
interface IsWrittenProps {
  setIsWrittenText: (text: string) => void;
}
const IsWritten: React.FC<IsWrittenProps> = (props) => {
  const [value, setValue] = useState("no");
  const [isPencil, setIsPencil] = useState<boolean>(false);
  const [isBallPoint, setIsBallPoint] = useState<boolean>(false);
  const [isMarker, setIsMarker] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  //   let pens: string[] = [];
  //   useEffect(() => {
  //     if (isPencil) pens.push("鉛筆");
  //     if (isBallPoint) pens.push("ボールペン");
  //     if (isMarker) pens.push("蛍光ペン");
  //   }, [isPencil, isBallPoint, isMarker]);
  useEffect(() => {
    switch (value) {
      case "no":
        props.setIsWrittenText("書き込みは全くありません。\n\n");
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
      <p>書き込みの状況は？</p>
      <FormControl component="fieldset">
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="no" control={<Radio />} label="ない" />
          <FormControlLabel
            value="little"
            control={<Radio />}
            label="数ページだけある"
          />
          <FormControlLabel
            value="many"
            control={<Radio />}
            label="数十ページある"
          />
          <FormControlLabel
            value="somany"
            control={<Radio />}
            label="かなりある"
          />
        </RadioGroup>
      </FormControl>
      <div>
        <p>なにで書き込まれている？</p>
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
      </div>
    </div>
  );
};

export default IsWritten;
