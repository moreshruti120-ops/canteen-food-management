const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const db = require("./firebase");

const authRoutes = require("./routes/auth");
const paymentRoutes = require("./routes/payment");

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);

// Firebase test
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