import express from "express";
import  getCourse  from "../controllers/getCourse";
import loadCourse from "../controllers/loadCourse";
import search from "../controllers/search";
import {getStudent} from "../controllers/search";
const router = express.Router();


router.post("/search",search);
router.get("/search/:id",getStudent);
router.get("/get-course",getCourse);
router.get("/load-course",loadCourse);
module.exports=router;