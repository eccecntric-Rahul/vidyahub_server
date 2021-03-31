import mongoose from "mongoose";
const {Schema} = mongoose;

const Schedule = new Schema({
    branch: {
        type: String,
        trim: true,
        required: "branch Name is required",
    },
    courseName: {
        type: String,
        trim: true,
        required: "Course Name is required",
    },
    subject: {
        type: String,
        trim: true,
        required: "Subject is required",
    },
    topic : {
        type: String,
        trim: true,
        required: "Topic Name is required",
    },
    classDate: {
        type: String,
        trim: true,
        required: "class date is required",
    },
    to: {
        type: String,
        trim: true,
        required: "Class starting time is required",
    },
    from: {
        type: String,
        trim: true,
        required: "Class ending Time is required",
    },
    
    
});

export default mongoose.model("schedule",Schedule);