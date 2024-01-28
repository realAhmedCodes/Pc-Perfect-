import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styles from "../style/Navbar.module.css";
import user from "../icons/user.png";
import {SavedList} from "../pages/SavedList" 
import { useState } from "react";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const nav = useNavigate();
  const[show, setShow] = useState(false)
 const role = window.sessionStorage.getItem("userRole");
  const logout = () => {
    setCookies("access_token", "");
    window.sessionStorage.removeItem("userID");
     window.sessionStorage.removeItem("userRole");
    nav("/");
  };
const showMenu=()=>{
  setShow(!show)
}
const listFunc=()=>{
  nav("/SavedList");
}
const adminPageNav=()=>{
  nav("/db_manage");

}
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/rec">Get Recommendations</Link>
        <Link to="/compare">Compare Components </Link>
      </div>
      {!cookies.access_token ? (
        <Link to="/register">Login/Register</Link>
      ) : (
        <div className={styles.login_btn}>
          <div className={styles.profile}>
            <img
              className={styles.profile_img}
              src={user}
              alt="user image"
              onClick={showMenu}
            />
          </div>
          {show === true ? (
            <div className={styles.menu}>
              <p onClick={listFunc}>My Lists</p>
              {role === "admin" ? <p onClick={adminPageNav}>Database Management</p> : ""}
              <p onClick={logout}>Logout</p>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};


/**/



        