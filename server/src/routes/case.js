import express from "express";

import mongoose from "mongoose";
import { CaseModel } from "../models/case.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cases = await CaseModel.find({});
    res.json({ cases });
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const cases = new CaseModel(req.body);
  try {
    const response = await cases.save();
    res.json(cases);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCase = await CaseModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedCase) {
      res.json(updatedCase);
    } else {
      res.status(404).json({ error: "Case not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCase = await CaseModel.findByIdAndDelete(id);
    if (deletedCase) {
      res.json({ message: "Case deleted successfully" });
    } else {
      res.status(404).json({ error: "Case not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
export default router;
