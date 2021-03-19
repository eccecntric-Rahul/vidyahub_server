import express from "express";
import admission from "../controllers/admission";
import register from "../controllers/register";
const router =express.Router();


router.post("/new-register",register);
router.post("/admission",admission);

module.exports= router;