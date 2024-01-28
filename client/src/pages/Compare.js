import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
 import { Navbar } from "../pages/navbar";
import { CpuCompare } from "../components/Cpu_compare";
import { MoboCompare } from "../components/Mobo_compare";
import { GpuCompare } from "../components/Gpu_compare";
import {PsuCompare } from "../components/Psu_compare";
import { RamCompare } from "../components/Ram_compare";
import { StorageCompare } from "../components/Stoarge_compare";
import { DesktopCompare } from "../components/Desktop_compare";
import { LaptopCompare } from "../components/Laptop_compare";
import { CaseCompare } from "../components/Case_compare";
import styles from "../style/CompareModule.module.css"; 
import { useSelector } from "react-redux";



export const Compare = () => {
    const { num1, num2, usage, os, type } = useSelector((state) => state.recs);
    console.log(num1, num2, usage)
  const [product, setProduct] = React.useState("");
 
  const handleChange = (event) => {
    setProduct(event.target.value);
  };



  return (
    <div className={styles.main_div}>
      <Navbar></Navbar>

      <div className={styles.product_select}>
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel
          
            id="demo-controlled-open-select-label"
            className={styles.select}
          >
            Select Product
          </InputLabel>
          <Select
            labelId="select-label"
            id="select-component"
            value={product}
            label="components"
            onChange={handleChange}
            className={styles.select}
          >
            <MenuItem value="cpu">Cpus</MenuItem>
            <MenuItem value="mobo">Motherboards</MenuItem>
            <MenuItem value="gpu">Gpus</MenuItem>
            <MenuItem value="psu">Psus</MenuItem>
            <MenuItem value="ram">Rams</MenuItem>
            <MenuItem value="case">Casings</MenuItem>
            <MenuItem value="storage">Storages</MenuItem>
            <MenuItem value="laptop">Laptops</MenuItem>
            <MenuItem value="desktop">desktops</MenuItem>
          </Select>
        </FormControl>
      </div>
      
      <div className={styles.compare_divs}>
        {product === "cpu" ? (
          <>
            <CpuCompare></CpuCompare>
          </>
        ) : (
          ""
        )}
        {product === "mobo" ? (
          <>
            <MoboCompare></MoboCompare>
          </>
        ) : (
          ""
        )}
        {product === "gpu" ? (
          <>
            <GpuCompare></GpuCompare>
          </>
        ) : (
          ""
        )}
        {product === "psu" ? (
          <>
            <PsuCompare></PsuCompare>
          </>
        ) : (
          ""
        )}
        {product === "ram" ? (
          <>
            <RamCompare></RamCompare>
          </>
        ) : (
          ""
        )}
        {product === "case" ? (
          <>
            <CaseCompare></CaseCompare>
          </>
        ) : (
          ""
        )}
        {product === "storage" ? (
          <>
            <StorageCompare></StorageCompare>
          </>
        ) : (
          ""
        )}
        {product === "laptop" ? (
          <>
            <LaptopCompare></LaptopCompare>
          </>
        ) : (
          ""
        )}
        {product === "desktop" ? (
          <>
            <DesktopCompare></DesktopCompare>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

