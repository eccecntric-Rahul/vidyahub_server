import AdmissionModel from "../model/AdmissionModel";
import feeModel from "../model/feeModel";
const admission = async (req,res)=>{
    // console.log(req.fields);
    const defaultAmount=0;
    var admissionResult,feeResult;
        if(!req.fields.emailAdd) return res.status(400).send("email is required");
        try { const student = await new AdmissionModel(req.fields);
              
            student.save((err,admissionResult)=>{
            if(err){
                console.log("error saving student",err);
                res.status(400).send("error saving admission model");
                
            }
            
        });
        const fee = await new feeModel({name:req.fields.name,
            emailAdd:req.fields.emailAdd,status:req.fields.fee ,amount:defaultAmount});
                fee.save((err,feeResult)=>{
                    if(err){
                        console.log(err);
                        res.status(400).send("error saving fee model");
                    }
                    res.json({admissionResult,feeResult});
                });
    

    }catch(err){
        console.log(err);
        res.send("error saving");
    }
   }



export default admission;