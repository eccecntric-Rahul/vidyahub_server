import express from "express";
import addCourse from "../controllers/addCourse";
import requireSignIn from "../middleware/index";
const router = express.Router();


router.post("/add-course",requireSignIn,addCourse);

module.exports=router;