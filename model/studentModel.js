import mongoose from "mongoose";
const {Schema} = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: "Name is required",
    },
    classNum: {
        type: String,
        
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
    fee: {
        type: String,
        required: "fees description is required",
    },           
    day: {
        type: Date,

    },
    registerTime: {
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
    address: {
        type: String,
    }

});


export default mongoose.model("student",studentSchema);