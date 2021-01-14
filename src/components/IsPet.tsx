import React, { useState, useEffect } from "react";
import { TextField, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  hideText: {
    opacity: 0.5,
  },
});
interface IsPetProps {
  setIsPetText: (text: string) => void;
}
const IsPet: React.FC<IsPetProps> = (props) => {
  const [isPet, setIsPet] = useState<boolean>(true);
  const [isDog, setIsDog] = useState<boolean>(false);
  const [isCat, setIsCat] = useState<boolean>(false);
  const [isOthers, setIsOthers] = useState<boolean>(false);
  const [otherPet, setOtherPet] = useState<string>("");
  const classes = useStyles();
  useEffect(() => {
    if (!isDog && !isCat && !isOthers) {
      props.setIsPetText("ペットは飼っていません。\n\n");
    } else if (!isPet && isDog && !isCat && !isOthers) {
      props.setIsPetText("犬を飼っています。\n\n");
    } else if (!isPet && !isDog && isCat && !isOthers) {
      props.setIsPetText("猫を飼っています。\n\n");
    } else if (!isPet && !isDog && !isCat && isOthers) {
      props.setIsPetText(`${otherPet}を飼っています。\n\n`);
    } else if (!isPet && isDog && isCat && !isOthers) {
      props.setIsPetText("犬と猫を飼っています。\n\n");
    } else if (!isPet && isDog && !isCat && isOthers) {
      props.setIsPetText(`犬と${otherPet}を飼っています。\n\n`);
    } else if (!isPet && !isDog && isCat && isOthers) {
      props.setIsPetText(`猫と${otherPet}を飼っています。\n\n`);
    } else if (!isPet && isDog && isCat && isOthers) {
      props.setIsPetText(`犬と猫と${otherPet}を飼っています。\n\n`);
    }
  }, [isPet, isDog, isCat, otherPet, isOthers, props]);
  useEffect(() => {
    if (isPet === true) {
      setIsDog(false);
      setIsCat(false);
      setIsOthers(false);
    } else if (isDog === true || isCat === true || isOthers === true) {
      setIsPet(false);
    }
    // else if (isDog === false && isCat === false && isOthers === false) {
    //   setIsPet(true);
    // }
  }, [isPet, isDog, isCat, isOthers]);

  const otherPetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOtherPet(e.target.value);
  };

  return (
    <div>
      <p>Q5:部屋の中でペットを飼っていますか？</p>
      <Checkbox
        checked={isPet}
        name="nothing"
        onChange={() => setIsPet(!isPet)}
      />
      <span>いいえ</span>
      <Checkbox
        checked={isDog}
        name="dog"
        onChange={() => setIsDog(!isDog)}
        disabled={isPet}
      />
      <span className={isPet ? classes.hideText : ""}>犬</span>
      <Checkbox
        checked={isCat}
        name="cat"
        onChange={() => setIsCat(!isCat)}
        disabled={isPet}
      />
      <span className={isPet ? classes.hideText : ""}>猫</span>
      <Checkbox
        name="others"
        checked={isOthers}
        onChange={() => setIsOthers(!isOthers)}
        disabled={isPet}
      />
      <span className={isPet ? classes.hideText : ""}>その他</span>
      <br />
      <TextField
        id="outlined-basic"
        label="Animal"
        variant="outlined"
        value={otherPet}
        onChange={otherPetHandler}
        disabled={!isOthers}
      />
    </div>
  );
};
export default IsPet;
