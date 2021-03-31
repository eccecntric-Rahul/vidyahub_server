import express from "express";
import razorPay from "../controllers/razorPay";

const router =express.Router();


router.post("/order",razorPay);

module.exports= router;