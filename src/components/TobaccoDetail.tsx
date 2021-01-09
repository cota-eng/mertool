import React,{useState} from 'react'
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const TobaccoDetail:React.FC = () => {
    const [tobacco, setTobacco] = useState<string>("no");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTobacco(event.target.value);
    };
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">タバコを吸っていますか？</FormLabel>
          <RadioGroup
            aria-label="gender"
            value={tobacco}
            onChange={handleChange}
          >
            <FormControlLabel value="no" control={<Radio />} label="いいえ" />
            <FormControlLabel value="yes" control={<Radio />} label="はい" />
          </RadioGroup>
        </FormControl>
      </div>
    );
}

export default TobaccoDetail
