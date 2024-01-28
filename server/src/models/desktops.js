import mongoose from "mongoose";

const DesktopSchema = new mongoose.Schema({
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
  usage: {
    type: String,
    required: true,
  },
  gpu:{
    type: String,
    required: true,
  }
});

export const DesktopModel = mongoose.model("desktops", DesktopSchema);
