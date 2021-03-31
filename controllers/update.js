import studentModel from "../model/studentModel";
import feeModel from "../model/feeModel";


const update=async (req,res)=>{
    try{ const updateObj={
        name: req.fields.name,
        classNum: req.fields.classNum,
        age: req.fields.age,
        fatherName: req.fields.fatherName,
        fee: req.fields.fee,
        description: req.fields.description,
        day: req.fields.day,
        registerTime: req.fields.registerTime,
        courseName: req.fields.courseName,
        phoneNo: req.fields.phoneNo,
        emailAdd: req.fields.emailAdd,
        address: req.fields.address,        

        }
        console.log(req.params.id)
        const response=await studentModel.findByIdAndUpdate(req.params.id,updateObj).exec();
        console.log(response);
        if(response){
            res.status(200).send(response);
        }
    }catch(err)
    {
        console.log(err);
    }
}
export const updateFee= async(req,res)=>{
    const list =JSON.parse( req.fields.list);
    console.log(req.fields);
    req.fields.list= list;
    
    try{
        const response = await feeModel.findOneAndUpdate(req.fields.phoneNo,req.fields);
        console.log(response);
        if(response)return res.status(200).send(response);
    }catch(err)
    {
        console.log(err);
    }
}

export default update;