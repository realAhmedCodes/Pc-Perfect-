 import {useNavigate} from 'react-router-dom'
 import { Navbar } from '../pages/navbar'
 import styles from "../style/home.module.css";
 export const Home = ()=>{
   
    const nav = useNavigate()
    const nextPage= ()=>{
        nav("/rec")
    }
    const comparePage=()=>{
        nav("/compare")
    }

    return (
      <div className={styles.main_div}>
        <Navbar></Navbar>
       
      </div>
    );

}


