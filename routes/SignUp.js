import express from "express";
import SignUp from "../controllers/SignUp";

const router = express.Router();

router.post("/signup",SignUp);


module.exports= router;