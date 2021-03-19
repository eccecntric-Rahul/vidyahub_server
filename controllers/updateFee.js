import feeModel from "../model/feeModel";
const updateFee= async(req,res)=>{

    try{
        const response = await feeModel.findOneAndUpdate(req.fields.emailAdd,req.fields);
        if(response)return res.status(200).send(response);
    }catch(err)
    {
        console.log(err);
        res.send(err);
    }
}

export default updateFee;