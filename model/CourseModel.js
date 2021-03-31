import mongoose from "mongoose";

const {Schema}= mongoose;


const CourseSchema= new Schema({
    name: {
        type: String,
        required: "Course Name is required",
        trim: true,
    
    },
    branch: {
        type: String,
        trim: true,
    },
    from: {
        type: String,
        required: "From Date is required",
    },
    to: {
        type: String,
        required: "Course ending date is required",
    },
    subject1: {
        type: String,
        required: "Subject 1 is required",
    },
    subject2: {
        type: String,
        required: "subject 2 is required",
    },
    subject3: {
        type: String,
        required: "subject 3 is required"
    },
    
});


export default mongoose.model("course",CourseSchema);
