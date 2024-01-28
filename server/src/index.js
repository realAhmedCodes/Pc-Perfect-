/*import express from "express";
import mongoose from "mongoose";
//import { DesktopModel } from "../models/desktops";

const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://ahmed:pccode@pcapp.nqeix7e.mongodb.net/PcApp?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("Server Running");
});*/

import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import desktopRouter from "./routes/desktops.js";
import laptopRouter from "./routes/laptops.js"
import processorRouter from "./routes/processor.js"
import moboRouter from "./routes/mobo.js"
import gpuRouter from "./routes/gpu.js"
import ramRouter from "./routes/ram.js"
import caseRouter from "./routes/case.js"
import storeRouter from "./routes/storage.js"
import psuRouter from "./routes/psu.js"
import  userRouter  from "./routes/users.js";
import  savedlistRouter  from "./routes/savedLists.js";
 
const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(
  "mongodb+srv://ahmed:pccode@pcapp.nqeix7e.mongodb.net/PcApp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/desktops", desktopRouter);
app.use("/laptops", laptopRouter )
app.use('/processors', processorRouter)
app.use("/mobos", moboRouter);
app.use('/gpus', gpuRouter)
app.use('/rams', ramRouter)
app.use('/cases', caseRouter)
app.use('/storages', storeRouter)
app.use('/psus', psuRouter)
app.use("/users", userRouter);
app.use("/savedList", savedlistRouter);
app.listen(3001, () => {
  console.log("Server Running");
});

