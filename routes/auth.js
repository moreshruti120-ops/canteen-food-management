const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 🔥 Firebase
const db = require("../firebase");

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save(); // MongoDB save (existing)

    // 🔥 Save user to Firebase Firestore
    await db.collection("users").add({
      email: req.body.email,
      password: req.body.password,
      createdAt: new Date()
    });

    res.json({ message: "User Registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  // 🔥 Save login record to Firebase
  await db.collection("logins").add({
    email: req.body.email,
    loginTime: new Date()
  });

  res.json({ message: "Login Success", user });
});

module.exports = router;