import mongoose from "mongoose";
import bcrypt from "bcrypt";
const {Schema}= mongoose;

const UserSchema= new Schema({
    name:{
        type: String,
        required: "Name is Required",
    },
    emailAdd:{
        type: String,
        required: "Email is Required",
        unique: true,
    },
    position: {
        type: String,
        
    },
    password: {
        type: String,
        required: "password is required",
        min: 6,
        max: 64,
    },
    phoneNo: {
        type: String,
        
    },
    courseName:{
        type: String,
        required : "course name is required"
    }
});


UserSchema.pre("save",function(next){
    let user = this;

    if(user.isModified("password")){
        return bcrypt.hash(user.password,12,function(err,hash){
            if(err){
                console.log('BCRYPT HASH ERR',err);
                return next();
            }
            user.password=hash;
            return next();
        })
    }else{
        return next();
    }
});

UserSchema.methods.comparePassword = function(password){
    bcrypt.compare(password,this.password, function(err,match){
        if(err){
            console.log("Compare password err",err);
            return false;
        }
        console.log("Match password",match);
        return match;
    });

}

UserSchema.methods.checkPosition=function(position){
    if(this.position==position){
        
        return true;

    }
}


export default mongoose.model("user",UserSchema);