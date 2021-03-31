import express from "express";
import login, { generateOtp } from "../controllers/login";
const router =express.Router();

router.get("/generate-otp",generateOtp);
router.get("/login",login);

module.exports= router;