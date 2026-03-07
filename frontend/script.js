const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const db = require("../backend/firebase");

const authRoutes = require("../backend/routes/auth");
const paymentRoutes = require("../backend/routes/payment");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);

// 🔥 TEST FIREBASE ROUTE
app.get("/test", async (req, res) => {
  try {
    await db.collection("test").add({
      name: "Kaushik",
      project: "Canteen System",
      time: new Date()
    });

    res.send("Data saved to Firebase 🚀");
  } catch (err) {
    console.error(err);
    res.send("Error saving data");
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
  console.log("🔥 Firebase Connected");

  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
  });
})
.catch(err => console.log(err));