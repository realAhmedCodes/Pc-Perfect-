import React, { useState } from "react";
import axios from "axios";
import styles from "../Post/CpuPost.module.css";
export const MoboPost = () => {
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

  const postDeatils = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/mobos", {
        brand,
        model,
        socket,
        chipset,
        generation_support,
        memory_slots,
        max_memory,
        memory_type,
        form_factor,
        compatible,
        price,
      });
      alert("Motherboard Deatil Posted");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.main_div}>
      <form action="" onSubmit={postDeatils} className={styles.form}>
        <h2>Enter Motherboard Details</h2>
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
  );
};
