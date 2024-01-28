import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Update/Update.module.css";

export const LaptopPut = () => {
  const [laptops, setLaptops] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

  //********* */
  const [brand, setBrand] = useState("");
  const [model, setmodel] = useState("");
  const [processor, setprocessor] = useState("");
  const [ram, setram] = useState(null);
  const [storage, setstorage] = useState("");
  const [price, setprice] = useState(null);
  const [gpu, setgpu] = useState("");
  const [usage, setusage] = useState("");
  const [battery, setbattery] = useState("");
  const [audio, setaudio] = useState("");
  const [camera, setcamera] = useState("");
  const [dimensions, setdimensions] = useState("");
  const [ports, setports] = useState("");
  const [display, setdisplay] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/laptops");
        setLaptops(response.data.laptops);
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
    const selValueData1 = laptops?.find((x) => x.model === selectedValue1);

    try {
      await axios.put(`http://localhost:3001/laptops/${selValueData1._id}`, {
        brand: brand,
        model: model,
        processor: processor,
        ram: ram,
        storage: storage,
        price: price,
        gpu: gpu,
        usage: usage,
        battery: battery,
        audio: audio,
        camera: camera,
        dimensions: dimensions,
        ports: ports,
        display: display,
      });
      alert("Laptops Deatil Posted");
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
          options={laptops.map((laptop) => laptop.model)}
          value={selectedValue1}
          onChange={handleValue1Change}
          renderInput={(params) => (
            <TextField {...params} label="Select Laptop " />
          )}
        />
      </div>
      <div className={styles.put_div}>
        <form action="" onSubmit={update} className={styles.form_div}>
          <h2 className={styles.form_h2}>Enter Laptop Details</h2>
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
            placeholder="Enter gpu"
            id="gpu"
            onChange={(event) => {
              setgpu(event.target.value);
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
            placeholder="Enter battery"
            id="battery"
            onChange={(event) => {
              setbattery(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter audio"
            id="audio"
            onChange={(event) => {
              setaudio(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter camera"
            id="camera"
            onChange={(event) => {
              setcamera(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter dimensions"
            id="dimensions"
            onChange={(event) => {
              setdimensions(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter ports"
            id="ports"
            onChange={(event) => {
              setports(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter display"
            id="display"
            onChange={(event) => {
              setdisplay(event.target.value);
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
