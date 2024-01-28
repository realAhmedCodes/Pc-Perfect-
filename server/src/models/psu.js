import mongoose from "mongoose";

const PsuSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  wattage: {
    type: String,
    required: true,
  },
  efficiency_rating: {
    type: String,
    required: true,
  },
  modular: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
export const PsuModel = mongoose.model("psu", PsuSchema);
