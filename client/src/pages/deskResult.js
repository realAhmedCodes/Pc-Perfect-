
import React from "react";
import { CpuDetail } from "../component-detail/CpuDetail";
import { MoboDetail } from "../component-detail/MoboDetail";
import { GpuDetail } from "../component-detail/GpuDetail";
import { RamDetail } from "../component-detail/RamDetail";
import { PsuDetail } from "../component-detail/PsuDetail";
import { StorageDetail } from "../component-detail/StorageDetail";
import { CaseDetail } from "../component-detail/CaseDetail";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
//import { addRec } from "../features/Store";
import styles from "../style/DeskResult.module.css";
import ssdPng from "../icons/ssd.png";
import chipPng from "../icons/chip.png";
import moboPng from "../icons/mobo.png";
import gpuPng from "../icons/gpu.png";
import casePng from "../icons/case.png";
import psuPng from "../icons/psu.png";
import arrowPng from "../icons/arrow-left.png";
import ramPng from "../icons/ram.png";
import rightArrowPng from "../icons/right-arrow.png";
 import { Navbar } from "../pages/navbar";
import { useNavigate } from "react-router-dom";
import { addDetail } from "../features/Details";
import { ListButton } from "../pages/ListButton";

export const DeskResult = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const detailsCard = (event) => {
    event.preventDefault();

    dispatch(
      addDetail({
        modelCpu,
        modelGpu,
        modelPsu,
        modelRam,
        modelMobo,
        modelCase,
        modelStorage,
      })
    );
  };

  const {
    num1,
    num2,
    usage,
    os,
    type,
    cpuBrand,
    moboBrand,
    gpuBrand,
    ramSize,
    casingBrand,
    storeType,
    psuBrand,
    build,
  } = useSelector((state) => state.recs);

  const [viewCustom, setViewCustom] = useState(false);
  
  const [storages, setStorages] = useState([]);
  const [filteredStorages, setFilteredStorages] = useState([]);
  const [cpus, setCpus] = useState([]);
  const [filteredCpu, setFilteredCpu] = useState([]);
  const [mobos, setMobos] = useState([]);
  const [filteredMobo, setFilteredMobo] = useState([]);
  const [gpus, setGpus] = useState([]);
  const [filteredGpu, setFilteredGpu] = useState([]);
  const [rams, setRams] = useState([]);
  const [filteredRam, setFilteredRam] = useState([]);
  const [casings, setCasings] = useState([]);
  const [filteredCase, setFilteredCase] = useState([]);
  const [psus, setPsus] = useState([]);
  const [filteredPsu, setFilteredPsu] = useState([]);
  //******************************** */
  const [selCpu, setSelCpu] = useState([]);
  const [selGpu, setSelGpu] = useState([]);
  const [selMobo, setSelMobo] = useState([]);
  const [selRam, setSelRam] = useState([]);
  const [selCase, setSelCase] = useState([]);
  const [selPsu, setSelPsu] = useState([]);
  const [selStorage, setSelStorage] = useState([]);
  //*************************Show details */
  const [showCpu, setShowCpu] = useState(false);
  const [showMobo, setShowMobo] = useState(false);
  const [showRam, setShowRam] = useState(false);
  const [showPsu, setShowPsu] = useState(false);
  const [showCasing, setShowCasing] = useState(false);
  const [showStorage, setShowStorage] = useState(false);
  const [showGpu, setShowGpu] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:3001/storages");
        setStorages(resp.data.storage);
        
        const moboRes = await axios.get("http://localhost:3001/mobos");
        setMobos(moboRes.data);
        const cpuRes = await axios.get("http://localhost:3001/processors");
        setCpus(cpuRes.data.processors);

        const gpuRes = await axios.get("http://localhost:3001/gpus");
        setGpus(gpuRes.data);
        const ramRes = await axios.get("http://localhost:3001/rams");
        setRams(ramRes.data.rams);
        const psuRes = await axios.get("http://localhost:3001/psus");
        setPsus(psuRes.data.psus);
        const casingRes = await axios.get("http://localhost:3001/cases");
        setCasings(casingRes.data.cases);
      } catch (err) {
        console.log("There is an error:", err);
      }
    };

    fetchData();
  }, []); 
 

