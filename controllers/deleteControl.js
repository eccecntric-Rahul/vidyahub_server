import studentModel from "../model/studentModel";

const deleteControl = async (req,res)=>{
    console.log(req.query.id);
    const response = await studentModel.findByIdAndRemove(req.query.id,function(err,docs){
        if(err){
            console.log(err);

        }
        else{
            console.log("Removed User");
            res.status(200).send(docs);
        }
    })
    
}

export default deleteControl;