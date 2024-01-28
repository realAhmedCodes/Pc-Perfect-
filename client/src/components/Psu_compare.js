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

export const PsuCompare = () => {
  const [psus, setPsus] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [Value1Data, setValue1Data] = useState({});
  const [Value2Data, setValue2Data] = useState({});
  const [tableBtn, setTableBtn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const psuRes = await axios.get("http://localhost:3001/psus");
        setPsus(psuRes.data.psus);
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
    const selValueData1 = psus?.find((x) => x.model === selectedValue1);
    const selValueData2 = psus?.find((x) => x.model === selectedValue2);

    if (selValueData1) {
      setValue1Data(selValueData1);
    }
    if (selValueData2) {
      setValue2Data(selValueData2);
    }
    setTableBtn(true);
    console.log(selValueData1, selValueData2);
    console.log(selectedValue1, selectedValue2);
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.search_div}>
        <Autocomplete
          id="compoenent1"
          freeSolo
          options={psus.map((psu) => psu.model)}
          value={selectedValue1}
          onChange={handleValue1Change}
          className={styles.autocomplete}
          renderInput={(params) => (
            <TextField {...params} label="Search Psu 1" />
          )}
        />
        <button className={styles.compare_button} onClick={compareHandle}>
          Compare
        </button>
        <Autocomplete
          id="compoenent2"
          freeSolo
          options={psus.map((psu) => psu.model)}
          value={selectedValue2}
          onChange={handleValue2Change}
          className={styles.autocomplete}
          renderInput={(params) => (
            <TextField {...params} label="Search Psu 2" />
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
                    <TableCell>Psu 1</TableCell>
                    <TableCell>Psu 2</TableCell>
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
