import mongoose from "mongoose";
const MoboSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  socket: {
    type: String,
    required: true,
  },
  chipset: {
    type: String,
    required: true,
  },
  generation_support: {
    type: String,
    required: true,
  },
  memory_slots: {
    type: Number,
    required: true,
  },
  max_memory: {
    type: String,
    required: true,
  },
  memory_type: {
    type: String,
    required: true,
  },
  form_factor: {
    type: String,
    required: true,
  },
  compatible: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const MoboModel = mongoose.model("mobo", MoboSchema);
