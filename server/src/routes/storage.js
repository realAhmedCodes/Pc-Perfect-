import express from "express";

import mongoose from "mongoose";
import { StorageModel } from "../models/storage.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const storage = await StorageModel.find({});
    res.json({ storage });
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const storage = new StorageModel(req.body);
  try {
    const response = await storage.save();
    res.json(storage);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSrorage = await StorageModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedSrorage) {
      res.json(updatedSrorage);
    } else {
      res.status(404).json({ error: "Storage not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStorage = await StorageModel.findByIdAndDelete(id);
    if (deletedStorage) {
      res.json({ message: "Storage deleted successfully" });
    } else {
      res.status(404).json({ error: "Storage not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
export default router;
