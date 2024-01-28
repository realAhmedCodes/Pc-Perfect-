import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Rec } from "./pages/rec";
import { DeskResult } from "./pages/deskResult";
import { recContext } from "./contexts/recContext";
import { LaptopsFunc } from "../src/pages/laptopResult";
import {Compare} from "../src/pages/Compare";
import {DesktopsFunc} from "../src/pages/desktops"
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { SavedList } from "./pages/SavedList";
import { DB_manage } from "./Admin_Management/DB_manage";
import { DesktopPut} from "./Admin_Management/Update/DesktopPut";
import { RamDel } from "../src/Admin_Management/Delete/RamDel";
import {GpuDetail} from "../src/component-detail/GpuDetail"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/rec" element={<Rec></Rec>}></Route>

          <Route path="/laptops" element={<LaptopsFunc></LaptopsFunc>}></Route>
          <Route
            path="/custom_recs"
            element={<DeskResult></DeskResult>}
          ></Route>

          <Route
            path="/desktops"
            element={<DesktopsFunc></DesktopsFunc>}
          ></Route>
          <Route path="/compare" element={<Compare></Compare>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/savedList" element={<SavedList></SavedList>}></Route>
          <Route path="/db_manage" element={<DB_manage></DB_manage>}></Route>
          <Route path="/cpupost" element={<DesktopPut></DesktopPut>}></Route>
          <Route path="/GpuDetail" element={<GpuDetail></GpuDetail>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
