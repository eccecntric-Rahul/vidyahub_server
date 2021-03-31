import ScheduleModel from "../model/scheduleModel";

const addSchedule= async (req,res)=>{

    const {branch,courseName,subject,topic,to,from,classDate}= req.fields;
    if(!branch) return res.status(400).send("pls enter a branch name");
    if(!courseName) return res.status(400).send("pls enter a course Name ");
    if(!subject) return res.status(400).send("pls enter a subject");
    if(!topic) return res.status(400).send("pls enter a topic name");
    if(!to) return res.status(400).send("pls enter a ending time ");
    if(!from) return res.status(400).send("pls enter a starting time ");
    if(!classDate) return res.status(400).send("pls enter a Date ");
    const Schedule= await new ScheduleModel(req.fields);
    Schedule.save((err,result)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        res.json(result);
    });
}

export default addSchedule;