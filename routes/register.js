import express from "express";
import admission from "../controllers/admission";
import { addBranch } from "../controllers/branch";
import { addEmployee } from "../controllers/employee";
import register, { enrollment, fee } from "../controllers/register";
import addSchedule from "../controllers/schedule";
import addTopics from "../controllers/topic";
import requireSignIn from "../middleware/index"
import csvFile from '../controllers/csv';
const router =express.Router();


router.post("/new-register",requireSignIn,register);
router.post("/admission",requireSignIn,admission);
router.post('/add-employee',requireSignIn, addEmployee);
router.post("/add-branch",requireSignIn,addBranch);
router.post("/add-topic",requireSignIn,addTopics);
router.post("/add-schedule",requireSignIn,addSchedule);
router.post("/enrollment",requireSignIn,enrollment);
router.post('/fee-schedule',requireSignIn,fee);
router.post('/upload-file',csvFile);

module.exports= router;