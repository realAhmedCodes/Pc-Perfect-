import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Update/Update.module.css";

export const GpuPut = () => {
  const [gpus, setGpus] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

  //********* */
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [cuda_cores, setCuda_cores] = useState(null);
  const [boost_clock_ghz, setBoost_clock_ghz] = useState(null);
  const [memory_size_gb, setMemory_size_gb] = useState(null);
  const [memory_type, setMemory_type] = useState("");

  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/gpus");
        setGpus(response.data);
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
    const selValueData1 = gpus?.find((x) => x.name === selectedValue1);

    try {
      await axios.put(`http://localhost:3001/gpus/${selValueData1._id}`, {
        brand: brand,
        name: name,
        cuda_cores: cuda_cores,
        boost_clock_ghz: boost_clock_ghz,
        memory_size_gb: memory_size_gb,
        memory_type: memory_type,
        price: price,
      });
      alert("Gpu Deatil Posted");
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
          options={gpus.map((gpu) => gpu.name)}
          value={selectedValue1}
          onChange={handleValue1Change}
          renderInput={(params) => (
            <TextField {...params} label="Select Gpu " />
          )}
        />
      </div>
      <div className={styles.put_div}>
        <form action="" onSubmit={update} className={styles.form_div}>
          <h2 className={styles.form_h2}>Update Gpu Details</h2>
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
              setName(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="number"
            placeholder="Enter Cuda_cores"
            id="cuda_cores"
            onChange={(event) => {
              setCuda_cores(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="number"
            placeholder="Enter Boost_clock_ghz"
            id="boost_clock_ghz"
            onChange={(event) => {
              setBoost_clock_ghz(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="number"
            placeholder="Enter Memory_size_gb"
            id="memory_size_gb"
            onChange={(event) => {
              setMemory_size_gb(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Memory_type"
            id="memory_type"
            onChange={(event) => {
              setMemory_type(event.target.value);
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
