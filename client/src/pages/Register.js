import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styles from  "../style/Register.module.css";
import {Navbar} from "../pages/navbar"

 

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/users/register", {
        username,
        password,
        role,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  const Nav=()=>{
    navigate("/login")
  }


  return (
    <div className={styles.main_div}>
      <Navbar></Navbar>

      <div className={styles.authcontainer}>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.main_heading}>Register</h2>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="Role">Role:</label>
            <div className={styles.radioGroup}>
              <label htmlFor="user" className={styles.radioLabel}>
                User:
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={role === "user"}
                  onChange={(event) => setRole(event.target.value)}
                  className={styles.radioInput}
                />
              </label>
              <label htmlFor="admin" className={styles.radioLabel}>
                Admin:
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(event) => setRole(event.target.value)}
                  className={styles.radioInput2}
                />
              </label>
            </div>
          </div>

          <button type="submit" className={styles.authBtn}>
            Register
          </button>
          <h2 className={styles.res_h2} onClick={Nav}>
            Already Registered ?
          </h2>
        </form>
      </div>
    </div>
  );
};
