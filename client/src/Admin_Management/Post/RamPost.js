import React, { useState } from "react";
import axios from "axios";
import styles from "../Post/CpuPost.module.css";

export const RamPost = () => {
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [speed, setSpeed] = useState("");
  const [type, setType] = useState("");

  const [price, setPrice] = useState(null);

  const postDeatils = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/rams", {
        brand,
        size,
        speed,
        type,

        price,
      });
      alert("Processor Deatil Posted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main_div}>
      <form action="" onSubmit={postDeatils} className={styles.form}>
        <h2>Enter Ram Details</h2>
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
  );
};
