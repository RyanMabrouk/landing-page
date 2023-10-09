import React from "react";
//import { useForm } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
//import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";


import side_img from "../../assets/Form/dev.svg";

export default function Form() {
  return (
    <div className="form_container" id="form_container">
      <div className="form">
        <div>
          <h1>Subscribe Now !</h1>
          <h2>and Join a remarkable adventure with us</h2>
        </div>
        <FormControl className="form_body">
          <TextField className="name" label="Name:" variant="filled" />
          <TextField className="lastname" label="Last Name:" variant="filled" />
          <TextField className="email" label="Mail:" variant="filled" />
          <TextField
            className="number"
            label="Phone Number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            variant="filled"
          />
          <div className="options">
            <div className="radio_group">
              <RadioGroup
                row
                aria-labelledby="options"
                name="radio_group"
                checkedIcon={<span className="checkedIcon" />}
              >
                <FormControlLabel
                  value="ONLINE"
                  control={<Radio />}
                  label="ONLINE"
                />
                <FormControlLabel
                  value="ON SITE"
                  control={<Radio />}
                  label="ON SITE"
                />
              </RadioGroup>
            </div>
            <button>Subscribe</button>
          </div>
        </FormControl>
      </div>
      <img src={side_img} alt="" />
    </div>
  );
}
