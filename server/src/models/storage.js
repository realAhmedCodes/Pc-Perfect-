import mongoose from "mongoose";

const StorageSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  interface: {
    type: String,
    required: true,
  },
  read_speed: {
    type: String,
    required: true,
  },
  write_speed: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
export const StorageModel = mongoose.model("storage", StorageSchema);
