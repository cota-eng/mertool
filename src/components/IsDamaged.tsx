import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
interface IsDamagedProps {
  setIsDamagedText: (text: string) => void;
}
const IsDamaged: React.FC<IsDamagedProps> = (props) => {
  const [value, setValue] = useState<string>("ほぼない");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    switch (value) {
      case "no":
        props.setIsDamagedText("本に傷はほとんどありません。\n\n");
        break;
      case "little":
        props.setIsDamagedText("本にかすり傷あります。\n\n");
        break;
      case "large":
        props.setIsDamagedText(
          "本にかなり傷がありますのでご注意ください。\n\n"
        );
        break;
      case "check":
        props.setIsDamagedText(
          "本の傷については、お手数ですが写真をご確認ください。\n\n"
        );
        break;
    }
  }, [value]);
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <p>Q3:本に傷はありますか？</p>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="ほぼない"
              />
              <FormControlLabel
                value="little"
                control={<Radio />}
                label="かすり傷"
              />
              <FormControlLabel
                value="large"
                control={<Radio />}
                label="目立つ傷"
              />
              <FormControlLabel
                value="check"
                control={<Radio />}
                label="写真を確認"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default IsDamaged;
