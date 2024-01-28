import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Update/Update.module.css";

export const DesktopPut = () => {
  const [desktops, setDesktops] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

  //********* */
  const [brand, setBrand] = useState("");
  const [model, setmodel] = useState("");
  const [processor, setprocessor] = useState("");
  const [ram, setram] = useState("");
  const [storage, setstorage] = useState("");
  const [price, setprice] = useState(null);
  const [usage, setusage] = useState("");
  const [gpu, setgpu] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/desktops");
        setDesktops(response.data.desktops);
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
    const selValueData1 = desktops?.find((x) => x.model === selectedValue1);

    try {
      await axios.put(`http://localhost:3001/desktops/${selValueData1._id}`, {
        brand: brand,
        model: model,
        processor: processor,
        ram: ram,
        storage: storage,
        price: price,
        usage: usage,
        gpu: gpu,
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
          options={desktops.map((desktop) => desktop.model)}
          value={selectedValue1}
          onChange={handleValue1Change}
          renderInput={(params) => (
            <TextField {...params} label="Select Desktop " />
          )}
        />
      </div>
      <div className={styles.put_div}>
        <form action="" onSubmit={update} className={styles.form_div}>
          <h2 className={styles.form_h2}>Enter Desktop Details</h2>
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
              setmodel(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter processor"
            id="processor"
            onChange={(event) => {
              setprocessor(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="number"
            placeholder="Enter ram"
            id="ram"
            onChange={(event) => {
              setram(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter storage"
            id="storage"
            onChange={(event) => {
              setstorage(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="number"
            placeholder="Enter price"
            id="price"
            onChange={(event) => {
              setprice(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter usage"
            id="usage"
            onChange={(event) => {
              setusage(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter gpu"
            id="gpu"
            onChange={(event) => {
              setgpu(event.target.value);
            }}
            className={styles.main_input}
          />

          <button type="submit" className={styles.main_btn}>
            Update Record
          </button>
        </form>
      </div>
    </div>
  );
};
