import express from "express";
import update from "../controllers/update";
import updateFee from "../controllers/updateFee";
const router= express.Router();

router.put("/update/:id",update);
router.put("/update-fee",updateFee);
module.exports =router;