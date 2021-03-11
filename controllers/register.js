import student from "../model/studentModel";

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

export default register;