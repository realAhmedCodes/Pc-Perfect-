import React, { useState } from "react";
import axios from "axios"
import styles from "../Post/CpuPost.module.css";
export const CpuPost = () => {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [generation, setGeneration] = useState("");
  const [cores, setCores] = useState(null);
  const [threads, setThreads] = useState(null);
  const [base_clock, setBaseClock] = useState("");
  const [max_clock, setMaxClock] = useState("");
  const [cache, setCache] = useState("");
  const [price, setPrice] = useState("");

  const postDeatils = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/processors", {
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
      alert("Processor Deatil Posted");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={styles.main_div}>
      <form action="" onSubmit={postDeatils} className={styles.form}>
        <h2>Enter Processor Details</h2>
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
  );
};
