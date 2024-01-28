import React, { useState } from "react";
import axios from "axios";
import styles from "../Post/CpuPost.module.css";

export const LaptopPost = () => {
  const [brand, setBrand] = useState("");
  const [model, setmodel] = useState("");
  const [processor, setprocessor] = useState("");
  const [ram, setram] = useState(null);
  const [storage, setstorage] = useState("");
  const [price, setprice] = useState(null);
  const [gpu, setgpu] = useState("");
  const [usage, setusage] = useState("");
  const [battery, setbattery] = useState("");
  const [audio, setaudio] = useState("");
  const [camera, setcamera] = useState("");
  const [dimensions, setdimensions] = useState("");
  const [ports, setports] = useState("");
  const [display, setdisplay] = useState("");

  const postDeatils = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/laptops", {
       brand,
model,
  processor,
  ram, 
  storage,
price,
  gpu,
  usage,
  battery,
  audio, 
  camera,
  dimensions,
  ports, 
  display, 
      });
      alert("Laptop Deatil Posted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.main_div}>
      <form action="" onSubmit={postDeatils} className={styles.form}>
        <h2>Enter Laptop Details</h2>
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
          placeholder="Enter gpu"
          id="gpu"
          onChange={(event) => {
            setgpu(event.target.value);
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
          placeholder="Enter battery"
          id="battery"
          onChange={(event) => {
            setbattery(event.target.value);
          }}
          className={styles.main_input}
        />
        <input
          type="text"
          placeholder="Enter audio"
          id="audio"
          onChange={(event) => {
            setaudio(event.target.value);
          }}
          className={styles.main_input}
        />
        <input
          type="text"
          placeholder="Enter camera"
          id="camera"
          onChange={(event) => {
            setcamera(event.target.value);
          }}
          className={styles.main_input}
        />
        <input
          type="text"
          placeholder="Enter dimensions"
          id="dimensions"
          onChange={(event) => {
            setdimensions(event.target.value);
          }}
          className={styles.main_input}
        />
        <input
          type="text"
          placeholder="Enter ports"
          id="ports"
          onChange={(event) => {
            setports(event.target.value);
          }}
          className={styles.main_input}
        />
        <input
          type="text"
          placeholder="Enter display"
          id="display"
          onChange={(event) => {
            setdisplay(event.target.value);
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
