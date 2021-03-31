import express from "express";
import update from "../controllers/update";
import {updateFee} from "../controllers/update";
import requireSignIn from "../middleware/index";
const router= express.Router();

router.put("/update/:id",update);
router.put("/update-fee",requireSignIn,updateFee);
module.exports =router;