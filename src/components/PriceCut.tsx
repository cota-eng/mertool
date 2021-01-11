import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const PriceCut: React.FC = () => {
  const [isPriceCut, setIsPriceCut] = useState<boolean>(false);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setIsPriceCut(event.target.value);
//   };
  return (
    <div>
      <h2>値下げ交渉</h2>
      <FormControl component="fieldset">
        <FormLabel component="legend">PriceCut</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={isPriceCut}
        //   onChange={handleChange}
        >
          <FormControlLabel value="false" control={<Radio />} label="NG" />
          <FormControlLabel value="true" control={<Radio />} label="OK" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default PriceCut;