const [cookies, setCookies] = useCookies(["access_token"]);

  let cpuPrice1;
  let cpuPrice2;
  let moboPrice1;
  let moboPrice2;
  let gpuPrice1;
  let gpuPrice2;
  let ramPrice1;
  let ramPrice2;
  let casePrice1;
  let casePrice2;
  let storePrice1;
  let storePrice2;
  let psuPrice1;
  let psuPrice2;
  if (build === "Custom Build" && usage === "Gaming") {
    cpuPrice1 = 0.27 * num1;
    cpuPrice2 = 0.27 * num2;
    gpuPrice1 = 0.33 * num1;
    gpuPrice2 = 0.33 * num2;
    ramPrice1 = 0.1 * num1;
    ramPrice2 = 0.1 * num2;
    moboPrice1 = 0.1 * num1;
    moboPrice2 = 0.1 * num2;
    casePrice1 = 0.5 * num1;
    casePrice2 = 0.5 * num2;
    storePrice1 = 0.5 * num1;
    storePrice2 = 0.5 * num2;
    psuPrice1 = 0.1 * num1;
    psuPrice2 = 0.1 * num2;
  } else if (build === "Custom Build" && usage === "Office Work") {
    cpuPrice1 = 0.3 * num1;
    cpuPrice2 = 0.3 * num2;
    gpuPrice1 = 0.1 * num1;
    gpuPrice2 = 0.1 * num2;
    ramPrice1 = 0.2 * num1;
    ramPrice2 = 0.2 * num2;
    moboPrice1 = 0.15 * num1;
    moboPrice2 = 0.15 * num2;
    casePrice1 = 0.5 * num1;
    casePrice2 = 0.5 * num2;
    storePrice1 = 0.1 * num1;
    storePrice2 = 0.1 * num2;
    psuPrice1 = 0.1 * num1;
    psuPrice2 = 0.1 * num2;
  } else if (build === "Custom Build" && usage === "Home Usage") {
    cpuPrice1 = 0.3 * num1;
    cpuPrice2 = 0.3 * num2;
    gpuPrice1 = 0.18 * num1;
    gpuPrice2 = 0.18 * num2;
    ramPrice1 = 0.8 * num1;
    ramPrice2 = 0.8 * num2;
    moboPrice1 = 0.14 * num1;
    moboPrice2 = 0.14 * num2;
    casePrice1 = 0.8 * num1;
    casePrice2 = 0.8 * num2;
    storePrice1 = 0.12 * num1;
    storePrice2 = 0.12 * num2;
    psuPrice1 = 0.1 * num1;
    psuPrice2 = 0.1 * num2;
  }
 

  useEffect(() => {
    if (type === "Desktops") {
     if (build === "Custom Build") {
        //***************Storage  */
        if (storeType === "ssd") {
          const filteredStorage = storages.filter(
            (storage) =>
              storage.price >= storePrice1 &&
              storage.price <= storePrice2 &&
              storage.interface === "SATA III"
          );

          setFilteredStorages(filteredStorage);
        } else if (storeType === "nvme") {
          const filteredStorage = storages.filter(
            (store) =>
              store.price >= storePrice1 &&
              store.price <= storePrice2 &&
              store.interface === "NVMe"
          );

          setFilteredStorages(filteredStorage);
        } else if (storeType === "hd") {
          const filteredStorage = storages.filter(
            (store) =>
              store.price >= storePrice1 &&
              store.price <= storePrice2 &&
              store.interface === "SATA 6Gb/s"
          );
          setFilteredStorages(filteredStorage);
        } else if (storeType === "Any") {
          const filteredStorage = storages.filter(
            (store) => store.price >= storePrice1 && store.price <= storePrice2
          );
          setFilteredStorages(filteredStorage);
        }
      
        //CPu Fillter

      
          if (cpus !== null && type === "Desktops" && build === "Custom Build") {
          if (cpuBrand === "Intel") {
            const filteredCpu = cpus.filter(
              (cpu) =>
                cpu.price >= cpuPrice1 &&
                cpu.price <= cpuPrice2 &&
                cpu.brand === "Intel"
            );

            setFilteredCpu(filteredCpu);
          } else if (cpuBrand === "Ryzen") {
            const filteredCpu = cpus.filter(
              (cpu) =>
                cpu.price >= cpuPrice1 &&
                cpu.price <= cpuPrice2 &&
                cpu.brand === "AMD"
            );
            setFilteredCpu(filteredCpu);
          } else if (cpuBrand === "Any") {
            const filteredCpu = cpus.filter(
              (cpu) => cpu.price >= cpuPrice1 && cpu.price <= cpuPrice2
            );
            setFilteredCpu(filteredCpu);
          }
        }

        //Mohterboard Fillter
        if (moboBrand === "Any") {
          const filteredMobo = mobos.filter(
            (mobo) => mobo.price >= moboPrice1 && mobo.price <= moboPrice2
          );
          setFilteredMobo(filteredMobo);
        } else  {
          const filteredMobo = mobos.filter(
            (mobo) =>
              mobo.price >= moboPrice1 &&
              mobo.price <= moboPrice2 &&
              mobo.brand === moboBrand
          );
          setFilteredMobo(filteredMobo);
        } 

        //********GPU Filter
        if (gpuBrand === "Any") {
          const filteredGpu = gpus.filter(
            (gpu) => gpu.price >= gpuPrice1 && gpu.price <= gpuPrice2
          );
          setFilteredGpu(filteredGpu);
        } else   {
          const filteredGpu = gpus.filter(
            (gpu) =>
              gpu.price >= gpuPrice1 &&
              gpu.price <= gpuPrice2 &&
              gpu.brand === gpuBrand
          );
          setFilteredGpu(filteredGpu);
        } 

        //**************RAM Filter */

        if (ramSize === "Any")  {
          const filteredRam = rams.filter(
            (ram) => ram.price >= ramPrice1 && ram.price <= ramPrice2
          );
          setFilteredRam(filteredRam);
        } else  {
          const filteredRam = rams.filter(
            (ram) =>
              ram.price >= ramPrice1 &&
              ram.price <= ramPrice2 &&
              ram.size === ramSize
          );
          setFilteredRam(filteredRam);
        } 
        

        //**************Casing Filter */
        if (casingBrand === "Any")  {
          const filteredCase = casings.filter(
            (casing) => casing.price >= casePrice1 && casing.price <= casePrice2
          );
          setFilteredCase(filteredCase);
        }
         else  {
          const filteredCase = casings.filter(
            (casing) =>
              casing.price >= casePrice1 &&
              casing.price <= casePrice2 &&
              casing.brand === casingBrand
          );
          setFilteredCase(filteredCase);
        } 
       
        //*************Psu 
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
    }
  }, [
    build,
    os,
    num1,
    num2,
    usage,
 
    cpuBrand,
    cpuPrice1,
    cpuPrice2,
    moboBrand,
    gpuBrand,
    ramSize,
    casingBrand,
    storeType,
    storages,
    casings,
    type,
    psuBrand,
    psuPrice1,
    psuPrice2,
    gpuPrice1,
    gpuPrice2,
    moboPrice1,
    moboPrice2,
    ramPrice1,
    ramPrice2,
    casePrice1,
    casePrice2,
    storePrice1,
    storePrice2,
    psus,
    rams,
    gpus,
    cpus,
    mobos,
  ]);

  const handleSelCpu = async (e) => {
    const selectedName = e.target.value;
    const selectedCpu = filteredCpu?.find((x) => x.name === selectedName);

    if (selectedCpu) {
      setSelCpu(selectedCpu);
      //console.log(selCpu.cores);
    }
  };
  const handleSelGpu = async (e) => {
    const selectedName = e.target.value;
    const selectedGpu = filteredGpu?.find((x) => x.name === selectedName);

    if (selectedGpu) {
      setSelGpu(selectedGpu);
      //console.log(selectedGpu);
    } else {
      //console.log("empty ");
    }
  };
  const handleSelMobo = async (e) => {
    const selectedName = e.target.value;
    const selectedMobo = filteredMobo?.find((x) => x.model === selectedName);

    if (selectedMobo) {
      setSelMobo(selectedMobo);
      //console.log(selectedMobo);
    }
  };
  const handleSelRam = async (e) => {
    const selectedName = e.target.value;
    const selectedRam = filteredRam?.find((x) => x.model === selectedName);

    if (selectedRam) {
      setSelRam(selectedRam);
      //console.log(selectedRam);
    }
  };
  const handleSelStorage = async (e) => {
    const selectedName = e.target.value;
    const selectedStorage = filteredStorages?.find(
      (x) => x.model === selectedName
    );

    if (selectedStorage) {
      setSelStorage(selectedStorage);
      //console.log(selectedStorage);
    }
  };
  const handleSelPsu = async (e) => {
    const selectedName = e.target.value;
    const selectedPsu = filteredPsu?.find((x) => x.model === selectedName);

    if (selectedPsu) {
      setSelPsu(selectedPsu);
      //console.log(selectedPsu);
    }
  };
  const handleSelCase = async (e) => {
    const selectedName = e.target.value;
    const selectedCase = filteredCase?.find((x) => x.model === selectedName);

    if (selectedCase) {
      setSelCase(selectedCase);
      //console.log(selectedCase);
    }
  };
  /*useEffect(
    () => {
      if (selCpu) {
        //console.log(selCpu);
      }
      if (selMobo) {
        //console.log(selMobo);
      }
      if (selGpu) {
        console.log(selGpu);
      }
      if (selPsu) {
        console.log(selPsu);
      }
      if (selStorage) {
        console.log(selStorage);
      }
      if (selCase) {
        console.log(selCase);
      }
      if (selRam) {
        console.log(selRam);
      }
    },
    [selCpu],
    [selMobo],
    [selGpu],
    [selPsu],
    [selStorage],
    [selCase],
    [selRam]
  );

*/
  const modelCpu = selCpu.name;
  const modelGpu = selGpu.name;
  const modelPsu = selPsu.model;
  const modelRam = selRam.model;
  const modelMobo = selMobo.model;
  const modelCase = selCase.model;
  const modelStorage = selStorage.model;
  
  /*const Brandcase= casingBrand;
   const Brandcpu= cpuBrand;
    const Brandmobo= moboBrand;
     const Brandgpu= gpuBrand;
      const Sizeram= ramSize;
       const Brandpsu= psuBrand;
       const Typestore= storeType;*/

  

  const showCustom = () => {
    if (viewCustom === true) {
      setViewCustom(false);
    } else if (viewCustom === false) {
      setViewCustom(true);
    }
  };
  const totalPrice =
    parseFloat(selCpu.price) +
    parseFloat(selGpu.price) +
    parseFloat(selPsu.price) +
    parseFloat(selCase.price) +
    parseFloat(selMobo.price) +
    parseFloat(selRam.price) +
    parseFloat(selStorage.price);

  const cpuShow = () => {
    setShowCpu(!showCpu);
  };
  const MoboShow = () => {
    setShowMobo(!showMobo);
  };
  const GpuShow = () => {
    setShowGpu(!showGpu);
  };
const RamShow = () => {
  setShowRam(!showRam);
};
const PsuShow = () => {
  setShowPsu(!showPsu);
};
const StorageShow = () => {
  setShowStorage(!showStorage);
};
const CaseShow = () => {
  setShowCasing(!showCasing);
};

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.grid_container}>
          <div className={styles.select_container}>
            <select
              className={styles.dropdown_container}
              onClick={handleSelCpu}
            >
              <option className={styles.select_values} value="cpu">
                Select CPU
              </option>
              {filteredCpu.map((cpu) => {
                return (
                  <option key={cpu.id} value={cpu.id}>
                    {cpu.name}
                  </option>
                );
              })}
            </select>

            <select
              className={styles.dropdown_container}
              onClick={handleSelMobo}
            >
              <option className={styles.select_values} value="mobo">
                Select Mobo
              </option>
              {filteredMobo.map((mobo) => {
                return (
                  <option key={mobo.id} value={mobo.id}>
                    {mobo.model}
                  </option>
                );
              })}
            </select>

            <select
              className={styles.dropdown_container}
              onClick={handleSelGpu}
            >
              <option className={styles.select_values} value="gpu">
                Select GPU
              </option>
              {filteredGpu.map((gpu) => {
                return (
                  <option key={gpu.id} value={gpu.id}>
                    {gpu.name}
                  </option>
                );
              })}
            </select>

            <select
              className={styles.dropdown_container}
              onClick={handleSelRam}
            >
              <option className={styles.select_values} value="ram">
                Select Ram
              </option>
              {filteredRam.map((ram) => {
                return (
                  <option key={ram.id} value={ram.id}>
                    {ram.model}
                  </option>
                );
              })}
            </select>

            <select
              className={styles.dropdown_container}
              onClick={handleSelCase}
            >
              <option className={styles.select_values} value="case">
                Select Casing
              </option>
              {filteredCase.map((casing) => {
                return (
                  <option key={casing.id} value={casing.id}>
                    {casing.model}
                  </option>
                );
              })}
            </select>
            <select
              className={styles.dropdown_container}
              onClick={handleSelStorage}
            >
              <option className={styles.select_values} value="store">
                Select Storage
              </option>
              {filteredStorages.map((storage) => {
                return (
                  <option key={storage.id} value={storage.id}>
                    {storage.model}
                  </option>
                );
              })}
            </select>

            <select
              className={styles.dropdown_container}
              onClick={handleSelPsu}
            >
              <option className={styles.select_values} value="psu">
                Select Psus
              </option>
              {filteredPsu.map((psus) => {
                return (
                  <option key={psus.id} value={psus.id}>
                    {psus.model}
                  </option>
                );
              })}
            </select>

            <button className={styles.customButton} onClick={detailsCard}>
              Show Build
            </button>
          </div>
        </div>

        {viewCustom === false ? (
          <>
            <div className={styles.showCustoms}>
              <div className={styles.arrow_png}>
                <h2 className={styles.top_heading}>Components</h2>
                <img
                  className={styles.arrow}
                  onClick={showCustom}
                  src={arrowPng}
                  alt="arrow"
                />
              </div>
              <div className={styles.png_div}>
                <img
                  className={styles.component_png}
                  src={chipPng}
                  alt="cpu-png"
                />
                <h2 className={styles.component_h2}>CPU</h2>
              </div>
              <div className={styles.png_div}>
                <img
                  className={styles.component_png}
                  src={moboPng}
                  alt="cpu-png"
                />
                <h2 className={styles.component_h2}>Mobo</h2>
              </div>
              <div className={styles.png_div}>
                <img
                  className={styles.component_png}
                  src={gpuPng}
                  alt="cpu-png"
                />
                <h2 className={styles.component_h2}>GPU</h2>
              </div>
              <div className={styles.png_div}>
                <img
                  className={styles.component_png}
                  src={ramPng}
                  alt="cpu-png"
                />
                <h2 className={styles.component_h2}>Ram</h2>
              </div>
              <div className={styles.png_div}>
                <img
                  className={styles.component_png}
                  src={casePng}
                  alt="cpu-png"
                />
                <h2 className={styles.component_h2}>Casing</h2>
              </div>
              <div className={styles.png_div}>
                <img
                  className={styles.component_png}
                  src={ssdPng}
                  alt="cpu-png"
                />
                <h2 className={styles.component_h2}>Storage</h2>
              </div>
              <div className={styles.png_div}>
                <img
                  className={styles.component_png}
                  src={psuPng}
                  alt="cpu-png"
                />
                <h2 className={styles.component_h2}>Psu</h2>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.custom_card}>
            <div className={styles.top_div}>
              <img
                onClick={showCustom}
                className={styles.right_arrow}
                src={rightArrowPng}
                alt="back-arrow"
              />
              <h2>My List</h2>
              {cookies.access_token ? (
                <ListButton totalPrice={totalPrice}></ListButton>
              ) : (
                ""
              )}
            </div>
            <div className={styles.custom_text}>
              <h2 className={styles.cus1_h2}>Component</h2>
              <h2 className={styles.cus2_h2}>Selected Product</h2>
            </div>
            <div className={styles.cpu_div}>
              <div className={styles.cpu_png_div}>
                <img className={styles.cpu_png} src={chipPng} alt="cpu-png" />
                <h2 className={styles.cpu_h2}>CPU</h2>
              </div>
              <div className={styles.cpu_component_text} onClick={cpuShow}>
                <h2 className={styles.cpu_txt1} onClick={cpuShow}>
                  {selCpu.brand}
                </h2>
                <h2 className={styles.cpu_txt2} onClick={cpuShow}>
                  {selCpu.name}
                </h2>
              </div>
            </div>

            <div className={styles.mobo_div}>
              <div className={styles.mobo_png_div}>
                <img className={styles.mobo_png} src={moboPng} alt="mobo-png" />
                <h2 className={styles.mobo_h2}>Motherboard</h2>
              </div>
              <div className={styles.mobo_component_text} onClick={MoboShow}>
                <h2 className={styles.mobo_txt1} onClick={MoboShow}>
                  {selMobo.brand}
                </h2>
                <h2 className={styles.mobo_txt2} onClick={MoboShow}>
                  {selMobo.model}{" "}
                  {selMobo.compatible !== selCpu.compatible ? (
                    <p className={styles.compatible}>
                      Motherboard is not compatible
                    </p>
                  ) : (
                    ""
                  )}
                </h2>
              </div>
            </div>

            <div className={styles.gpu_div}>
              <div className={styles.gpu_png_div}>
                <img className={styles.gpu_png} src={gpuPng} alt="gpu-png" />
                <h2 className={styles.gpu_h2}>Gpu</h2>
              </div>
              <div className={styles.gpu_component_text} onClick={GpuShow}>
                <h2 className={styles.gpu_txt1} onClick={GpuShow}>
                  {selGpu.brand}
                </h2>
                <h2 className={styles.gpu_txt2} onClick={GpuShow}>
                  {selGpu.name}
                </h2>
              </div>
            </div>

            <div className={styles.ram_div}>
              <div className={styles.ram_png_div}>
                <img className={styles.ram_png} src={ramPng} alt="ram-png" />
                <h2 className={styles.ram_h2}>Ram</h2>
              </div>
              <div className={styles.ram_component_text} onClick={RamShow}>
                <h2 className={styles.ram_txt1} onClick={RamShow}>
                  {selRam.brand}
                </h2>
                <h2 className={styles.ram_txt2} onClick={RamShow}>
                  {selRam.model}
                </h2>
              </div>
            </div>

            <div className={styles.case_div}>
              <div className={styles.case_png_div}>
                <img className={styles.case_png} src={casePng} alt="case-png" />
                <h2 className={styles.case_h2}>Casing</h2>
              </div>
              <div className={styles.case_component_text} onClick={CaseShow}>
                <h2 className={styles.case_txt1} onClick={CaseShow}>
                  {selCase.brand}
                </h2>
                <h2 className={styles.case_txt2} onClick={CaseShow}>
                  {selCase.model}
                </h2>
              </div>
            </div>

            <div className={styles.storage_div}>
              <div className={styles.storage_png_div}>
                <img
                  className={styles.storage_png}
                  src={ssdPng}
                  alt="storage-png"
                />
                <h2 className={styles.storage_h2}>Storage</h2>
              </div>
              <div
                className={styles.storage_component_text}
                onClick={StorageShow}
              >
                <h2 className={styles.storage_txt1} onClick={StorageShow}>
                  {selStorage.brand}
                </h2>
                <h2 className={styles.storage_txt2} onClick={StorageShow}>
                  {selStorage.model}
                </h2>
              </div>
            </div>

            <div className={styles.psu_div}>
              <div className={styles.psu_png_div}>
                <img className={styles.psu_png} src={psuPng} alt="psu-png" />
                <h2 className={styles.psu_h2}>Psu</h2>
              </div>
              <div className={styles.psu_component_text} onClick={PsuShow}>
                <h2 className={styles.psu_txt1} onClick={PsuShow}>
                  {selPsu.brand}
                </h2>
                <h2 className={styles.psu_txt2} onClick={PsuShow}>
                  {selPsu.model}
                </h2>
              </div>
            </div>
            <div className={styles.totalPrice}>
              <h2 className={styles.totalPrice_h2}>
                Total Price : {totalPrice}
              </h2>
            </div>
          </div>
        )}
      </div>

      {showCpu && (
        <CpuDetail showCpuFunc={cpuShow} cpuValue={showCpu}></CpuDetail>
      )}
      {showMobo && (
        <MoboDetail showMoboFunc={MoboShow} MoboValue={showMobo}></MoboDetail>
      )}
      {showGpu && (
        <GpuDetail showGpuFunc={GpuShow} GpuValue={showGpu}></GpuDetail>
      )}

      {showRam && (
        <RamDetail showRamFunc={RamShow} RamValue={showRam}></RamDetail>
      )}

      {showPsu && (
        <PsuDetail showPsuFunc={PsuShow} PsuValue={showPsu}></PsuDetail>
      )}

      {showStorage && (
        <StorageDetail
          showStorageFunc={StorageShow}
          StorageValue={showStorage}
        ></StorageDetail>
      )}

      {showCasing && (
        <CaseDetail
          showCasingFunc={CaseShow}
          CaseValue={showCasing}
        ></CaseDetail>
      )}
    </div>
  );
};

