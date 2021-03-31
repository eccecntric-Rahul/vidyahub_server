import mongoose from "mongoose";
const {Schema} = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: "Name is required",
        trim: true,
    },
    classNum: {
        type: String,
        
    },
    fatherName: {
        type: String,
        trim: true,
        required: "Father name is required",
    },
    age: {
        type: Number,
        trim: true,
    },
    courseName: {
        type: String,
        trim: true,
    },
    school: {
        type: String,
        trim: true,
    },
    
    emailAdd: {
        type: String,
        trim: true,
    },
    phoneNo: {
        type: String,
        minLength: 10,
        trim: true,
        maxLength: 10,
    },
    modeOfEnquiry: {
        type: String,
        trim: true,
    },
    branch:{
        type: String,
        trim: true,
    },
    refferedBy:{
        type: String,
        trim: true,
    },
    leadGeneratedBy: {
        type: String,
        trim: true,
    },
    leadFollowedUpBy: {
        type: String,
        trim: true,
    },
    enquiryType:{
        type: String,
        trim: true,
    },
    branch: {
        type: String,
        trim: true,
    },
    status:{
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    interest: {
        type: String,
        trim: true,
    },
    assignee: {
        type: String,
        trim: true,
    },
},{timestamps: true});

studentSchema.index({name:"text",fatherName:"text",emailAdd:"text",school:"text"},
{weights:{name:4,fatherName:2,emailAdd:3,school:1}});
export default mongoose.model("student",studentSchema);