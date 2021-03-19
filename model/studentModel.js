import mongoose from "mongoose";
const {Schema} = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: "Name is required",
    },
    classNum: {
        type: Number,
        
    },
    fatherName: {
        type: String,
        required: "Father name is required",
    },
    age: {
        type: Number,
    },
    courseName: {
        type: String,
    },
    school: {
        type: String,
    },
    
    emailAdd: {
        type: String,
    },
    phoneNo: {
        type: String,
        minLength: 10,
        maxLength: 10,
    },
    modeOfEnquiry: {
        type: String,
    },
    branch:{
        type: String,
    },
    refferedBy:{
        type: String,
    },
    leadGeneratedBy: {
        type: String,
    },
    leadFollowedUpBy: {
        type: String,
    },
},{timestamps: true});


export default mongoose.model("student",studentSchema);