const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../firebase");

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

    await db.collection("payments").add({
      userEmail: req.body.userEmail,
      paymentMethod: req.body.paymentMethod,
      transactionId: req.body.transactionId,
      amount: req.body.amount,
      items: req.body.items,
      createdAt: new Date()
    });

    res.json({ message: "Payment saved successfully" });

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

});

module.exports = router;