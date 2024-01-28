import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../style/savedList.module.css"
 import { Navbar } from "../pages/navbar";

export const SavedList = () => {
  const [lists, setLists] = useState([]);
  const userID = window.sessionStorage.getItem("userID");
  let n=0;

  useEffect(() => {
    const fetchLists = async () => {
      try { 
        const response = await axios.get("http://localhost:3001/savedList");
        if (response.data && Array.isArray(response.data)) {
          
          const userLists = response.data.filter(
            (list) => list.userOwner === userID
          );
          setLists(userLists);
        } else {
          console.log("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.log("API error:", error);
      }
    };
    fetchLists();
  }, [userID]);
   console.log(userID);

  return (
    <div className={styles.main_div}>
   <Navbar></Navbar>
      <h1 className={styles.main_head}>Saved Lists</h1>
      <ul>
        {lists.map((list) => (
          <li key={list._id}>
            <div className={styles.list_div}>
              <h2 className={styles.head_h2}>The List: { n=n + 1}</h2>
              <h3>{list.cpuModel}</h3>
              <h3>{list.motherboardModel}</h3>
              <h3>{list.gpuModel}</h3>
              <h3>{list.ramModel}</h3>
              <h3>{list.caseModel}</h3>
              <h3>{list.storageModel}</h3>
              <h3>{list.psuModel}</h3>
              <h3>{list.totalPrice}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
