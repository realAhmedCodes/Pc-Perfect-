import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addRec } from "../features/Store";
import Grid from "@mui/material/Grid";
import "../style/Laptops.css";
import { LaptopDetail } from "../component-detail/LaptopDetail";
import { SelectLabels } from "../pages/LaptopSideBar";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const LaptopsFunc = () => {
  const { num1, num2, usage, os, type } = useSelector((state) => state.recs);
  const dispatch = useDispatch();

  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [infoLaptop, setInfoLaptop] = useState(false);
  const [laptopId, setLaptopId] = useState("");
  const [sortLaptops, setSortLaptops] = useState([]);
  const [cpFilteredLaptops, setCpFilteredLaptops] = useState([]);
  const [sortType, setSortType] = useState("Sort");

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const res = await axios.get("http://localhost:3001/laptops");
        setLaptops(res.data.laptops);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLaptops();
  }, []);

  useEffect(() => {
    if (type === "Laptops") {
      if (os === "Mac_Os") {
        const filteredLaptop = laptops.filter(
          (laptop) =>
            laptop.price >= parseInt(num1) &&
            laptop.price <= parseInt(num2) &&
            laptop.usage === usage &&
            laptop.brand === "Apple"
        );
        setFilteredLaptops(filteredLaptop);
      } else {
        const filteredLaptop = laptops.filter(
          (laptop) =>
            laptop.price >= parseInt(num1) &&
            laptop.price <= parseInt(num2) &&
            laptop.usage === usage
        );
        setFilteredLaptops(filteredLaptop);
      }
    }
  }, [num1, num2, usage, os, type, laptops]);

  const handleChange = (event) => {
    const newSortType = event.target.value;
    setSortType(newSortType);

    if (newSortType === "ascen") {
      const copyFilteredLaptops = [...filteredLaptops];
      copyFilteredLaptops.sort((a, b) => a.price - b.price);

      setFilteredLaptops(copyFilteredLaptops);
    } else if (newSortType === "decen") {
      const copyFilteredLaptops = [...filteredLaptops];
      copyFilteredLaptops.sort((a, b) => b.price - a.price);

      setFilteredLaptops(copyFilteredLaptops);
    } else if (newSortType === "Sort") {
      if (os === "Mac_Os") {
        const filteredLaptop = laptops.filter(
          (laptop) =>
            laptop.price >= parseInt(num1) &&
            laptop.price <= parseInt(num2) &&
            laptop.usage === usage &&
            laptop.brand === "Apple"
        );
        setFilteredLaptops(filteredLaptop);
      } else {
        const filteredLaptop = laptops.filter(
          (laptop) =>
            laptop.price >= parseInt(num1) &&
            laptop.price <= parseInt(num2) &&
            laptop.usage === usage
        );
        setFilteredLaptops(filteredLaptop);
      }
    }
  };

  const laptopInfoShow = (id) => {
    setInfoLaptop(!infoLaptop);
    setLaptopId(id);
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
          <h2>Laptops Model Suggestions For You</h2>
          {/* Use the Grid container */}
          <Grid container spacing={2}>
            {filteredLaptops.map((laptop) => (
              <Grid item xs={12} sm={6} md={4} key={laptop._id}>
                <div className="Grid_div">
                  <div key={laptop._id}>
                    <p>Brand: {laptop.brand}</p>

                    <p>Model: {laptop.model}</p>

                    <p>Processor: {laptop.processor}</p>

                    <p>Ram: {laptop.ram}</p>

                    <p>Gpu: {laptop.gpu}</p>

                    <p>Price: {laptop.price}</p>
                  </div>
                  <button
                    className="InfoBtn"
                    onClick={() => laptopInfoShow(laptop._id)}
                  >
                    More Info
                  </button>
                </div>
              </Grid>
            ))}
          </Grid>
          {infoLaptop === true ? (
            <>
              <LaptopDetail
                id={laptopId}
                infoFunc={laptopInfoShow}
                infoFuncValue={infoLaptop}
              ></LaptopDetail>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

/*import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const LaptopsFunc = () => {
  const { num1, num2, usage, os, type } = useSelector((state) => state.recs);

  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [num1Value, setNum1Value] = useState("");
  //const [big, setBig] = useState("");
  const [osValue, setOsValue] = useState("");
  const [num2Value, setNum2Value] = useState("");
  const [usageValue, setUsageValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const res = await axios.get("http://localhost:3001/laptops");
        setLaptops(res.data.laptops);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLaptops();
  }, []);

  useEffect(() => {
    // Use the parsed values from local storage for initial state
    const num1Data = JSON.parse(localStorage.getItem("num1"));
    const num2Data = JSON.parse(localStorage.getItem("num2"));
    const usageData = JSON.parse(localStorage.getItem("usage"));
    const osData = JSON.parse(localStorage.getItem("os"));
    const typeData = JSON.parse(localStorage.getItem("type"));

    // Set the state with the parsed values
    setNum1Value(num1Data);
    setNum2Value(num2Data);
    setUsageValue(usageData);
    setOsValue(osData);
    setTypeValue(typeData);
  }, []);

  // ...

  useEffect(() => {
    // Update local storage whenever the values change
    localStorage.setItem("num1", JSON.stringify(num1));
    localStorage.setItem("num2", JSON.stringify(num2));
    localStorage.setItem("usage", JSON.stringify(usage));
    localStorage.setItem("os", JSON.stringify(os));
    localStorage.setItem("type", JSON.stringify(type));
  }, [num1, num2, usage, os, type]);

  // ...

  return (
    <div>
      <h2>
        Laptops Models with Budget Range : {num1} To {num2}
      </h2>
      <ul>
        {filteredLaptops.map((laptop) => (
          <li key={laptop._id}>
            {laptop.brand}
            <br />
            {laptop.model}
            <br />
            {laptop.processor}
            <br />
            {laptop.ram}
            <br />
            {laptop.storage}
            <br />
            {laptop.gpu}
            <br />
            {laptop.usage}
            <br />
            {laptop.display}
            <br />
            {laptop.battery}
            <br />

            {laptop.audio}
            <br />

            {laptop.camera}
            <br />
            {laptop.dimensions}
            <br />

            {laptop.ports}
            <br />
            {laptop.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
*/
