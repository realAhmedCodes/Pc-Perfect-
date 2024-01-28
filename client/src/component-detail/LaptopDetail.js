import React from 'react'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

export const LaptopDetail = ({ id, infoFunc, infoFuncValue  }) => {
  const { num1, num2, usage, os, type } = useSelector((state) => state.recs);

  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [infoLaptop, setInfoLaptop] = useState(false);
  const [selLaptop, setSelLaptop] = useState({});
    const [closeBtn, setCloseBtn] = useState(infoFuncValue);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const res = await axios.get("http://localhost:3001/laptops");
        setLaptops(res.data.laptops);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLaptops();
  }, []);

  useEffect(() => {
    if (os === "Mac_Os") {
      const filteredLaptops = laptops.filter(
        (laptop) =>
          laptop.price >= parseInt(num1) &&
          laptop.price <= parseInt(num2) &&
          laptop.usage === usage &&
          laptop.brand === "Apple"
      );
      setFilteredLaptops(filteredLaptops);
    } else {
      const filteredLaptops = laptops.filter(
        (laptop) =>
          laptop.price >= parseInt(num1) &&
          laptop.price <= parseInt(num2) &&
          laptop.usage === usage
      );
      setFilteredLaptops(filteredLaptops);
    }
  }, [num1, num2, usage, os, type, laptops]);



useEffect(()=>{
    const selLaptopData = filteredLaptops?.find((x) => x._id === id);
   if (selLaptopData) {
     setSelLaptop(selLaptopData);
     //console.log(selLaptopData);
   }
})
 


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#193a5e", // Change header color here
      color: theme.palette.common.white,
      padding: "6px 4px", // Adjust padding as needed
      textAlign: "left",
      fontSize: 17,
      borderBottom: "1px solid white",
      fontWeight: "bold", // Bold the text
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      padding: "3px 3px",

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
    width: "60%", // Adjust total table width here
    // Center the table horizontally
    borderCollapse: "separate",
    borderSpacing: "0px 4px", // Adjust spacing between rows

    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
    overflow: "hidden", // Hide the overflow to prevent inner content from protruding
  }));
 const ComponentDetailContainer = styled("div")({
   display: "flex",
   justifyContent: "center", // Center horizontally
   alignItems: "center", // Center vertically
   position: "fixed", // Position the component fixed
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent background color
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
    margin: "0", // Remove margin to align with the center
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
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
    if (closeBtn === infoFuncValue) {
      setCloseBtn(!infoFuncValue);
    }
    infoFunc();
  };

  return (
    <>
      {closeBtn === true ? (
        <>
          <ComponentDetailContainer>
            <ComponentDetailWrapper>
              <TableContainer component={Paper}>
                <StyledTable sx={{ minWidth: 850}}>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>
                        <HeadingContainer>
                          <div>Laptop Model</div>
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
                    {Object.entries(selLaptop).map(
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



  

