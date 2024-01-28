import mongoose from "mongoose";

const LaptopSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  gpu: {
    type: String,
    required: true,
  },
  usage: {
    type: String,
    required: true,
  },
  battery: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
  camera: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  ports: {
    type: String,
    required: true,
  },
  display: {
    type: String,
    required: true,
  },
});
export const LaptopModel = mongoose.model("laptops", LaptopSchema);