import EmployeeModel from "../model/employeeModel";
import jwt from "jsonwebtoken";
import adminModel from "../model/adminModel";
import admissionModel from '../model/AdmissionModel';
var messagebird = require('messagebird')('vrhR1THINLLrHatVtLHMtgIXs');
var otpToken;
var r;
export const generateOtp= async (req,res)=>{
        const phoneNo=req.headers.phoneno;
        const position= req.headers.position;
        var resp;
        console.log(phoneNo);
        const secretKey= process.env.OTP_SECRET_KEY;
    //  token =  authenticator.generate(secretKey);
            var minm = 100000; 
            var maxm = 999999;    
    otpToken= Math.floor(Math.random() * (maxm - minm + 1)) + minm;
        console.log(otpToken);     
        if(otpToken)
        {
            try{
                
                if(position=="staff"){
                 resp = await EmployeeModel.findOne({phoneNo:phoneNo}).exec();
                    // console.log("staff block executed");
                }else if(position=="admin"){
                     resp = await adminModel.findOne({phoneNo:phoneNo}).exec(); 
                }else if (position=="student"){
                     resp = await admissionModel.findOne({phoneNo:phoneNo}).exec();
                }
                console.log(resp);
            if(resp)
            {
                console.log(resp.phoneNo);
            var params = {
                'originator': 'MessageBird',
                'recipients': [
                  `+91${resp.phoneNo}`
              ],
                'body': `This is your otp: ${otpToken}`
              };
          
             await messagebird.messages.create(params, function (err, response) {
                if (err) {
                  return console.log(err);
                }
                console.log(response);
              });

              res.status(200).send("sent the otp");
            }else{
                res.status(400).send('No User found with this phone no');
            }

        }catch(err){
            console.log("Generate OTP ERROR ==>",err);
        }
    }
}

const login = async(req,res)=>{
    const {otp,phoneno,password,position}=req.headers;
    var responseUser;
    console.log(otp,position,phoneno,password);
    if(!otp)return res.status(400).send("PLs Provide an otp");
    try{ 
        if(position=='staff'){
         responseUser = await EmployeeModel.findOne({phoneNo:phoneno}).exec();
         if(responseUser)r=true;
        }
         else if(position=="admin")
        { console.log("admin block executed");
         responseUser = await adminModel.findOne({phoneNo:phoneno}).exec();
          console.log(responseUser);
         r= await responseUser.comparePassword(password);  
        if(r==false)res.status(400).send("wrong Password");
    } 
    else if(position=="student")
    {
         responseUser = await admissionModel.findOne({phoneNo:phoneno}).exec();
        if(responseUser)
        {
            r= true;
        }
    }
        console.log(responseUser);
        if(!responseUser){ res.status(400).send("user with this mobile no do not found");}
        try{
            if(otpToken==otp||r==true)
            {
              var otpMatch=true;
              console.log("match password==>",otpMatch);
            }
                
            if(otpMatch==false) return res.status(400).send("OTP invalid");
            
            if(otpMatch==true){
            
                let token=jwt.sign({_id:responseUser._id},process.env.SECRET_KEY,{
                    expiresIn: "7d",
                });
                console.log("block executed");
                res.json({token,user:{
                    _id:responseUser._id,
                    name:responseUser.name,
                    emailAdd:responseUser.emailAdd,
                    position: responseUser.position,
                    branch: responseUser.branch,
                    phoneNo: responseUser.phoneNo,
                }});
            }
        }catch(err){
            console.log(err);
        }
        
        
}catch(err){
    return res.send(err);
}

}


export default login;