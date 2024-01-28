import React, { useState } from "react";
import axios from "axios";
import styles from "../Post/CpuPost.module.css";

export const CasePost = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [motherboard_support, setMotherboard_support] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [storage_bays, setStorage_bays] = useState("");
  const [gpu_length_support, setGpu_length_support] = useState("");
  const [cooling_support, setCooling_support] = useState("");
  const [price, setPrice] = useState(null);

  const postDeatils = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/cases", {
        brand,
        model,
        type,
        motherboard_support,
        dimensions,
        storage_bays,
        gpu_length_support,
        cooling_support,
        price,
        setPrice,
      });
      alert("Casing Deatil Posted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main_div}>
      <form action="" onSubmit={postDeatils} className={styles.form}>
        <h2>Enter Casing Details</h2>
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
  );
};
