import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addRec } from "../features/Store";
 import { Navbar } from "../pages/navbar"
import styles from "../style/Rec.module.css";



export const Rec = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [usage, setUsage] = useState("");
  const [cpuBrand, setCpuBrand] = useState("");
  const [moboBrand, setMoboBrand] = useState("");
  const [gpuBrand, setGpuBrand] = useState("");
  const [ramSize, setRamSize] = useState("");
  const [casingBrand, setCasingBrand] = useState("");
  const [psuBrand, setPsuBrand] = useState("");
  const [storeType, setStoreType] = useState("");
  const [os, setOs] = useState("");
  const [type, setType] = useState("");
  const [build, setBuild] = useState("");
  const handleResult = (event) => {
    event.preventDefault();

    dispatch(
      addRec({
        num1,
        num2,
        usage,
        cpuBrand,
        moboBrand,
        gpuBrand,
        ramSize,
        casingBrand,
        psuBrand,
        storeType,
        os,
        type,
        build,
      })
    );

    {
      type === "Desktops" && build === "Pre Build"
        ? nav("/desktops")
        : nav("/custom_recs");
    }
  };
  /* className={`${styles.main_div} ${
          build === "Custom Build" 
            ? styles["main_div2"]
            : className={`${styles.main_div}
        }`}*/

  return (
    <div className={`${styles.outer_div}`}>
      <Navbar></Navbar>
      <div
        className={`${styles.main_div} ${
          build === "Custom Build" ? styles["main_div2"] : styles.main_div // Use the ternary operator to conditionally set the class name
        }`}
      >
        <div
          className={`${styles.container} ${
            build === "Custom Build" ? styles["build-selected"] : ""
          }`}
        >
          <div className={styles.form_div}>
            <form onSubmit={handleResult}>
              <label htmlFor="budget">Enter Budget Range</label>
              <input
                placeholder="From"
                type="number"
                name="num1"
                id="num1"
                className={styles.num_imp}
                onChange={(event) => {
                  setNum1(event.target.value);
                }}
              />
              <input
                placeholder="To"
                type="number"
                name="num2"
                id="num2"
                className={styles.num_imp}
                onChange={(event) => {
                  setNum2(event.target.value);
                }}
              />
              <label htmlFor="os">Operating System</label>
              <select
                name="os"
                id="os"
                onChange={(event) => {
                  setOs(event.target.value);
                }}
              >
                <option value="">Select OS</option>
                <option value="Windows">Windows</option>
                <option value="Mac_Os">Mac OS</option>
              </select>
              <label htmlFor="type">Choose Pc Type</label>
              <select
                name="type"
                id="type"
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <option value="">Select Type</option>
                <option value="Desktops">Desktops</option>
                <option value="Laptops">Laptops</option>
              </select>
              {type === "Desktops" ? (
                <>
                  <label htmlFor="build">Choose Build</label>
                  <select
                    name="build"
                    id="build"
                    onChange={(event) => {
                      setBuild(event.target.value);
                    }}
                  >
                    <option value="">Select Build</option>
                    <option value="Custom Build">Custom Build</option>
                    <option value="Pre Build">Pre Build</option>
                  </select>
                </>
              ) : (
                ""
              )}
              {build === "Custom Build" ? (
                <>
                  <label htmlFor="cpuBrand">Choose Proccessor Brand</label>
                  <select
                    name="cpuBrand"
                    id="cpuBrand"
                    onChange={(event) => {
                      setCpuBrand(event.target.value);
                    }}
                  >
                    <option value="">Select Build</option>
                    <option value="Intel">Intel</option>
                    <option value="Ryzen">Ryzen</option>
                    <option value="Any">Any</option>
                  </select>

                  <label htmlFor="moboBrand">Choose Mohterboard Brand</label>
                  <select
                    name="moboBrand"
                    id="moboBrand"
                    onChange={(event) => {
                      setMoboBrand(event.target.value);
                    }}
                  >
                    <option value="">Select Brand</option>
                    <option value="Asus">Asus</option>
                    <option value="MSI">MSI</option>
                    <option value="ASRock">ASRock</option>
                    <option value="Gigabyte">Gigabyte</option>
                    <option value="Any">Any</option>
                  </select>

                  <label htmlFor="gpuBrand">Choose GPU Brand</label>
                  <select
                    name="gpuBrand"
                    id="gpuBrand"
                    onChange={(event) => {
                      setGpuBrand(event.target.value);
                    }}
                  >
                    <option value="">Select Brand</option>
                    <option value="Asus">Asus</option>
                    <option value="MSI">MSI</option>
                    <option value="ASRock">ASRock</option>
                    <option value="Gigabyte">Gigabyte</option>
                    <option value="Sapphire">Sapphire</option>
                    <option value="Palit">Palit</option>
                    <option value="Any">Any</option>
                  </select>

                  <label htmlFor="ramSize">Choose Ram Size</label>
                  <select
                    name="ramSize"
                    id="ramSize"
                    onChange={(event) => {
                      setRamSize(event.target.value);
                    }}
                  >
                    <option value="">Select Size</option>
                    <option value="4GB">4 GB</option>
                    <option value="8GB">8 GB</option>
                    <option value="16GB">16 GB</option>
                    <option value="32GB">32 GB</option>
                    <option value="64GB">64 GB</option>
                    <option value="Any">Any</option>
                  </select>

                  <label htmlFor="casingBrand">Choose Casing Brand</label>
                  <select
                    name="casingBrand"
                    id="casingBrand"
                    onChange={(event) => {
                      setCasingBrand(event.target.value);
                    }}
                  >
                    <option value="">Select Brand</option>
                    <option value="Corsair">Corsair</option>
                    <option value="NZXT">NZXT</option>
                    <option value="Cooler Master">Cooler Master</option>
                    <option value="Lian Li">Lian Li</option>
                    <option value="Cougar">Cougar</option>
                    <option value="Any">Any</option>
                  </select>

                  <label htmlFor="storeType">Choose Storage</label>
                  <select
                    name="storeType"
                    id="storeType"
                    onChange={(event) => {
                      setStoreType(event.target.value);
                    }}
                  >
                    <option value="">Select Storage Type</option>
                    <option value="ssd">2.5" SSD</option>
                    <option value="nvme">M.2 / NVMe SSD</option>
                    <option value="hd">Hard Drive</option>
                    <option value="Any">Any</option>
                  </select>

                  <label htmlFor="psuBrand">Choose Psu</label>
                  <select
                    name="psuBrand"
                    id="psuBrand"
                    onChange={(event) => {
                      setPsuBrand(event.target.value);
                    }}
                  >
                    <option value="">Select Psu Type</option>
                    <option value="bronze">80 Plus Bronze</option>
                    <option value="gold">80 Plus Gold</option>
                    <option value="platinum">80 Plus Platinum</option>
                    <option value="titanium">80 Plus Titanium</option>
                    <option value="Any">Any</option>
                  </select>
                </>
              ) : (
                ""
              )}
              <label htmlFor="usage">Usage</label>
              <select
                name="usage"
                id="usage"
                onChange={(event) => {
                  setUsage(event.target.value);
                }}
              >
                <option value="">Select Usage</option>
                <option value="Office Work">Office Work</option>
                <option value="Gaming">Gaming</option>
                <option value="Home Usage">Home Usage</option>
              </select>

              <button className={styles.btn} type="submit">
                Get Results
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
