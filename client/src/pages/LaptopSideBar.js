/*import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {LaptopsFunc} from "../pages/laptopResult"
import "../style/LaptopSide.css"

export const SelectLabels =()=> {
  const [sortType, setSortType] = useState("");

  const handleChange = (event) => {
    setSortType(event.target.value);
  };
  const sortValue= sortType;
//console.log(sortType)
  return (
    <div className="sortMain">
      <div className="sort_div">
        <FormControl sx={{ m: 1, minWidth: 110 }}>
          <InputLabel id="sort_head" className="sort_head">
            Sorting
          </InputLabel>

          <Select
            id="sortMenu"
            value={sortType}
            label="Sort"
            onChange={handleChange}
          >
            <MenuItem value="Sort">
              <em>None</em>
            </MenuItem>
            <MenuItem value="ascen">Low To High</MenuItem>
            <MenuItem value="decen">High To Low</MenuItem>
          </Select>
        </FormControl>
      </div>
      
     
    </div>
  );
   
}

/*
<div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>*/