import  user  from "../model/UserModel";
const SignUp=async (req,res)=>{

    try{
    if(!req.fields.name)return res.send("name is required");
    else if(!req.fields.password||req.fields.password.length<6)return res.status(400).send("password is required and should be atleast 6 charcters long");
    else if (!req.fields.emailAdd)return res.status(400).send('Email is required');
    else if (!req.fields.position)return res.status(400).send("position is required");
    else if (!req.fields.courseName)return res.status(400).send("Course Name is required");
    let userExist = await user.findOne({email:req.fields.emailAdd}).exec();
    if(userExist)return res.status(400).send('email is taken');
    let data = req.fields;
    let UserModel= new user(data);
    UserModel.save((err,result)=>{
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