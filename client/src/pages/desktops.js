import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addRec } from "../features/Store";

import "../style/Desktops.css";

import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const DesktopsFunc = () => {
  const { num1, num2, usage, os, type, build } = useSelector((state) => state.recs);
  const dispatch = useDispatch();

  const [desktops, setDesktops] = useState([]);
  const [filteredDesktops, setFilteredDesktops] = useState([]);
 
 

  const [cpFilteredDesktops, setCpFilteredDesktops] = useState([]);
  const [sortType, setSortType] = useState("Sort");

  useEffect(() => {
    const fetchDesktops = async () => {
      try {
       const response = await axios.get("http://localhost:3001/desktops");
       setDesktops(response.data.desktops);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDesktops();
  }, []);

  useEffect(() => {
      if (build === "Pre Build") {
        if (os === "Mac_Os") {
          const filteredDesktops = desktops.filter(
            (desktop) =>
              desktop.price >= parseInt(num1) &&
              desktop.price <= parseInt(num2) &&
              desktop.usage === usage &&
              desktop.brand === "Apple"
          );
          setFilteredDesktops(filteredDesktops);
        } else {
          const filteredDesktops = desktops.filter(
            (desktop) =>
              desktop.price >= parseInt(num1) &&
              desktop.price <= parseInt(num2) &&
              desktop.usage === usage
          );
          setFilteredDesktops(filteredDesktops);
        }
      }
  }, [num1, num2, usage, os, type, desktops, build]);



  const handleChange = (event) => {
    const newSortType = event.target.value;
    setSortType(newSortType);

    if (newSortType === "ascen") {
      const copyFilteredDesktops = [...filteredDesktops];
      copyFilteredDesktops.sort((a, b) => a.price - b.price);

      setFilteredDesktops(copyFilteredDesktops);
      //console.log(cpFilteredDesktops, sortType)
    } else if (newSortType === "decen") {
      const copyFilteredDesktops = [...filteredDesktops];
      copyFilteredDesktops.sort((a, b) => b.price - a.price);

      setFilteredDesktops(copyFilteredDesktops);
    } else if (newSortType === "Sort") {
      if (build === "Pre Build") {
        if (os === "Mac_Os") {
          const filteredDesktops = desktops.filter(
            (desktop) =>
              desktop.price >= parseInt(num1) &&
              desktop.price <= parseInt(num2) &&
              desktop.usage === usage &&
              desktop.brand === "Apple"
          );
          setFilteredDesktops(filteredDesktops);
        } else {
          const filteredDesktops = desktops.filter(
            (desktop) =>
              desktop.price >= parseInt(num1) &&
              desktop.price <= parseInt(num2) &&
              desktop.usage === usage
          );
          setFilteredDesktops(filteredDesktops);
        }
      }
    }
  };

 

  return (
    <div className="Container">
      <div className="side_op">
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
                <MenuItem value="Sort">None</MenuItem>
                <MenuItem value="ascen">Low To High</MenuItem>
                <MenuItem value="decen">High To Low</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="whole_div" style={{ backgroundColor: "#ffff" }}>
          <h2>Desktops Model Suggestions For You</h2>
          {/* Use the Grid container */}
          <Grid container spacing={2}>
            {filteredDesktops.map((desktop) => (
              <Grid item xs={12} sm={6} md={4} key={desktop._id}>
                <div className="Grid_div">
                  <div key={desktop._id}>
                    <p>Brand: {desktop.brand}</p>

                    <p>Model: {desktop.model}</p>

                    <p>Processor: {desktop.processor}</p>

                    <p>Ram: {desktop.ram}</p>

                    <p>Gpu: {desktop.gpu}</p>
                    <p>Storage: {desktop.gpu}</p>

                    <p>Price: {desktop.price}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};
