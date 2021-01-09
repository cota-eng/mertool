import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const PetDetail: React.FC = () => {
  const [pet, setPet] = useState<string>("none");
    const [isOthers, setIsOthers] = useState<boolean>(false);
    const [otherContent,setOtherContent] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPet(event.target.value);
  };
  useEffect(() => {
    if (pet === "others") {
      setIsOthers(true);
    } else {
      setIsOthers(false);
    }
  }, [pet]);
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">ペットを飼っていますか？</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={pet}
          onChange={handleChange}
        >
          <FormControlLabel value="none" control={<Radio />} label="なし" />
          <FormControlLabel value="dog" control={<Radio />} label="犬" />
          <FormControlLabel value="cat" control={<Radio />} label="猫" />
          <FormControlLabel value="others" control={<Radio />} label="その他" />
          {isOthers ? <input type="text"></input> : ""}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default PetDetail;
