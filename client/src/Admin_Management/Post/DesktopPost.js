import React, { useState } from "react";
import axios from "axios";
import styles from "../Post/CpuPost.module.css";

export const DesktopPost = () => {
  const [brand, setBrand] = useState("");
  const [model, setmodel] = useState("");
  const [processor, setprocessor] = useState("");
  const [ram, setram] = useState("");
  const [storage, setstorage] = useState("");
  const [price, setprice] = useState(null);
  const [usage, setusage] = useState("");
  const [gpu, setgpu] = useState("");
 

  const postDeatils = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/desktops", {
        brand,
        model,
        processor,
        ram,
        storage,
        price,
        usage,
        gpu,
      });
      alert("Desktop Deatil Posted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main_div}>
      <form action="" onSubmit={postDeatils} className={styles.form}>
        <h2>Post Desktop Details</h2>
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
          Post
        </button>
      </form>
    </div>
  );
};
