import express from "express";

import mongoose from "mongoose";
import { RamModel } from "../models/ram.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const rams = await RamModel.find({});
    res.json({ rams });
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const rams = new RamModel(req.body);
  try {
    const res = await rams.save();
    res.json(rams);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRam = await RamModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedRam) {
      res.json(updatedRam);
    } else {
      res.status(404).json({ error: "Ram not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRam = await RamModel.findByIdAndDelete(id);
    if (deletedRam) {
      res.json({ message: "Ram deleted successfully" });
    } else {
      res.status(404).json({ error: "Ram not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
export default router;
