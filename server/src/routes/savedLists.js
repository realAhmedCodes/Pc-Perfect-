import express from "express";

import { SavedListModel } from "../models/savedLists.js";
import { UserModel } from "../models/users.js";

import { verifyToken } from "../routes/users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const savedLists = await SavedListModel.find({});
    res.json(savedLists); // Sending saved lists as response
  } catch (err) {
    res.json(err);
  }
});

router.post("/",verifyToken, async (req, res) => {
  const newSavedList = new SavedListModel(req.body);
  try {
    const savedList = await newSavedList.save();
    res.json(savedList); // Sending the saved list as response
  } catch (err) {
    res.json(err);
  }
});
//********* */
router.get("/:listId", async (req, res) => {
  try {
    const result = await SavedListModel.findById(req.params.listId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const list = await SavedListModel.findById(req.body.listID);
    const user = await UserModel.findById(req.body.userID);
    user.savedList.push(list);
    await user.save();
    res.json({ savedList: user.savedList }); // Sending the updated saved list of the user
  } catch (err) {
    res.json(err);
  }
});

router.get("/savedList/ids/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedList: user?.savedList }); // Sending the user's saved list as response
  } catch (err) {
    res.json(err);
  }
});

router.get("/savedList/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    const savedList = await SavedListModel.find({
      _id: { $in: user.savedList },
    });
    res.json({ savedList }); // Sending the saved list of the user as response
  } catch (err) {
    res.json(err);
  }
});

export default router;
