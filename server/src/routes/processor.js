import express from 'express'
import mongoose from 'mongoose'
import { ProcessorModel } from '../models/processor.js'


const router= express.Router()


router.get('/', async(req, res)=>{
    try {
      const processors = await ProcessorModel.find({});
      res.json({ processors });
    } catch (err) {
      res.json(err);
    }
})

router.post('/', async(req, res)=>{
    const processors =new ProcessorModel(req.body)
    try {
      const response = await processors.save();
      res.json(processors);
    } catch (err) {
      res.json(err);
    }
})
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProcessor = await ProcessorModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedProcessor) {
      res.json(updatedProcessor);
    } else {
      res.status(404).json({ error: "Processor not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProcessor = await ProcessorModel.findByIdAndDelete(id);
    if (deletedProcessor) {
      res.json({ message: "Processor deleted successfully" });
    } else {
      res.status(404).json({ error: "Processor not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
export default router;