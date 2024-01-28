import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../style/Compare.module.css";

export const GpuCompare = () => {
  const [gpus, setGpus] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [Value1Data, setValue1Data] = useState({});
  const [Value2Data, setValue2Data] = useState({});
  const [tableBtn, setTableBtn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gpuRes = await axios.get("http://localhost:3001/gpus");
        setGpus(gpuRes.data);
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

  const handleValue2Change = (event, newValue) => {
    if (newValue) {
      setSelectedValue2(newValue);
    }
  };

  const compareHandle = () => {
    const selValueData1 = gpus?.find((x) => x.name === selectedValue1);
    const selValueData2 = gpus?.find((x) => x.name === selectedValue2);

    if (selValueData1) {
      setValue1Data(selValueData1);
    }
    if (selValueData2) {
      setValue2Data(selValueData2);
    }
    setTableBtn(true);
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.search_div}>
        <Autocomplete
          id="compoenent1"
          freeSolo
          options={gpus.map((gpu) => gpu.name)}
          value={selectedValue1}
          onChange={handleValue1Change}
          className={styles.autocomplete}
          renderInput={(params) => (
            <TextField {...params} label="Search Gpu 1" />
          )}
        />
        <button className={styles.compare_button} onClick={compareHandle}>
          Compare
        </button>
        <Autocomplete
          id="compoenent2"
          freeSolo
          options={gpus.map((gpu) => gpu.name)}
          value={selectedValue2}
          onChange={handleValue2Change}
          className={styles.autocomplete}
          renderInput={(params) => (
            <TextField {...params} label="Search Gpu 2" />
          )}
        />
      </div>
      {tableBtn === true ? (
        <>
          <div className={styles.info_table}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 400 }} size="small">
                <TableHead>
                  <TableRow className={styles.row_text}>
                    <TableCell>Property</TableCell>
                    <TableCell>Gpu 1</TableCell>
                    <TableCell>Gpu 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(Value1Data).map(
                    ([key, value]) =>
                      key !== "_id" &&
                      key !== "compatible" && (
                        <TableRow key={key} className={styles.row_text}>
                          <TableCell>{key.replace(/_/g, " ")}</TableCell>
                          <TableCell>{value}</TableCell>
                          <TableCell>{Value2Data[key]}</TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
