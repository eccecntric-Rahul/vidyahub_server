import express from "express";
import addCourse from "../controllers/addCourse";
import requiresSignIn from "../middleware/index";
const router = express.Router();


router.post("/add-course",requiresSignIn,addCourse);

module.exports=router;