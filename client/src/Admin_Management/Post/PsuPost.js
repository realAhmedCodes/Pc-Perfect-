import React, { useState } from "react";
import axios from "axios";
import styles from "../Post/CpuPost.module.css";

export const PsuPost = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [wattage, setWattage] = useState("");
  const [efficiency_rating, setEfficiency_rating] = useState("");
  const [modular, setModular] = useState(null);

  const [price, setPrice] = useState(null);

  const postDeatils = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/psus", {
  brand, 
  model,
  wattage,
  efficiency_rating, 
  modular,

price,
      });
      alert("Psu Deatil Posted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main_div}>
      <form action="" onSubmit={postDeatils} className={styles.form}>
        <h2>Enter Psu Details</h2>
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
  );
};
