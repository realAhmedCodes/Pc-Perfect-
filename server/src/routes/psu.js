import express from "express";

import mongoose from "mongoose";
import { PsuModel } from "../models/psu.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const psus = await PsuModel.find({});
    res.json({ psus });
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const psus = new PsuModel(req.body);
  try {
    const res = await psus.save();
    res.json(psus);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPsu = await PsuModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedPsu) {
      res.json(updatedPsu);
    } else {
      res.status(404).json({ error: "Psu not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPsu = await PsuModel.findByIdAndDelete(id);
    if (deletedPsu) {
      res.json({ message: "Psu deleted successfully" });
    } else {
      res.status(404).json({ error: "Psu not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
export default router;
