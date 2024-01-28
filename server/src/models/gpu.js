import mongoose from 'mongoose'

const GpuSchema = new mongoose.Schema({
  brand:{
     type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cuda_cores: {
    type: Number,
    required: true,
  },
  boost_clock_ghz: {
    type: Number,
    required: true,
  },
  memory_size_gb: {
    type: Number,
    required: true,
  },
  memory_type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const GpuModel= mongoose.model("gpu", GpuSchema)