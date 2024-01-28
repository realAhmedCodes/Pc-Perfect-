import mongoose from "mongoose";

const ProcessorSchema = new mongoose.Schema({
  brand:{
     type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  generation: {
    type: String,
    required: true,
  },
  cores:{
    type: Number,
    required: true,

  },
  threads: {
    type: Number,
    required: true,
  },
  base_clock: {
    type: String,
    required: true,
  },
  max_clock: {
    type: String,
    required: true,
  },
  cache: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const ProcessorModel = mongoose.model("processor", ProcessorSchema); 