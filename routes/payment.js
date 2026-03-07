const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userEmail: String,
  paymentMethod: String,
  transactionId: String,
  amount: Number,
  items: Array,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Payment = mongoose.model("Payment", paymentSchema);

router.post("/", async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.json({ message: "Payment Saved Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;