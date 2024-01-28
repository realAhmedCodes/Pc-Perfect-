import express from "express";
import mongoose from "mongoose";
import {MoboModel} from "../models/mobo.js"



const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const mobos = await MoboModel.find({});
    res.json(mobos);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const mobos = new MoboModel(req.body);
  try {
    const result = await mobos.save();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMobo = await MoboModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedMobo) {
      res.json(updatedMobo);
    } else {
      res.status(404).json({ error: "Motherboard not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMobo = await MoboModel.findByIdAndDelete(id);
    if (deleteMobo) {
      res.json({ message: "Motherboard deleted successfully" });
    } else {
      res.status(404).json({ error: "Motherboard not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
export default router;
