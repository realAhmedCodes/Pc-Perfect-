import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Update/Update.module.css";

export const CpuPut = () => {
  const [processors, setProcessors] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

  //********* */
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [generation, setGeneration] = useState("");
  const [cores, setCores] = useState(null);
  const [threads, setThreads] = useState(null);
  const [base_clock, setBaseClock] = useState("");
  const [max_clock, setMaxClock] = useState("");
  const [cache, setCache] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/processors");
        setProcessors(response.data.processors);
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
    const selValueData1 = processors?.find((x) => x.name === selectedValue1);

    try {
      await axios.put(`http://localhost:3001/processors/${selValueData1._id}`, {
        brand,
        name,
        generation,
        cores,
        threads,
        base_clock,
        max_clock,
        cache,
        price,
      });
      alert("Processor Deatil Updated");
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
          options={processors.map((processor) => processor.name)}
          value={selectedValue1}
          onChange={handleValue1Change}
          className={styles.bar}
          renderInput={(params) => (
            <TextField {...params} label="Select Desktop " />
          )}
        />
      </div>
      <div className={styles.put_div}>
        <form action="" onSubmit={update} className={styles.form_div}>
          <h2 className={styles.form_h2}>Update Processor Details</h2>
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
            type="text"
            placeholder="Enter Generation"
            id="generation"
            onChange={(event) => {
              setGeneration(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="number"
            placeholder="Enter Cores"
            id="core"
            onChange={(event) => {
              setCores(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="number"
            placeholder="Enter Threads"
            id="thread"
            onChange={(event) => {
              setThreads(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Base Clock"
            id="base_clock"
            onChange={(event) => {
              setBaseClock(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Max CLock"
            id="max_clock"
            onChange={(event) => {
              setMaxClock(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Cache"
            id="cache"
            onChange={(event) => {
              setCache(event.target.value);
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
