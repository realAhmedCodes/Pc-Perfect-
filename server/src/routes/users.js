import express from "express";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  const user = await UserModel.findOne({ username: username });

  if (user) {
    return res.json({ message: "User Exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword, role });
  await newUser.save();
  res.json({ message: "User Registered " });
});

router.post("/login", async (req, res) => {
  const { username, password, role } = req.body;
  const user = await UserModel.findOne({ username: username });

  if (!user) {
    return res.json({ message: "User doesnt exist" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Username Or Password is incorrect" });
  }
 const isRoleValid = role.toLowerCase() === user.role.toLowerCase();

  if(!isRoleValid){
     return res.json({ message: "Role  incorrect" });
  }

  const token = jwt.sign({ id: user._id , role: user.role}, "secret");
  res.json({ token, userID: user._id, userRole: user.role });
});

export default router;

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next(); 
    });
  } else {
    res.sendStatus(401);
  }
};

