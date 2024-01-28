import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addDetail } from "../features/Details";
import axios from "axios";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Import the Grid component

import "../style/Detail.css";
export const PsuDetail = ({ showPsuFunc, PsuValue }) => {
  const detailsState = useSelector((state) => state.details);

  const {
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
    modelCpu,
    modelGpu,
    modelPsu,
    modelRam,
    modelMobo,
    modelCase,
    modelStorage,
  } = useSelector((state) => state.details);

  const [psus, setPsus] = useState([]);
  const [filteredPsu, setFilteredPsu] = useState([]);

  // Selected Data states

  const [psuData, setPsuData] = useState({});

  //Close Button state
  const [closeBtn, setCloseBtn] = useState(PsuValue);

  //const [closeBtn2, setCloseBtn2] = useState(showCpu);

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

  let psuPrice1;
  let psuPrice2;

  if (build === "Custom Build" && usage === "Gaming") {
    psuPrice1 = 0.1 * num1;
    psuPrice2 = 0.1 * num2;
  } else if (build === "Custom Build" && usage === "Office Work") {
    psuPrice1 = 0.15 * num1;
    psuPrice2 = 0.15 * num2;
  } else if (build === "Custom Build" && usage === "Home Usage") {
    psuPrice1 = 0.14 * num1;
    psuPrice2 = 0.14 * num2;
  }
  useEffect(() => {
    if (build === "Custom Build") {
     if (psuBrand === "bronze") {
       const filteredPsu = psus.filter(
         (psu) =>
           psu.price >= psuPrice1 &&
           psu.price <= psuPrice2 &&
           psu.efficiency_rating === "80 Plus Bronze"
       );

       setFilteredPsu(filteredPsu);
     } else if (psuBrand === "gold") {
       const filteredPsu = psus.filter(
         (psu) =>
           psu.price >= psuPrice1 &&
           psu.price <= psuPrice2 &&
           psu.efficiency_rating === "80 Plus Gold"
       );

       setFilteredPsu(filteredPsu);
     } else if (psuBrand === "platinum") {
       const filteredPsu = psus.filter(
         (psu) =>
           psu.price >= psuPrice1 &&
           psu.price <= psuPrice2 &&
           psu.efficiency_rating === "80 Plus Platinum"
       );
       setFilteredPsu(filteredPsu);

       //console.log(filteredPsu.data);
     } else if (psuBrand === "titanium") {
       const filteredPsu = psus.filter(
         (psu) =>
           psu.price >= psuPrice1 &&
           psu.price <= psuPrice2 &&
           psu.efficiency_rating === "80 Plus Titanium"
       );
       setFilteredPsu(filteredPsu);
     } else if (psuBrand === "Any") {
       const filteredPsu = psus.filter(
         (psu) => psu.price >= psuPrice1 && psu.price <= psuPrice2
       );
       setFilteredPsu(filteredPsu);
     }

      
    }
  }, [build, usage, psuBrand, psuPrice1, psuPrice2, psus]);

  useEffect(() => {
    const selectedPsu = psus?.find((x) => x.model === modelPsu);

    if (selectedPsu) {
      setPsuData(selectedPsu);
      console.log(selectedPsu);
    }
  }, [filteredPsu, modelPsu]);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#193a5e", // Change header color here
      color: theme.palette.common.white,
      padding: "8px 4px", // Adjust padding as needed
      textAlign: "left",
      fontSize: 17,
      borderBottom: "1px solid white",
      fontWeight: "bold", // Bold the text
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      padding: "8px 4px",

      textAlign: "left",
      width: "50%",
      borderBottom: "1px solid lightgray", // Add a line at the bottom of body cells
      borderRight: "1px solid lightgray",
      fontWeight: "bold", // Bold the text
    },
    "&:last-child": {
      borderRight: 0,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTable = styled(Table)(({ theme }) => ({
    width: "80%", // Adjust total table width here
    // Center the table horizontally
    borderCollapse: "separate",
    borderSpacing: "0px 8px", // Adjust spacing between rows

    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
    overflow: "hidden", // Hide the overflow to prevent inner content from protruding
  }));
  const ComponentDetailContainer = styled("div")({
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    height: "100%", // Use full container height
    width: "100%", // Use full container width
    position: "absolute", // Position the component absolutely
    top: 0, // Align to the top of the container
    left: 0, // Align to the left of the container
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background color
    zIndex: 2, // Set a higher z-index to place it above other content
  });
  const HeadingContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    padding: "0 16px",
  });
  const ComponentDetailWrapper = styled("div")({
    width: "fit-content", // Adjust the width to match the table
    margin: "0", // Remove margin to align with the left edge
  });
  const CloseButton = styled("button")({
    borderRadius: "0.5rem",
    background: "white",

    padding: "2px",
    cursor: "pointer",
    color: "black",
    fontWeight: "bold",
    marginRight: "0px",
    fontSize: 14,
    "&:hover": {
      backgroundColor: "#cedce8",
      cursor: "pointer",
    },
  });
  const checkBtn = () => {
    if (closeBtn === PsuValue) {
      setCloseBtn(!PsuValue);
    }
    showPsuFunc();
  };

 

  return (
    <>
      {closeBtn === true ? (
        <>
          <ComponentDetailContainer>
            <ComponentDetailWrapper>
              <TableContainer component={Paper}>
                <StyledTable sx={{ minWidth: 800 }}>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>
                        <HeadingContainer>
                          <div>Power Supply Unit</div>
                        </HeadingContainer>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <HeadingContainer>
                          <div>Information</div>
                          <CloseButton onClick={checkBtn}>Close</CloseButton>
                        </HeadingContainer>
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(psuData).map(
                      ([key, value]) =>
                        key !== "_id" && (
                          <StyledTableRow key={key}>
                            <StyledTableCell>
                              {key.replace("_", " ")}
                            </StyledTableCell>
                            <StyledTableCell>{value}</StyledTableCell>
                          </StyledTableRow>
                        )
                    )}
                  </TableBody>
                </StyledTable>
              </TableContainer>
            </ComponentDetailWrapper>
          </ComponentDetailContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
