import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  motherboard_support: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  storage_bays: {
    type: String,
    required: true,
  },
  gpu_length_support: {
    type: String,
    required: true,
  },
  
  cooling_support: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
export const CaseModel = mongoose.model("case", CaseSchema);