//const num1Values = [];
/*let num1 = 0;
  let num2 = 0;
  let usage = "";
  let os = "";
  let build = "";
  let type = "";
  let cpuBrand;
  let moboBrand = "";
  let gpuBrand = "";
  let ramSize = "";
  let casingBrand = "";
  let storeType = "";
  let psuBrand = "";*/

/*for (let i = 0; i < recList.length; i++) {
    //num1Values.push(recList[i].num1);
    num1 = recList[i].num1;
    num2 = recList[i].num2;
    usage = recList[i].usage;
    os = recList[i].os;
    build = recList[i].build;
    type = recList[i].type;
    cpuBrand = recList[i].cpuBrand;
    moboBrand = recList[i].moboBrand;
    gpuBrand = recList[i].gpuBrand;
    ramSize = recList[i].ramSize;
    casingBrand = recList[i].casingBrand;
    storeType = recList[i].storeType;
    psuBrand = recList[i].psuBrand;
  }
  /*
console.log(num1);
console.log(num2);
console.log(os);
console.log(type);
console.log(build);
console.log(cpuBrand);
console.log(moboBrand);
console.log(gpuBrand);
console.log(ramSize);
console.log(casingBrand);
console.log(psuBrand);
console.log(storeType);
console.log(usage);*/

/* return (
    <div>
      <div>
        
        {build === "Custom Build" ? (
          <div>
            <div className="container">
              <div className="select-container">
                <select className="dropdown" onClick={handleSelCpu}>
                  <option className="select-values" value="cpu">
                    Select CPU
                  </option>
                  {filteredCpu.map((cpu) => {
                    return (
                      <option key={cpu.id} value={cpu.id}>
                        {cpu.name}
                      </option>
                    );
                  })}
                </select>

                <select
                  className="dropdown"
                  onChange={(e) => {
                    const c = mobos?.find((x) => x.model === e.target.value);
                    console.log(c);
                  }}
                >
                  <option className="select-values" value="mobo">
                    Select Mobo
                  </option>
                  {filteredMobo.map((mobo) => {
                    return (
                      <option key={mobo.id} value={mobo.id}>
                        {mobo.model}
                      </option>
                    );
                  })}
                </select>

                <select
                  className="dropdown"
                  onChange={(e) => {
                    const c = gpus?.find((x) => x.name === e.target.value);
                    console.log(c);
                  }}
                >
                  <option className="select-values" value="gpu">
                    Select GPU
                  </option>
                  {filteredGpu.map((gpu) => {
                    return (
                      <option key={gpu.id} value={gpu.id}>
                        {gpu.name}
                      </option>
                    );
                  })}
                </select>

                <select
                  className="dropdown"
                  onChange={(e) => {
                    const c = rams?.find((x) => x.name === e.target.value);
                    console.log(c);
                  }}
                >
                  <option className="select-values" value="ram">
                    Select Ram
                  </option>
                  {filteredRam.map((ram) => {
                    return (
                      <option key={ram.id} value={ram.id}>
                        {ram.model}
                      </option>
                    );
                  })}
                </select>

                <select
                  className="dropdown"
                  onChange={(e) => {
                    const c = casings?.find((x) => x.name === e.target.value);
                    console.log(c);
                  }}
                >
                  <option className="select-values" value="cpu">
                    Select Casing
                  </option>
                  {filteredCase.map((casing) => {
                    return (
                      <option key={casing.id} value={casing.id}>
                        {casing.model}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="dropdown"
                  onChange={(e) => {
                    const c = storages?.find((x) => x.name === e.target.value);
                    console.log(c);
                  }}
                >
                  <option className="select-values" value="store">
                    Select Storage
                  </option>
                  {filteredStorages.map((storage) => {
                    return (
                      <option key={storage.id} value={storage.id}>
                        {storage.model}
                      </option>
                    );
                  })}
                </select>

                <select
                  className="dropdown"
                  onChange={(e) => {
                    const c = psus?.find((x) => x.name === e.target.value);
                    console.log(c);
                  }}
                >
                  <option className="select-values" value="psu">
                    Select Psus
                  </option>
                  {filteredPsu.map((psus) => {
                    return (
                      <option key={psus.id} value={psus.id}>
                        {psus.model}
                      </option>
                    );
                  })}
                </select>
                <button className="customButton" onClick={showCustom}>
                  Show Build
                </button>
              </div>
            </div>
            <div className="showCustoms">
              {viewCustom === true ? (
                <>
                  {selCpu === "" ? (
                    <>
                      <h1>Select A CPU</h1>
                    </>
                  ) : (
                    <div className="cusCpu">
                      <h2>CPU</h2>
                      <p>
                        {"brand: "}
                        {selCpu.brand}
                        <br />
                        {"name: "}
                        {selCpu.name}
                        <br />
                        {"generation: "}
                        {selCpu.generation}
                        <br />
                        {"cores: "}
                        {selCpu.cores}
                        <br />
                        {"threads: "}
                        {selCpu.threads}
                        <br />
                        {"base_clock: "}
                        {selCpu.base_clock}
                        <br />
                        {"max_clock: "}
                        {selCpu.max_clock}
                        <br />
                        {"cache: "}
                        {selCpu.cache}
                        <br />
                        {"compatible: "}
                        {selCpu.compatible}
                        <br />
                        {"price: "}
                        {selCpu.price}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                "ddc"
              )}
            </div>
          </div>
        ) : (
          <>
            <h2>deks</h2>
          </>
        )}
      </div>
    </div>
  );
};*/


