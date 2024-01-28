import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Update/Update.module.css";

export const StoragePut = () => {
  const [storages, setStorages] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

  //********* */
 const [brand, setBrand] = useState("");
 const [model, setModel] = useState("");
 const [size, setSize] = useState("");
 const [interfaceValue, setInterfaceValue] = useState("");
 const [read_speed, setRead_speed] = useState("");
 const [write_speed, setWrite_speed] = useState("");
 const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:3001/storages");
        setStorages(resp.data.storage);
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
    const selValueData1 = storages?.find((x) => x.model === selectedValue1);

    try {
      await axios.put(`http://localhost:3001/storages/${selValueData1._id}`, {
        brand: brand,
        model: model,
        size: size,
        interface: interfaceValue,
        read_speed: read_speed,
        write_speed: write_speed,
        price: price,
      });
      alert("Storage Deatil Posted");
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
          options={storages.map((storage) => storage.model)}
          value={selectedValue1}
          onChange={handleValue1Change}
          renderInput={(params) => (
            <TextField {...params} label="Select Storage " />
          )}
        />
      </div>
      <div className={styles.put_div}>
        <form action="" onSubmit={update} className={styles.form_div}>
          <h2 className={styles.form_h2}>Update Storage Details</h2>
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
            placeholder="Enter Size"
            id="Size"
            onChange={(event) => {
              setSize(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Interface"
            id="Interface"
            onChange={(event) => {
              setInterfaceValue(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Read_speed"
            id="Read_speed"
            onChange={(event) => {
              setRead_speed(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Write_speed"
            id="Write_speed"
            onChange={(event) => {
              setWrite_speed(event.target.value);
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
