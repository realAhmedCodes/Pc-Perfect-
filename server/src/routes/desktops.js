import express from "express";
import mongoose from "mongoose";

import { DesktopModel } from "../models/desktops.js";
//import React,{ useState, useEffect} from 'react'

const router = express.Router();

/*router.get("/", async (req, res) => {
  const desktops = await DesktopModel.find();

  res.json({ desktops: desktops });
});

router.post('/', async (req, res)=>{
    const brand = req.body.brand;
    const model = req.body.model;
    const processor = req.body.processor;
    const ram = req.body.ram;
    const storage = req.body.storage;
    const price = req.body.price; 

    const desktops = await DesktopModel.create({
      brand: brand,
      model: model,
      processor: processor,
      ram:ram,
      storage:storage,
      price:price,



    });
    res.json({ desktops: desktops });
})

/*router.get("/", async (req, res) => {
  try {
    const response = await DesktopModel.find({});
    res.json(response);
    
  } catch (err) {
    res.json(err);
  }
});*/



router.get("/", async (req, res) => {
  try {
    const desktops = await DesktopModel.find({});
    res.json({ desktops });
  } catch (err) {
    res.json(err);
  }
});


router.post("/", async (req, res) => {
  const desktops = new DesktopModel(req.body);
  try {
    const response = await desktops.save();
    res.json(desktops);
  } catch (err) {
    res.json(err);
  }
});



router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDesktop = await DesktopModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (updatedDesktop) {
      res.json(updatedDesktop);
    } else {
      res.status(404).json({ error: "Desktop not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDesktop = await DesktopModel.findByIdAndDelete(id);
    if (deletedDesktop) {
      res.json({ message: "Desktop deleted successfully" });
    } else {
      res.status(404).json({ error: "Desktop not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


export default router;