/*useEffect(() => {
    if (type === "Desktops") {
     if (build === "Custom Build") {
        //***************Storage  */
        /*if (storeType === "ssd") {
          const filteredStorage = storages.filter(
            (storage) =>
              storage.price >= storePrice1 &&
              storage.price <= storePrice2 &&
              storage.interface === "SATA III"
          );

          setFilteredStorages(filteredStorage);
        } else if (storeType === "nvme") {
          const filteredStorage = storages.filter(
            (store) =>
              store.price >= storePrice1 &&
              store.price <= storePrice2 &&
              store.interface === "NVMe"
          );

          setFilteredStorages(filteredStorage);
        } else if (storeType === "hd") {
          const filteredStorage = storages.filter(
            (store) =>
              store.price >= storePrice1 &&
              store.price <= storePrice2 &&
              store.interface === "SATA 6Gb/s"
          );
          setFilteredStorages(filteredStorage);
        } else if (storeType === "Any") {
          const filteredStorage = storages.filter(
            (store) => store.price >= storePrice1 && store.price <= storePrice2
          );
          setFilteredStorages(filteredStorage);
        }

        //CPu Fillter

        if (cpus !== null && type === "Desktops" && build === "Custom Build") {
          if (cpuBrand === "Intel") {
            const filteredCpu = cpus.filter(
              (cpu) =>
                cpu.price >= cpuPrice1 &&
                cpu.price <= cpuPrice2 &&
                cpu.brand === "Intel"
            );

            setFilteredCpu(filteredCpu);
          } else if (cpuBrand === "Ryzen") {
            const filteredCpu = cpus.filter(
              (cpu) =>
                cpu.price >= cpuPrice1 &&
                cpu.price <= cpuPrice2 &&
                cpu.brand === "AMD"
            );
            setFilteredCpu(filteredCpu);
          } else if (cpuBrand === "Any") {
            const filteredCpu = cpus.filter(
              (cpu) => cpu.price >= cpuPrice1 && cpu.price <= cpuPrice2
            );
            setFilteredCpu(filteredCpu);
          }
        }

        //Mohterboard Fillter
        if (moboBrand === "Asus") {
          const filteredMobo = mobos.filter(
            (mobo) =>
              mobo.price >= moboPrice1 &&
              mobo.price <= moboPrice2 &&
              mobo.brand === "Asus"
          );
          setFilteredMobo(filteredMobo);
        } else if (moboBrand === "MSI") {
          const filteredMobo = mobos.filter(
            (mobo) =>
              mobo.price >= moboPrice1 &&
              mobo.price <= moboPrice2 &&
              mobo.brand === "MSI"
          );
          setFilteredMobo(filteredMobo);
        } else if (moboBrand === "ASRock") {
          const filteredMobo = mobos.filter(
            (mobo) =>
              mobo.price >= moboPrice1 &&
              mobo.price <= moboPrice2 &&
              mobo.brand === "ASRock"
          );
          setFilteredMobo(filteredMobo);
        } else if (moboBrand === "Gigabyte") {
          const filteredMobo = mobos.filter(
            (mobo) =>
              mobo.price >= moboPrice1 &&
              mobo.price <= moboPrice2 &&
              mobo.brand === "Gigabyte"
          );
          setFilteredMobo(filteredMobo);
        } else if (moboBrand === "Any") {
          const filteredMobo = mobos.filter(
            (mobo) => mobo.price >= moboPrice1 && mobo.price <= moboPrice2
          );
          setFilteredMobo(filteredMobo);
        }

        //********GPU Filter
        if (gpuBrand === "Asus") {
          const filteredGpu = gpus.filter(
            (gpu) =>
              gpu.price >= gpuPrice1 &&
              gpu.price <= gpuPrice2 &&
              gpu.brand === "Asus"
          );

          setFilteredGpu(filteredGpu);
        } else if (gpuBrand === "MSI") {
          const filteredGpu = gpus.filter(
            (gpu) =>
              gpu.price >= gpuPrice1 &&
              gpu.price <= gpuPrice2 &&
              gpu.brand === "MSI"
          );
          setFilteredGpu(filteredGpu);
        } else if (gpuBrand === "ASRock") {
          const filteredGpu = gpus.filter(
            (gpu) =>
              gpu.price >= gpuPrice1 &&
              gpu.price <= gpuPrice2 &&
              gpu.brand === "ASRock"
          );
          setFilteredGpu(filteredGpu);
        } else if (gpuBrand === "Gigabyte") {
          const filteredGpu = gpus.filter(
            (gpu) =>
              gpu.price >= gpuPrice1 &&
              gpu.price <= gpuPrice2 &&
              gpu.brand === "Gigabyte"
          );
          setFilteredGpu(filteredGpu);
        } else if (gpuBrand === "Any") {
          const filteredGpu = gpus.filter(
            (gpu) => gpu.price >= gpuPrice1 && gpu.price <= gpuPrice2
          );
          setFilteredGpu(filteredGpu);
        }

        //**************RAM Filter */

        /*if (ramSize === "4GB") {
          const filteredRam = rams.filter(
            (ram) =>
              ram.price >= ramPrice1 &&
              ram.price <= ramPrice2 &&
              ram.size === "4GB"
          );
          setFilteredRam(filteredRam);
        } else if (ramSize === "8GB") {
          const filteredRam = rams.filter(
            (ram) =>
              ram.price >= ramPrice1 &&
              ram.price <= ramPrice2 &&
              ram.size === "8GB"
          );
          setFilteredRam(filteredRam);
        } else if (ramSize === "16GB") {
          const filteredRam = rams.filter(
            (ram) =>
              ram.price >= ramPrice1 &&
              ram.price <= ramPrice2 &&
              ram.size === "16GB"
          );
          setFilteredRam(filteredRam);
        } else if (ramSize === "32GB") {
          const filteredRam = rams.filter(
            (ram) =>
              ram.price >= ramPrice1 &&
              ram.price <= ramPrice2 &&
              ram.size === "32GB"
          );
          setFilteredRam(filteredRam);
        } else if (ramSize === "64GB") {
          const filteredRam = rams.filter(
            (ram) =>
              ram.price >= ramPrice1 &&
              ram.price <= ramPrice2 &&
              ram.size === "64GB"
          );
          setFilteredRam(filteredRam);
        } else if (ramSize === "Any") {
          const filteredRam = rams.filter(
            (ram) => ram.price >= ramPrice1 && ram.price <= ramPrice2
          );
          setFilteredRam(filteredRam);
        }

        //**************Casing Filter */
       /* if (casingBrand === "Corsair") {
          const filteredCase = casings.filter(
            (casing) =>
              casing.price >= casePrice1 &&
              casing.price <= casePrice2 &&
              casing.brand === "Corsair"
          );

          setFilteredCase(filteredCase);
        } else if (casingBrand === "NZXT") {
          const filteredCase = casings.filter(
            (casing) =>
              casing.price >= casePrice1 &&
              casing.price <= casePrice2 &&
              casing.brand === "NZXT"
          );
          setFilteredCase(filteredCase);
        } else if (casingBrand === "Cooler Master") {
          const filteredCase = casings.filter(
            (casing) =>
              casing.price >= casePrice1 &&
              casing.price <= casePrice2 &&
              casing.brand === "Cooler Master"
          );
          setFilteredCase(filteredCase);
        } else if (casingBrand === "Lian Li") {
          const filteredCase = casings.filter(
            (casing) =>
              casing.price >= casePrice1 &&
              casing.price <= casePrice2 &&
              casing.brand === "Lian Li"
          );
          setFilteredCase(filteredCase);
        } else if (casingBrand === "Cougar") {
          const filteredCase = casings.filter(
            (casing) =>
              casing.price >= casePrice1 &&
              casing.price <= casePrice2 &&
              casing.brand === "Cougar"
          );
          setFilteredCase(filteredCase);
        } else if (casingBrand === "Any") {
          const filteredCase = casings.filter(
            (casing) => casing.price >= casePrice1 && casing.price <= casePrice2
          );
          setFilteredCase(filteredCase);
        }
        //*************Psu 
        /*if (psuBrand === "bronze") {
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
    }
  }, [
    build,
    os,
    num1,
    num2,
    usage,
 
    cpuBrand,
    cpuPrice1,
    cpuPrice2,
    moboBrand,
    gpuBrand,
    ramSize,
    casingBrand,
    storeType,
    storages,
    casings,
    type,
    psuBrand,
    psuPrice1,
    psuPrice2,
    gpuPrice1,
    gpuPrice2,
    moboPrice1,
    moboPrice2,
    ramPrice1,
    ramPrice2,
    casePrice1,
    casePrice2,
    storePrice1,
    storePrice2,
    psus,
    rams,
    gpus,
    cpus,
    mobos,
  ]);
  */