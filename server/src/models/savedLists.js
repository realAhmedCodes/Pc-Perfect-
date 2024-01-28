import mongoose from "mongoose";

const savedListsSchema = new mongoose.Schema({
  cpuModel: {
    type: String,
    required: true,
  },
  motherboardModel: {
    type: String,
    required: true,
  },
  gpuModel: {
    type: String,
    required: true,
  },
  ramModel: {
    type: String,
    required: true,
  },
  caseModel: {
    type: String,
    required: true,
  },
  storageModel: {
    type: String,
    required: true,
  },
  psuModel: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },

  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

export const SavedListModel = mongoose.model("savedList", savedListsSchema);
