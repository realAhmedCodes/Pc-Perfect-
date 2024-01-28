import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Update/Update.module.css";

export const RamPut = () => {
  const [rams, setRams] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

  //********* */
   const [brand, setBrand] = useState("");
   const [size, setSize] = useState("");
   const [speed, setSpeed] = useState("");
   const [type, setType] = useState("");

   const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/rams");
        setRams(response.data.rams);
      } catch (err) {
        console.log("There is an error:", err);
      }
    };

    fetchData();
  }, []);

  const handleValue1Change = (event, newValue) => {
    if (newValue) {
      setSelectedValue1(newValue);
    }
  };

  const update = async (event) => {
    const selValueData1 = rams?.find((x) => x.model === selectedValue1);

    try {
      await axios.put(`http://localhost:3001/rams/${selValueData1._id}`, {
        brand: brand,
        size: size,
        speed: speed,
        type: type,

        price: price,
      });
      alert("Ram Deatil Updated");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.search_div}>
        <Autocomplete
          id="compoenent1"
          freeSolo
          options={rams.map((ram) => ram.model)}
          value={selectedValue1}
          onChange={handleValue1Change}
          renderInput={(params) => (
            <TextField {...params} label="Select Ram " />
          )}
        />
      </div>
      <div className={styles.put_div}>
        <form action="" onSubmit={update} className={styles.form_div}>
          <h2 className={styles.form_h2}>Update Ram Details</h2>
          <input
            type="text"
            placeholder="Enter Brand"
            id="brand"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Size"
            id="Size"
            onChange={(event) => {
              setSize(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Speed"
            id="Speed"
            onChange={(event) => {
              setSpeed(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Type"
            id="Type"
            onChange={(event) => {
              setType(event.target.value);
            }}
            className={styles.main_input}
          />

          <input
            type="number"
            placeholder="Enter Price"
            id="price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            className={styles.main_input}
          />
          <button type="submit" className={styles.main_btn}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
};
