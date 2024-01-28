import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Update/Update.module.css";

export const PsuPut = () => {
  const [psus, setPsus] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

  //********* */
   const [brand, setBrand] = useState("");
   const [model, setModel] = useState("");
   const [wattage, setWattage] = useState("");
   const [efficiency_rating, setEfficiency_rating] = useState("");
   const [modular, setModular] = useState(null);

   const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/psus");
        setPsus(response.data.psus);
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
    const selValueData1 = psus?.find((x) => x.model === selectedValue1);

    try {
      await axios.put(`http://localhost:3001/psus/${selValueData1._id}`, {
        brand: brand,
        model: model,
        wattage: wattage,
        efficiency_rating: efficiency_rating,
        modular: modular,
        price: price,
      });
      alert("Desktop Deatil Posted");
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
          options={psus.map((psu) => psu.model)}
          value={selectedValue1}
          onChange={handleValue1Change}
          renderInput={(params) => (
            <TextField {...params} label="Select Psu " />
          )}
        />
      </div>
      <div className={styles.put_div}>
        <form action="" onSubmit={update} className={styles.form_div}>
          <h2 className={styles.form_h2}>Update Psu Details</h2>
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
            placeholder="Enter Model"
            id="model"
            onChange={(event) => {
              setModel(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Wattage"
            id="Wattage"
            onChange={(event) => {
              setWattage(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Efficiency_rating"
            id="Efficiency_rating"
            onChange={(event) => {
              setEfficiency_rating(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="boolean"
            placeholder="Enter Modular"
            id="Modular"
            onChange={(event) => {
              setModular(event.target.value);
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
