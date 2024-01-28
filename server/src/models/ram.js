import mongoose from "mongoose";

const RamSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 
});
export const RamModel = mongoose.model("ram", RamSchema);
