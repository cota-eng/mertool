import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { TextField, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  hideText: {
    opacity: 0.5,
  },
});
interface IsPetProps {
  PetText: string;
}
const IsPet: React.FC<IsPetProps> = (props) => {
  const [isPet, setIsPet] = useState<boolean>(true);
  const [isDog, setIsDog] = useState<boolean>(false);
  const [isCat, setIsCat] = useState<boolean>(false);
  const [isOthers, setIsOthers] = useState<boolean>(false);
  const [otherPet, setOtherPet] = useState<string>("");
  const [petText, setPetText] = useState<string>("No");

  const classes = useStyles();
  //   const OtherPetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     e.preventDefault();
  //   };
  useEffect(() => {
    if (isPet === true) {
      setIsDog(false);
      setIsCat(false);
      setIsOthers(false);
    } else if (isDog === true || isCat === true || isOthers === true) {
      setIsPet(false);
    }
  }, [isPet, isDog, isCat, isOthers]);
  useEffect(() => {}, [isPet, isDog, isCat, isOthers]);
  return (
    <div>
      <p>部屋の中でペットを飼っていますか？</p>

      <Checkbox
        checked={isPet}
        name="nothing"
        onChange={() => setIsPet(!isPet)}
      />
      <a className={!isPet ? classes.hideText : ""}>なし　</a>
      <Checkbox
        checked={isDog}
        name="dog"
        onChange={() => setIsDog(!isDog)}
        disabled={isPet}
      />
      <a className={isPet ? classes.hideText : ""}>犬　　</a>
      <Checkbox
        checked={isCat}
        name="cat"
        onChange={() => setIsCat(!isCat)}
        disabled={isPet}
      />
      <a className={isPet ? classes.hideText : ""}>猫　　</a>
      <Checkbox
        name="others"
        checked={isOthers}
        onChange={() => setIsOthers(!isOthers)}
        disabled={isPet}
      />
      <a className={isPet ? classes.hideText : ""}>その他　　</a>
      <br />
      {isOthers ? (
        <TextField
          id="outlined-basic"
          label="Animal"
          variant="outlined"
          value={otherPet}
          onChange={(e) => {
            setOtherPet(e.target.value);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default IsPet;
