import express from "express";
import  getCourse  from "../controllers/getCourse";
import loadBranch from "../controllers/loadBranch";
import loadCourse from "../controllers/loadCourse";
import search, { dsearch, getEnrollmentDetails, getFeeDetails, loadEnrollment } from "../controllers/search";
import {getStudent} from "../controllers/search";
import { loadTopic } from "../controllers/topic";

const router = express.Router();


router.post("/search",search);
router.get("/search/:id",getStudent);
router.get("/dsearch",dsearch);
router.get("/get-course",getCourse);
router.get("/load-course",loadCourse);
router.get("/load-branch",loadBranch);
router.get("/load-topic",loadTopic);
router.get('/enrollment',loadEnrollment);
router.get("/get-enrollment",getEnrollmentDetails);
router.get("/get-fee-details",getFeeDetails);
module.exports=router;