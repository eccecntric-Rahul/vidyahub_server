import CourseModel from "../model/CourseModel";
const loadCourse=async (req,res)=>{

    console.log(req.headers.coursename);
    const response=await CourseModel.find({name:req.headers.coursename}).exec();
        console.log(response);   
    res.status(200).send(response);
}

export default loadCourse;