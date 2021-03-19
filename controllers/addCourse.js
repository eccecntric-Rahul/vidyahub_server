import CourseModel from "../model/CourseModel";

const addCourse=(req,res)=>{
    
    const {name,to,from,classTo,classFrom} =req.fields;

    if(!name) return res.status(400).send("pls provide a name");
    if(!to) return res.status(400).send("pls provide the starting date");
    if(!from) return res.status(400).send("pls provide the ending date");
    if(!classTo) return res.status(400).send("pls provide the starting class date");
    if(!classFrom)return res.status(400).send("pls provide the ending date ");
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
