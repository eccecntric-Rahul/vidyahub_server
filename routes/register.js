import express from "express";
import register from "../controllers/register";
const router =express.Router();


router.post("/new-register",register);

module.exports= router;