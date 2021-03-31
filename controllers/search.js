import studentModel from "../model/studentModel"
import moment from "moment";
import EnrollmentModel from '../model/EnrollmentModel';
import FeeModel from "../model/feeModel";
const search=async (req,res)=>{
    
    const startDate=moment(req.fields.day).startOf('day');
    const endDate = moment(req.fields.day).endOf('day');
    try{
        if(req.fields.name&&req.fields.day){
           const searchRes= await studentModel.find({name:req.fields.name,createdAt:{$gte:startDate,$lte:endDate}}).sort({branch: 1,createdBy: 1,name:1,class:1,modeOfEnquiry:1,}).exec();
                console.log(searchRes);
             if(searchRes.length==0){return res.status(204).send(`There is no record with this name ${req.fields.name} on ${req.fields.day}`) ; } 
                
             res.status(200).send(searchRes);
            }
        else if(req.fields.name){
        const searchRes= await studentModel.find({name:req.fields.name}).sort({branch: 1,createdBy: 1,name:1,class:1,modeOfEnquiry:1,}).exec();
                console.log(searchRes);
            
                if(searchRes.length==0){return res.status(204).send(`There is no record with this name ${req.fields.name}`); }
                res.status(200).send(searchRes);
            
        }
        else if(req.fields.day){
        const searchRes= await studentModel.find({createdAt:{$gte:startDate,$lte:endDate}}).sort({branch: 1,createdBy: 1,name:1,class:1,modeOfEnquiry:1,}).exec();
            console.log(searchRes);
            if(searchRes.length==0){return res.status(204).send(`There is no record on ${req.fields.day}`) ;}  
            
            res.status(200).send(searchRes);
            
        }
        else if(req.fields.search){
            // console.log(req.fields.search);
            const searchRes= await studentModel.find({$text:{$search:req.fields.search}}).sort({branch: 1,createdBy: 1,name:1,class:1,modeOfEnquiry:1,}).exec();
                console.log(searchRes);
            
                if(searchRes.length==0){return res.status(204).send(`There is no record with this name ${req.fields.name}`); }
                res.status(200).send(searchRes);
            
            }
    }catch(err){
        console.log(err);
    }
}

export default search;

const getStudent= async(req,res)=>{
    try{
        const searchResult = await studentModel.findById(req.params.id);
        res.send(searchResult);
    }catch(err){
        console.log(err);
    }
}
export const dsearch= async(req,res)=>{
    const data = req.headers.search;
    // console.log(req.headers);
    const searchResult=await studentModel.find({
                    "$or":[
                        { name: { "$regex":data,"$options":"i"}},
                        { emailAdd: { "$regex":data,"$options":"i" }}, 
                        { description: { "$regex":data,"$options":"i" }}
                    ]}).limit(10);
                console.log(data);
        if(searchResult){
            res.send(searchResult);
        }
}

export const loadEnrollment= async (req,res)=>{
    const name = req.headers.ename;
    const email= req.headers.eemail;
    const date = req.headers.edate;
    const startDate=moment(date).startOf('day');
    const endDate = moment(date).endOf('day');
    var resp;
    if(name&&email&date){
     resp = await EnrollmentModel.find({ name: { "$regex":name,"$options":"i"},createdAt:{$gte:startDate,$lte:endDate}}).exec();
     } 
     else if(name&&email){
     resp = await EnrollmentModel.find({ name: { "$regex":name,"$options":"i"},emailAdd:email}).exec();
    }
    else if(email&date)
{
     resp = await EnrollmentModel.find({createdAt:{$gte:startDate,$lte:endDate},emailAdd:email}).exec();

} else if (name&&date){
     resp = await EnrollmentModel.find({ name: { "$regex":name,"$options":"i"},createdAt:{$gte:startDate,$lte:endDate}}).exec();

}else if (name){
    resp = await EnrollmentModel.find({ name: { "$regex":name,"$options":"i"}}).exec();

}else if(email){
    resp = await EnrollmentModel.find({emailAdd:email}).exec();
}else if (date){
    resp = await EnrollmentModel.find({createdAt:{$gte:startDate,$lte:endDate}}).exec();

}

if(resp){
    console.log(resp);
    res.status(200).send(resp);
} else{
    res.send("no user found");
}
}

export const getEnrollmentDetails= async (req,res)=>{
        console.log(req.headers.url);
        const enrollResp = await EnrollmentModel.findById(req.headers.url).exec();
        if(enrollResp){
            res.status(200).send(enrollResp);
        }
    }

export const getFeeDetails=async(req,res)=>{
    console.log(req.headers);
   const phone= parseInt(req.headers.phoneno)
    const feeResp = await FeeModel.find({phoneNo:phone}).exec();
    if(feeResp){
    //  console.log(JSON.stringify(feeResp));
        res.status(200).send(feeResp);
    }
}
export {getStudent};