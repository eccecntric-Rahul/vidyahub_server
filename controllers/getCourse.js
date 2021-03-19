import CourseModel from "../model/CourseModel";

const getCourse= async (req,res)=>{
    
    const response = await CourseModel.find({}).select("name");
     console.log(response);   
    return res.status(200).send(response);
}

export default getCourse;