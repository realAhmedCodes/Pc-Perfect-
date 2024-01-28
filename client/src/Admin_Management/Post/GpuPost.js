import React, { useState } from "react";
import axios from "axios";
import styles from "../Post/CpuPost.module.css";

export const GpuPost = () => {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [cuda_cores, setCuda_cores] = useState(null);
  const [boost_clock_ghz, setBoost_clock_ghz] = useState(null);
  const [memory_size_gb, setMemory_size_gb] = useState(null);
  const [memory_type, setMemory_type] = useState("");

  const [price, setPrice] = useState(null);

  const postDeatils = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/gpus", {
        brand,
        name,
        cuda_cores,
        boost_clock_ghz,
        memory_size_gb,
        memory_type,
          price,
      });
      alert("Gpu Deatil Posted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main_div}>
      <form action="" onSubmit={postDeatils} className={styles.form}>
        <h2>Enter Gpu Details</h2>
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
  );
};
