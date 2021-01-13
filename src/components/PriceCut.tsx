import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@material-ui/core";
const PriceCut: React.FC = () => {
  const [isPriceCut, setIsPriceCut] = useState<boolean>(false);
  const handlePriceCut = () => {
    setIsPriceCut(!isPriceCut);
  };
  return (
    <div>
      <p>値下げ交渉</p>
      {isPriceCut ? (
        <Button variant="contained" color="primary" onClick={handlePriceCut}>
          OK
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handlePriceCut}>
          NG
        </Button>
      )}
      {/* <FormControl component="fieldset">
        <FormLabel component="legend">PriceCut</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={isPriceCut}
          //   onChange={handleChange}
        >
          <FormControlLabel 
          value={isPriceCut} 
          control={<Radio />} 
                      label="NG"
                  />
          <FormControlLabel
            value={!isPriceCut}
            control={<Radio />}
            label="OK"
            onClick={() => setIsPriceCut(!isPriceCut)}
          />
        </RadioGroup>
      </FormControl> */}
    </div>
  );
};

export default PriceCut;
