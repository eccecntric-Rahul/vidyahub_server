import CourseModel from "../model/CourseModel";

const addCourse=(req,res)=>{
    
    const {name,to,from,subject1,subject2,subject3} =req.fields;

    if(!name) return res.status(400).send("pls provide a name");
    if(!to) return res.status(400).send("pls provide the starting date");
    if(!from) return res.status(400).send("pls provide the ending date");
    if(!subject1) return res.status(400).send("pls provide the starting class date");
    if(!subject2)return res.status(400).send("pls provide the ending date ");
    if(!subject3)return res.status(400).send("pls provide the ending date ");
    
    let data = req.fields;
    const course= new CourseModel(data);
    course.save((err,result)=>{
        if(err) {
            console.log(err);
            res.status(400).send("error saving");
    
        }res.json(result);
    });

}
export default addCourse;
