import student from "../model/studentModel";
import enrollmentModel from "../model/EnrollmentModel";
import feeModel from "../model/feeModel";
const register= async (req,res)=>
{
    try{
        let data= req.fields;
        let studentmodel = new student(data);
        studentmodel.save((err,result)=>{
            if(err){
                console.log("error saving student",err);
                res.status(400).send("error saving");
                
            }
            res.json(result);
        });
    }catch(err){
        console.log(err);
        res.status(400).json({
            err: err.message,
        });
    }
}
export const enrollment =async (req,res)=>{
    if(!req.fields.name)return res.status(400).send("name is required");
    if(!req.fields.phoneNo)return res.status(400).send("Phone no is required");
    const enroll= new enrollmentModel(req.fields);
    enroll.save((err,result)=>{
        if(err)
        {   console.log(err);
             res.status(400).send("err saving")}
        res.json(result);
    });
    
}

export const fee= async (req,res)=>{
    const list =JSON.parse( req.fields.list);
    console.log(req.fields);
    req.fields.list= list;
    // console.log(list);
    const fee= new feeModel(req.fields);
    
    fee.save((err,result)=>{
        if(err)
        {   console.log(err);
             res.status(400).send("err saving")}
        res.json(result);
    });
}
export default register;