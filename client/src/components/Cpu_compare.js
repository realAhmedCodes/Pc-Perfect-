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

export const CpuCompare = () => {
  const [cpus, setCpus] = useState([]);
  const [selectedCpu1, setSelectedCpu1] = useState("");
  const [selectedCpu2, setSelectedCpu2] = useState("");
  const [Cpu1Data, setCpu1Data] = useState({});
  const [Cpu2Data, setCpu2Data] = useState({});
  const [tableBtn, setTableBtn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cpuRes = await axios.get("http://localhost:3001/processors");
        setCpus(cpuRes.data.processors);
      } catch (err) {
        console.log("There is an error:", err);
      }
    };

    fetchData();
  }, []);

  const handleCpu1Change = (event, newValue) => {
    if (newValue) {
      setSelectedCpu1(newValue);
    }
  };

  const handleCpu2Change = (event, newValue) => {
    if (newValue) {
      setSelectedCpu2(newValue);
    }
  };

  const compareHandle = () => {
    const selcpuData1 = cpus?.find((x) => x.name === selectedCpu1);
    const selcpuData2 = cpus?.find((x) => x.name === selectedCpu2);

    if (selcpuData1) {
      setCpu1Data(selcpuData1);
    }
    if (selcpuData2) {
      setCpu2Data(selcpuData2);
    }
    setTableBtn(true);
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.search_div}>
        <Autocomplete
          id="compoenent1"
          freeSolo
          options={cpus.map((cpu) => cpu.name)}
          value={selectedCpu1}
          onChange={handleCpu1Change}
          className={styles.autocomplete}
          renderInput={(params) => (
            <TextField {...params} label="Search CPU 1" />
          )}
        />
        <button className={styles.compare_button} onClick={compareHandle}>
          Compare
        </button>
        <Autocomplete
          id="compoenent2"
          freeSolo
          options={cpus.map((cpu) => cpu.name)}
          value={selectedCpu2}
          onChange={handleCpu2Change}
          className={styles.autocomplete}
          renderInput={(params) => (
            <TextField {...params} label="Search CPU 2" />
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
                    <TableCell>Processor 1</TableCell>
                    <TableCell>Processor 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(Cpu1Data).map(
                    ([key, value]) =>
                      key !== "_id" &&
                      key !== "compatible" && (
                        <TableRow key={key} className={styles.row_text}>
                          <TableCell>{key.replace(/_/g, " ")}</TableCell>
                          <TableCell>{value}</TableCell>
                          <TableCell>{Cpu2Data[key]}</TableCell>
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
