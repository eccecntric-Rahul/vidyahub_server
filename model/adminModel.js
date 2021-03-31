import mongoose from "mongoose";
import bcrypt from "bcrypt";
const {Schema}= mongoose;

const adminSchema= new Schema({
    name:{
        type: String,
        required: "Name is required"
    },
    phoneNo: {
        type: String,
        required: "email is required",
        unique: true,
    },
    password: {
        type: String,
        required: "password is required", 
    },
    position:{
        type: String,
        required: "accType is Required",
    },
});


adminSchema.pre("save",function(next){
    let user = this;
    if(user.isModified("password")){
        return bcrypt.hash(user.password,12,function(err,hash){
            if(err){
                console.log(err);
                return next();
            }
            user.password=hash;
            return next();
        })
    }else return next();
});

adminSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
    // bcrypt.compare(password,this.password,function(err,match){
    //     if(err) {
    //         console.log("password error",err);
    //         return next(err,false);
    //     }
    //     else if(match){
    //         console.log("passwords match",match);
    //         return next(null,match);
    //     }
    // });
}

export default mongoose.model("admin",adminSchema);