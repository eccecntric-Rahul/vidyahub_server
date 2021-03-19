import mongoose from "mongoose";

const {Schema}= mongoose;


const CourseSchema= new Schema({
    name: {
        type: String,
        required: "Course Name is required",
    },
    from: {
        type: String,
        required: "From Date is required",
    },
    to: {
        type: String,
        required: "Course ending date is required",
    },
    classFrom: {
        type: String,
        required: "Class starting date required",
    },
    classTo: {
        type: String,
        required: "Class ending date is required",
    },
    
});


export default mongoose.model("course",CourseSchema);
