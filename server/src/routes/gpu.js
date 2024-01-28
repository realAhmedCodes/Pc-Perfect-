import express from "express"
import { GpuModel } from "../models/gpu.js"

const router = express.Router();

router.get('/', async(req,res)=>{
    try{
        const gpus= await GpuModel.find({})
        res.json(gpus)
    }
    catch (err) {
    res.json(err);
  }
})


router.post('/', async(req, res)=>{
    const gpus= new GpuModel(req.body)
    try {
      const response = await gpus.save();
      res.json(gpus);
    } catch (err) {
      res.json(err);
    }
})
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedGpu = await GpuModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedGpu) {
      res.json(updatedGpu);
    } else {
      res.status(404).json({ error: "Gpu not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a processor by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGpu = await GpuModel.findByIdAndDelete(id);
    if (deletedGpu) {
      res.json({ message: "Gpu deleted successfully" });
    } else {
      res.status(404).json({ error: "Gpu not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
export default router;