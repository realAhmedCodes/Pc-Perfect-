import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../Delete/Delete.module.css";

export const CpuDel = () => {
  const [processors, setProcessors] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");

  const [Value1Data, setValue1Data] = useState({});

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get("http://localhost:3001/processors");
       setProcessors(response.data.processors);
     } catch (err) {
       console.log("There is an error:", err);
     }
   };

   fetchData();
 }, []);

  const handleValue1Change = (event, newValue) => {
    if (newValue) {
      setSelectedValue1(newValue);
    }
  };

  const deleteHandle = async () => {
    try {
      const selValueData1 = processors?.find((x) => x.name === selectedValue1);

      if (selValueData1) {
        const response = await axios.delete(
          `http://localhost:3001/processors/${selValueData1._id}`
        );
        if (response.status === 200) {
          setSelectedValue1(""); // Clear selected value

          alert("Processor Record Deleted");
        }
      }
    } catch (error) {
      console.error("Error deleting Record:", error);
    }
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.search_div}>
        <Autocomplete
          id="compoenent1"
          freeSolo
          options={processors.map((processor) => processor.name)}
          value={selectedValue1}
          onChange={handleValue1Change}
          renderInput={(params) => (
            <TextField {...params} label="Select Processor " />
          )}
        />
      </div>
      <button className={styles.del_btn} onClick={deleteHandle}>
        Delete Record
      </button>
    </div>
  );
};
