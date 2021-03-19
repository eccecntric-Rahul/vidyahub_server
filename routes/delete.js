import express from "express";
import deleteControl from "../controllers/deleteControl";
const router =express.Router();


router.delete("/delete",deleteControl);

module.exports= router;