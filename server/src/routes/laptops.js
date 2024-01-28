import express from "express";

import mongoose from "mongoose";
import { LaptopModel } from "../models/laptops.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const laptops = await LaptopModel.find({});
    res.json({ laptops });
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const laptops = new LaptopModel(req.body);
  try {
    const res = await laptops.save();
    res.json(laptops);
  } catch (err) {
    res.json(err);
  }
});


router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLaptop = await LaptopModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedLaptop) {
      res.json(updatedLaptop);
    } else {
      res.status(404).json({ error: "Laptop not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLaptop = await LaptopModel.findByIdAndDelete(id);
    if (deletedLaptop) {
      res.json({ message: "Laptop deleted successfully" });
    } else {
      res.status(404).json({ error: "Laptop not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
export default router;
