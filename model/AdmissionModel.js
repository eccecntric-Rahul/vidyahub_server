import mongoose from "mongoose";
const {Schema} = mongoose;
const {ObjectId} = Schema;
const admissionSchema = new Schema({
        name:{
            type: String,
            trim: true,
            required : "name is required",
        },
        classNum:{
            type: String,
            trim: true,
            required : "Class is required",
        },
        phoneNo:{
            type: Number,
            trim: true,
            required : "phone No  is required",
            maxLength: 10,
            minLength: 8,
            unique: true,
        },
        school:{
            type: String,
            trim: true,
        },
        dob:{
            type: String,
            trim: true,
        },
        gender:{
            type: String,
            trim: true,
            required : "gender is required",
        },
        emailAdd:{
            type: String,
            trim: true,
            required : "email is required",
        },
        courseName:{
            type: String,
            trim: true,
            required : "course name is required",
        },
        fatherName:{
            type: String,
            trim: true,
        },
        motherName:{
            type: String,
            trim: true,
        },
        fatherPhoneNo:{
            type: Number,
            trim: true,
            required : "father's Phone no is required",
        },
        motherPhoneNo:{
            type: Number,
            trim: true,
            required : "Mother's Phone No is required",
        },
        fatherProfession:{
            type: String,
            trim: true,
        },
        motherProfession:{
            type: String,
            trim: true,
        },
        fatherDesignation:{
            type: String,
            trim: true,
        },
        motherDesignation:{
            type: String,
            trim: true,
        },
        branch:{
            type: String,
            trim: true,
            required: "branch is required"
        },
        status:{
            type: String,
            trim: true,
        },
        notes:{
            type: String,
            trim: true,
        },
        referredBy:{
            type: String,
            trim: true,
        },
        aadharCard:{
            type: String,
            trim: true,
        },
        image:{
            data: Buffer,
            contentType: String,
        },
        signature:{
            data: Buffer,
            contentType: String,
        },
        marksheet:{
            data: Buffer,
            contentType: String,
        },
        addressProof:{
            data: Buffer,
            contentType: String,
        },
        schoolId:{
            data: Buffer,
            contentType: String,
        },
        position:{
            type: String,
            trim: true,
        },
});


export default mongoose.model("studentAdmission",admissionSchema);