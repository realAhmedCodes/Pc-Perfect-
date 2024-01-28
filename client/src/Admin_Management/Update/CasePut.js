import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Update/Update.module.css";

export const CasePut = () => {
  const [cases, setCases] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

  //********* */
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [motherboard_support, setMotherboard_support] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [storage_bays, setStorage_bays] = useState("");
  const [gpu_length_support, setGpu_length_support] = useState("");
  const [cooling_support, setCooling_support] = useState("");
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/cases");
        setCases(response.data.cases);
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
    const selValueData1 = cases?.find((x) => x.model === selectedValue1);

    try {
      await axios.put(`http://localhost:3001/cases/${selValueData1._id}`, {
        brand: brand,
        model: model,
        type: type,
        motherboard_support: motherboard_support,
        dimensions: dimensions,
        storage_bays: storage_bays,
        gpu_length_support: gpu_length_support,
        cooling_support: cooling_support,
        price: price,
        setPrice: setPrice,
      });
      alert("Casing Deatil Updated");
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
          options={cases.map((casing) => casing.model)}
          value={selectedValue1}
          onChange={handleValue1Change}
          renderInput={(params) => (
            <TextField {...params} label="Select Casing " />
          )}
        />
      </div>
      <div className={styles.put_div}>
        <form action="" onSubmit={update} className={styles.form_div}>
          <h2 className={styles.form_h2}>Enter Casing Details</h2>
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
            placeholder="Enter Type"
            id="type"
            onChange={(event) => {
              setType(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Motherboard_support"
            id="motherboard_support"
            onChange={(event) => {
              setMotherboard_support(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Dimensions"
            id="Dimensions"
            onChange={(event) => {
              setDimensions(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Storage_bays"
            id="Storage_bays"
            onChange={(event) => {
              setStorage_bays(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Gpu_length_support"
            id="Gpu_length_support"
            onChange={(event) => {
              setGpu_length_support(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Cooling_support"
            id="Cooling_support"
            onChange={(event) => {
              setCooling_support(event.target.value);
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
