import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Update/Update.module.css";

export const MoboPut = () => {
  const [mobos, setMobos] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

  //********* */
const [brand, setBrand] = useState("");
const [model, setModel] = useState("");
const [socket, setSocket] = useState("");
const [chipset, setChipset] = useState("");
const [generation_support, setGeneration_support] = useState("");
const [memory_slots, setMemory_slots] = useState(null);
const [max_memory, setMax_memory] = useState("");
const [memory_type, setMemory_type] = useState("");
const [form_factor, setForm_factor] = useState("");
const [compatible, setCompatible] = useState("");
const [price, setPrice] = useState(null);
 useEffect(() => {
   const fetchData = async () => {
     try {
       const moboRes = await axios.get("http://localhost:3001/mobos");
       setMobos(moboRes.data);
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
    const selValueData1 = mobos?.find((x) => x.model === selectedValue1);

    try {
      await axios.put(`http://localhost:3001/mobos/${selValueData1._id}`, {
        brand: brand,
        model: model,
        socket: socket,
        chipset: chipset,
        generation_support: generation_support,
        memory_slots: memory_slots,
        max_memory: max_memory,
        memory_type: memory_type,
        form_factor: form_factor,
        compatible: compatible,
        price: price,
      });
      alert("Motherboard Deatil Posted");
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
          options={mobos.map((mobo) => mobo.model)}
          value={selectedValue1}
          onChange={handleValue1Change}
          renderInput={(params) => (
            <TextField {...params} label="Select Motherboard " />
          )}
        />
      </div>
      <div className={styles.put_div}>
        <form action="" onSubmit={update} className={styles.form_div}>
          <h2 className={styles.form_h2}>Enter Motherboard Details</h2>
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
            placeholder="Enter Socket"
            id="socket"
            onChange={(event) => {
              setSocket(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Chipset"
            id="chipset"
            onChange={(event) => {
              setChipset(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Generation_support"
            id="generation_support"
            onChange={(event) => {
              setGeneration_support(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="number"
            placeholder="Enter Memory_slots"
            id="memory_slots"
            onChange={(event) => {
              setMemory_slots(event.target.value);
            }}
            className={styles.main_input}
          />

          <input
            type="text"
            placeholder="Enter Max_memory"
            id="max_memory"
            onChange={(event) => {
              setMax_memory(event.target.value);
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
            type="text"
            placeholder="Enter Form_factor"
            id="form_factor"
            onChange={(event) => {
              setForm_factor(event.target.value);
            }}
            className={styles.main_input}
          />
          <input
            type="text"
            placeholder="Enter Compatible"
            id="compatible"
            onChange={(event) => {
              setCompatible(event.target.value);
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
