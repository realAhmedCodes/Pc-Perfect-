import React, { useState } from "react";
import axios from "axios";
import styles from "../Post/CpuPost.module.css";

export const StoragePost = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [size, setSize] = useState("");
 const [interfaceValue, setInterfaceValue] = useState("");
  const [read_speed, setRead_speed] = useState("");
  const [write_speed, setWrite_speed] = useState("");
  const [price, setPrice] = useState(null);

  const postDeatils = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/storages", {
        brand,
        model,
        size,
        interface: interfaceValue,
        read_speed,
        write_speed,
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
        <h2>Enter Storage Details</h2>
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
  );
};
