import  AdminModel  from "../model/adminModel";
const SignUp=async (req,res)=>{ 
        console.log(req.fields);
    try{
    if(!req.fields.name)return res.send("name is required");
    else if(!req.fields.password||req.fields.password.length<6)return res.status(400).send("password is required and should be atleast 6 charcters long");
    else if (!req.fields.position)return res.status(400).send('position is required');
    else if (!req.fields.phoneNo)return res.status(400).send("phoneNo is required");
    let userExist = await AdminModel.findOne({phoneNo:req.fields.phoneNo}).exec();
    if(userExist)return res.status(400).send('phoneNo is taken');
    let data = req.fields;
    let admin= new AdminModel(data);
    admin.save((err,result)=>{
        if(err){
            console.log("error saving student",err);
            res.status(400).send("error saving");
            
        }
        res.json(result)
    });
    
}catch(err){
    console.log(err);
    res.status(400).send(err);
}
}
export default SignUp;