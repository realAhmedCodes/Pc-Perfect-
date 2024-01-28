import React, { useState } from "react";
import axios from "axios";
import styles from "../style/ListBtn.module.css"

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

export const ListButton = ({totalPrice}) => {
  const GetUserID =window.sessionStorage.getItem("userID");
  const nav= useNavigate()
  const [cookies, _] = useCookies(["access_token"]);


   const {
     modelCpu,
     modelGpu,
     modelPsu,
     modelRam,
     modelMobo,
     modelCase,
     modelStorage,
   } = useSelector((state) => state.details);

   const [list, setList] = useState({
     cpuModel: "",
     motherboardModel: "",
     gpuModel: "",
     ramModel: "",
     caseModel: "",
     storageModel: "",
     psuModel: "",
     totalPrice:"",
     userOwner: "",
   });


   const addList = async() => {
     setList({
       cpuModel: modelCpu,
       motherboardModel: modelMobo,
       gpuModel: modelGpu,
       ramModel: modelRam,
       caseModel: modelCase,
       storageModel: modelStorage,
       psuModel: modelPsu,
       totalPrice: totalPrice,
       userOwner: GetUserID,
     });

      try {
        await axios.post(
          "http://localhost:3001/savedList",
          { ...list },
          {
            headers: { authorization: cookies.access_token },
          }
        );

        alert("List Created");
       
      } catch (error) {
        console.error("Error adding list:", error);
      }
   };
 
  return (
    <div>
      <button className={styles.list_btn}  onClick={addList}>
        Add List
      </button>
    </div>
  );
};
