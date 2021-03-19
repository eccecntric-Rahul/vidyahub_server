import User from "../model/UserModel";
import jwt from "jsonwebtoken";
const login=async(req,res)=>{
    const {emailadd,password,position}=req.headers;

    if(!emailadd)return res.status(400).send("PLs Provide an email");
    if(!password)return res.status(400).send("PLs Provide a password");
    if(!position)return res.status(400).send("PLs Provide a position");
    try{
        const responseUser = await User.findOne({emailAdd:emailadd}).exec();;
        console.log(responseUser);
        if(!responseUser){ res.status(400).send("user with this email not found");}
        const positionCheck = await responseUser.checkPosition(position);
        if(positionCheck!=true)return res.status(400).json("Positon is wrong");
        console.log(positionCheck);
        const match = responseUser.comparePassword(password);
        console.log(match);
        if(match==false) return res.send("password does not match");
        let token=jwt.sign({_id:responseUser._id},process.env.SECRET_KEY,{
            expiresIn: "7d",
        });
        res.json({token,user:{
            emailAdd:responseUser.emailAdd,
            _id: responseUser._id,
            position: responseUser.position,
            name: responseUser.name,
            courseName: responseUser.courseName,
        }});
        
}catch(err){
    return res.send(err);
}

}


export default login;