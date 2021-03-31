import fs from 'fs';
import AdmissionModel from "../model/AdmissionModel";
import feeModel from "../model/feeModel";
const admission = async (req,res)=>{
    // console.log(req.fields);
    //     console.log(req.fields);
    //     const list =JSON.parse( req.fields.list);
    // // console.log(req.fields);
    //     req.fields.list= list;
    
        if(!req.fields.phoneNo) { res.status(400).send("PhoneNo is required");}
        else{
            const resp= await AdmissionModel.findOne({phoneNo:req.fields.phoneNo}).exec();
            console.log(resp);            
            if(resp==null)
            {
            console.log(req.files);
            const student = await new AdmissionModel(req.fields);
            if(req.files.image)
            {
             student.image.data = fs.readFileSync(req.files.image.path);
             student.image.contentType =  req.files.image.type;   
            }
            if(req.files.signature)
            {
             student.signature.data = fs.readFileSync(req.files.signature.path);
             student.signature.contentType =  req.files.signature.type;   
            }
            if(req.files.marksheet)
            {
             student.marksheet.data = fs.readFileSync(req.files.marksheet.path);
             student.marksheet.contentType =  req.files.marksheet.type;   
            }
            if(req.files.addressProof)
            {
             student.addressProof.data = fs.readFileSync(req.files.addressProof.path);
             student.addressProof.contentType =  req.files.addressProof.type;   
            }
            if(req.files.schoolId)
            {
             student.schoolId.data = fs.readFileSync(req.files.schoolId.path);
             student.schoolId.contentType =  req.files.schoolId.type;   
            }
            
            student.save((err,admissionResult)=>{
            if(err){
                console.log("error saving student",err);
             return  res.status(400).send("error saving admission model");
                
            }else{                
              return  res.json(admissionResult);
             
            }
        });
        }
        else{return res.status(400).send("Phone No already exist")
             }
    }
       
}


export default admission;