import studentModel from "../model/studentModel"
import moment from "moment";
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

export {getStudent};