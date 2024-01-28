import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  savedUserId: [{ type: mongoose.Schema.Types.ObjectId, ref: "savedList" }],
});

export const UserModel = mongoose.model("users", UserSchema);
