import studentModel from "../model/studentModel";


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

export default update;