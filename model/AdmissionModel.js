import mongoose from "mongoose";
const {Schema} = mongoose;
const {ObjectId} = Schema;
const admissionSchema = new Schema({
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
        unique: true,
    },
    phoneNo: {
        type: String,
        minLength: 10,
        maxLength: 10,
    },
    address: {
        type: String,
    },
    dob: {
        type: Date
    },
    religion: {
        type: String,
    },
    addharCard: {
        type: Number,
    },
    image: {
        type: Buffer,
        contentType: String,
    },
    signature: {
        type: Buffer,
        contentType: String,
    },
    feeId: {
        type: ObjectId,
        ref: "fee",
    },


});


export default mongoose.model("studentAdmission",admissionSchema);