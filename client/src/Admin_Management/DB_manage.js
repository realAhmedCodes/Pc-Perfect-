import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Navbar } from "../pages/navbar";
//Delete Imports
import {CpuDel} from "../Admin_Management/Delete/CpuDel"
import { MoboDel } from "../Admin_Management/Delete/MoboDel";
import { CaseDel } from "../Admin_Management/Delete/CaseDel";
import { DesktopDel } from "../Admin_Management/Delete/DesktopDel";
import { GpuDel } from "../Admin_Management/Delete/GpuDel";
import { LaptopDel } from "../Admin_Management/Delete/LaptopDel";
import { PsuDel } from "../Admin_Management/Delete/PsuDel";
import { RamDel } from "../Admin_Management/Delete/RamDel";
import { StorageDel } from "../Admin_Management/Delete/StorageDel";
//Post Imports
import {CasePost} from "../Admin_Management/Post/CasePost"
import { CpuPost } from "../Admin_Management/Post/CpuPost";
import { DesktopPost } from "../Admin_Management/Post/DesktopPost";
import { GpuPost } from "../Admin_Management/Post/GpuPost";
import { LaptopPost } from "../Admin_Management/Post/LaptopPost";
import { MoboPost } from "../Admin_Management/Post/MoboPost";
import { PsuPost } from "../Admin_Management/Post/PsuPost";
import { RamPost } from "../Admin_Management/Post/RamPost";
import { StoragePost } from "../Admin_Management/Post/StoragePost";
// Update Imports
import {CasePut} from "../Admin_Management/Update/CasePut"
import { CpuPut } from "../Admin_Management/Update/CpuPut";
import { DesktopPut } from "../Admin_Management/Update/DesktopPut";
import { GpuPut } from "../Admin_Management/Update/GpuPut";
import { LaptopPut } from "../Admin_Management/Update/LaptopPut";
import { MoboPut } from "../Admin_Management/Update/MoboPut";
import { PsuPut } from "../Admin_Management/Update/PsuPut";
import { RamPut } from "../Admin_Management/Update/RamPut";
import { StoragePut } from "../Admin_Management/Update/StoragePut";



import styles from "../Admin_Management/Db_File.module.css";

export const DB_manage = () => {
  const [product, setProduct] = useState(""); // Separate state for Product selection
  const [operation, setOperation] = useState(""); // Separate state for Operation selection

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  console.log(operation, product)

  return (
    <div className={styles.main_div}>
      <Navbar></Navbar>
      <div className={styles.menu_div}>
        <div className={styles.main_h3}>
          <h3>Operation Menu</h3>
        </div>
        <div className={styles.product_select}>
          <p className={styles.product_p}>Select The Product</p>
          <FormControl sx={{ m: 1, minWidth: 140 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Select Product
            </InputLabel>
            <Select
              labelId="select-label"
              id="select-component"
              value={product}
              label="components"
              onChange={handleProductChange}
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
        <div className={styles.product_select}>
          <p className={styles.product_p}>Select The Operation</p>
          <FormControl sx={{ m: 1, minWidth: 140 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Select Operation
            </InputLabel>
            <Select
              labelId="select-label"
              id="select-component"
              value={operation}
              label="operations"
              onChange={handleOperationChange}
            >
              <MenuItem value="post">Post</MenuItem>
              <MenuItem value="update">Update</MenuItem>
              <MenuItem value="del">Delete</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {/*Delete */}
      {product === "cpu" && operation === "del" ? (
        <>
          <CpuDel></CpuDel>
        </>
      ) : (
        ""
      )}
      {product === "mobo" && operation === "del" ? (
        <>
          <MoboDel></MoboDel>
        </>
      ) : (
        ""
      )}
      {product === "gpu" && operation === "del" ? (
        <>
          <GpuDel></GpuDel>
        </>
      ) : (
        ""
      )}
      {product === "psu" && operation === "del" ? (
        <>
          <PsuDel></PsuDel>
        </>
      ) : (
        ""
      )}
      {product === "ram" && operation === "del" ? (
        <>
          <RamDel></RamDel>
        </>
      ) : (
        ""
      )}
      {product === "case" && operation === "del" ? (
        <>
          <CaseDel></CaseDel>
        </>
      ) : (
        ""
      )}
      {product === "storage" && operation === "del" ? (
        <>
          <StorageDel></StorageDel>
        </>
      ) : (
        ""
      )}

      {product === "laptop" && operation === "del" ? (
        <>
          <LaptopDel></LaptopDel>
        </>
      ) : (
        ""
      )}
      {product === "desktop" && operation === "del" ? (
        <>
          <DesktopDel></DesktopDel>
        </>
      ) : (
        ""
      )}
      {/*Update */}
      {product === "cpu" && operation === "update" ? (
        <>
          <CpuPut></CpuPut>
        </>
      ) : (
        ""
      )}
      {product === "mobo" && operation === "update" ? (
        <>
          <MoboPut></MoboPut>
        </>
      ) : (
        ""
      )}
      {product === "gpu" && operation === "update" ? (
        <>
          <GpuPut></GpuPut>
        </>
      ) : (
        ""
      )}
      {product === "psu" && operation === "update" ? (
        <>
          <PsuPut></PsuPut>
        </>
      ) : (
        ""
      )}
      {product === "ram" && operation === "update" ? (
        <>
          <RamPut></RamPut>
        </>
      ) : (
        ""
      )}
      {product === "case" && operation === "update" ? (
        <>
          <CasePut></CasePut>
        </>
      ) : (
        ""
      )}
      {product === "storage" && operation === "update" ? (
        <>
          <StoragePut></StoragePut>
        </>
      ) : (
        ""
      )}

      {product === "laptop" && operation === "update" ? (
        <>
          <LaptopPut></LaptopPut>
        </>
      ) : (
        ""
      )}
      {product === "desktop" && operation === "update" ? (
        <>
          <DesktopPut></DesktopPut>
        </>
      ) : (
        ""
      )}
      {/*Post*/}
      {product === "cpu" && operation === "post" ? (
        <>
          <CpuPost></CpuPost>
        </>
      ) : (
        ""
      )}
      {product === "mobo" && operation === "post" ? (
        <>
          <MoboPost></MoboPost>
        </>
      ) : (
        ""
      )}
      {product === "gpu" && operation === "post" ? (
        <>
          <GpuPost></GpuPost>
        </>
      ) : (
        ""
      )}
      {product === "psu" && operation === "post" ? (
        <>
          <PsuPost></PsuPost>
        </>
      ) : (
        ""
      )}
      {product === "ram" && operation === "post" ? (
        <>
          <RamPost></RamPost>
        </>
      ) : (
        ""
      )}
      {product === "case" && operation === "post" ? (
        <>
          <CasePost></CasePost>
        </>
      ) : (
        ""
      )}
      {product === "storage" && operation === "post" ? (
        <>
          <StoragePost></StoragePost>
        </>
      ) : (
        ""
      )}

      {product === "laptop" && operation === "post" ? (
        <>
          <LaptopPost></LaptopPost>
        </>
      ) : (
        ""
      )}
      {product === "desktop" && operation === "post" ? (
        <>
          <DesktopPost></DesktopPost>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
