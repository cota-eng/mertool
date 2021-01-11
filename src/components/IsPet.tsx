import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {
  TextField,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

const IsPet: React.FC = () => {
  const [isPet, setIsPet] = useState<boolean>(true);
  const [isDog, setIsDog] = useState<boolean>(false);
  const [isCat, setIsCat] = useState<boolean>(false);
  const [isOthers, setIsOthers] = useState<boolean>(false);
  const [otherPet, setOtherPet] = useState<string>("");
  //   const PethandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setIsPet(event.target.value);
  //   };
  const OtherPetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (isPet === true) {
      setIsDog(false);
      setIsCat(false);
      setIsOthers(false);
    } else if (isDog === true || isCat === true || isOthers === true) {
      setIsPet(false);
    }
  }, [isPet, isDog, isCat, isOthers]);
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">ペットを飼っていますか？</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isPet}
                name="nothing"
                onChange={() => setIsPet(!isPet)}
              />
            }
            label="なし"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isDog}
                name="dog"
                onChange={() => setIsDog(!isDog)}
              />
            }
            label="犬"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isCat}
                name="cat"
                onChange={() => setIsCat(!isCat)}
              />
            }
            label="猫"
          />
          <FormControlLabel
            control={
              <Checkbox name="others" onChange={() => setIsDog(!isOthers)} />
            }
            label="その他"
          />
          {isOthers ? (
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          ) : (
            ""
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
};
export default IsPet;
